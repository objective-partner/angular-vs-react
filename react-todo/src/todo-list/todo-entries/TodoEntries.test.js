import React from 'react';
import ReactDOM from 'react-dom';

describe('TodoEntries', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
    };
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoEntries />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
