import path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';
import { Server } from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import moment from 'moment';

import routes from '../common/routes';
import { validate, validateEmail } from '../common/utils/validation';


const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.post('/api/accounts/create', (req, res) => {
  console.log(req);
  if (!validate(req.body.name, 1)) {
    res.json({ status: 403, message: 'Bad request' });
    return
  }

  if (!validate(req.body.email, 1) || !validateEmail(req.body.email)) {
    res.json({ status: 403, message: 'Bad request' });
    return
  }

  if (req.body.birthday != null) {
    const years = Math.floor(moment(new Date()).diff(req.body.birthday, 'years', true));
    if (years < 18) {
      res.json({ status: 403, message: 'Bad request' });
      return
    }
  }

  res.json({ status: 200, message: 'Success' });
});

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    let markup;
    if (renderProps) {
      markup = renderToString(<RouterContext {...renderProps} />);
    } else {
      res.status(404);
    }

    return res.render('index', { markup });
  });
});

const port = process.env.PORT || 3000;
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Server running on http://localhost:${port}`);
  }
});
