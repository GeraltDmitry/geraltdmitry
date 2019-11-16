import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Table from './components/Table';


class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    table: [],
  };

  componentDidMount() {
    this.sayHello();
    this.getTable();
  }

  render () {
    return (
      <div className="App">
        <div className="enter">
          <Input placeholder={'Имя'} value={this.state.firstName} onChange={this.handleChangeFirstName} />
          <Input placeholder={'Фамилия'} value={this.state.lastName} onChange={this.handleChangeLastName} />
          <Button label={'Добавить'} onClick={this.handleClick} />
        </div>
        <Table table={this.state.table} onDelete={this.handleDeletePerson}/>
      </div>
    );
  }

  handleChangeFirstName = (value) => {
    console.log(value);
    this.setState({ firstName: value });
  };

  handleChangeLastName = (value) => {
    console.log(value);
    this.setState({ lastName: value });
  };

  handleClick = () => {
    console.log('click');
    this.handleAddPerson();
    this.setState({
      firstName: '',
      lastName: '',
    })
  };

  sayHello = () => {
    axios.get('http://localhost:4000/hello')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getTable = () => {    
    axios.get('http://localhost:4000/get-table')
      .then((response) => {
        this.setState({ table: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ table: [] });
      });
  };

  handleAddPerson = () => {
    if (!this.state.firstName && !this.state.lastName) {
        return;
    }
  
    axios.post('http://localhost:4000/add-person', {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
      .then((response) => {
        console.log(response.data);
        this.setState({ table: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ table: [] });
      });
  };

  handleDeletePerson = (index) => () => {    
    axios.post('http://localhost:4000/delete-person', {
      index
    })
      .then((response) => {
        console.log(response.data);
        this.setState({ table: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ table: [] });
      });
  };

};

export default App;
