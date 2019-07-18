import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToDo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({ title: '' });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: 'flex', padding: '5px' }}
      >
        <input
          type="text"
          name="title"
          placeholder="Add Todo"
          style={{ flex: '10' }}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
// PropTypes
AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default AddToDo;
