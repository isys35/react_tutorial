import React from "react";
import ReactDOM from 'react-dom';
import './index.css';


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Дмитрий',
    lastName: 'Дроздов',
    avatrUrl: '',
};

const element = <div tabIndex="0"></div>
const element_1 = <img src={user.avatrUrl}/>
const element_2 = (
    <div>
        <h1>Здравствуйте</h1>
        <h2>Рады вас видеть.</h2>
    </div>
);




function getGreeting(user) {
    if (user) {
        return <h1>Здравствуй, {formatName(user)}!</h1>
    }
    return <h1>Здравствуй, незнакомец</h1>
}

ReactDOM.render(getGreeting(user), document.getElementById('root'));