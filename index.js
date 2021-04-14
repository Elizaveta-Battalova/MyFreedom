import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

class Application extends React.Component {
  state = {
    secret: null,
    value: ""
  }

  passToParent = val => {
    this.setState = ({secret: val});
  }
  
  handleChange = (value) => {
    this.setState(prevState => ({value: prevState.value + value}))
  }
  render () {
    const {secret, value} = this.state;
  
    return(
        <>
        <Form secret={secret} value={value} onChange={ this.handleChange}/>
        <List title = {value} passToParent = {this.passToParent} />
        </>
    ) 
  }
}






reportWebVitals();
