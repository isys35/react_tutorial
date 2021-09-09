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
        </FancyBorder>
    );
}


function WelcomeDialog() {
    return (
        <Dialog title="Добро пожаловать" message="Спасибо, что посетили наш корабль! "></Dialog>
    );
}


ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);
