import React from 'react';
import ReactDOM from 'react-dom';

describe('TodoList', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
    };
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
