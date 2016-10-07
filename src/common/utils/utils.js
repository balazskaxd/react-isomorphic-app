/* eslint "arrow-body-style": "off" */

export const styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px #ccc'
  }
};

export function matchOptionToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

export function getOptions() {
  return [
    { name: 'Back-end developer' },
    { name: 'Front-end developer' },
    { name: 'Full-stack developer' },
    { name: 'Node.js developer' }
  ];
}

export function sortOptions(a, b, value) {
  return (
    a.name.toLowerCase().indexOf(value.toLowerCase()) >
    b.name.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1
  );
}
