import React from 'react';
import ReactDOM from 'react-dom';

describe('Post', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
    };
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Post />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
