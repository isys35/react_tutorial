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


ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);
