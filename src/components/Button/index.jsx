import "./styles.css";

import { Component } from 'react';

export class Button extends Component{
  render() {
    const { text, Clicando, disabled} = this.props;
    
    return (
      <button  
        className='button'
        onClick={Clicando}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }
}