import React from "react";

class Form extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value) 
  }

  render() {
    return(
       <form>
         <input onChange = {this.handleChange} value = {this.props.value || this.props.secret} />
       </form>
    );
  }
}

export default Form;