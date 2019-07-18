import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    Axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(
      response => this.setState({ todos: response.data })
    ); //promise
  }

  //toogle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // delete element
  delTodo = id => {
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then(
      response => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)],
        });
      }
    );
  };

  //add to do
  addToDo = title => {
    Axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    }).then(response => {
      response.data.id = uuid.v4();
      this.setState({ todos: [...this.state.todos, response.data] });
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
