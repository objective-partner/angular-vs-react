import React from 'react';
import './TodoEntries.css';
import PropTypes from 'prop-types';

function TodoEntries(props) {
  const { entries } = props;
  const list = entries.map(entry => <p>{entry}</p>);
  return (
    <div className="todos-entries">
      <h2 className="todo-entries-title">TODO for today</h2>
      {list}
    </div>
  );
}

TodoEntries.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TodoEntries;
