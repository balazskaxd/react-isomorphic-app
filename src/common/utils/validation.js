/* eslint "max-len": "off", "prefer-default-export": "off", "import/prefer-default-export": "off" */

export function validate(text, minLength) {
  if (text === null) {
    return false;
  }

  const str = text.trim();
  return str.length >= minLength;
}

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
