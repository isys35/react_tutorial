import React from "react";
import ReactDOM from 'react-dom';
import './index.css';



class LoggingButton extends React.Component {
  // Такой синтаксис гарантирует, что `this` привязан к handleClick.
    // Предупреждение: это экспериментальный синтаксис
  handleClick() {
    console.log('значение this:', this);
  }
  render() {
    return (
      <button onClick={() => this.handleClick()}>
        Нажми на меня
      </button>
    );
  }
}

ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
)