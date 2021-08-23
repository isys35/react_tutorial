import React from "react";
import ReactDOM from 'react-dom';
import './index.css';



class LoggingButton extends React.Component {
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

<button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button>
<button onClick={this.deleteRow(this, id)}>Удалить строку</button>

ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
)