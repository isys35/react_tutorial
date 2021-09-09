import React from "react";
import ReactDOM from 'react-dom';
import './index.css';


function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

function Contacts() {
    return (
        <p>Контакты</p>
    )
}


function Chat() {
    return (
        <p>Чат</p>
    )
}

function App() {
    return (
        <SplitPane left={<Contacts />} right={<Chat />}></SplitPane>
    );
}


function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}


function WelcomeDialog() {
    return (
        <Dialog title="Добро пожаловать" message="Спасибо, что посетили наш корабль! "></Dialog>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title="Программа исследования Марса" message="Как к вам обращаться?">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Запишите меня
                </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Добро пожаловать на борт, ${this.state.login}!`);
    }

}


ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
);
