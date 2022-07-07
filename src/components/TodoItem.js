import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { handleChangeProps, deleteTodoProps } = this.props;
    const { id, title, completed } = this.props.todo;
    return <li>
      <input 
      type="checkbox" 
      checked={completed}
      onChange={() => handleChangeProps(id)}
      /> {title}
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
    </li>
  }
}
