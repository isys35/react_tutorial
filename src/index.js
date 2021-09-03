import React from "react";
import ReactDOM from 'react-dom';
import './index.css';


class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Ваш любимый вкус: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выберите ваш любимый вкус:
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Грейпфрут</option>
                <option value="lime">Лайм</option>
                <option value="coconut">Кокос</option>
                <option value="mango">Кокос</option>
            </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
    }
}


ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);
