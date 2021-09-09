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

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Добро пожаловать
            </h1>
            <p className="Dialog-message">
                Спасибо, что посетили наш космический корабль!
            </p>
        </FancyBorder>
    );
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


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
