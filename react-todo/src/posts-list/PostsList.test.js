import React from 'react';
import ReactDOM from 'react-dom';

describe('PostsList', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
    };
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
