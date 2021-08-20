import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />,
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}


function UserInfo(props) {
    return (
        <Avatar user={props.user} />,
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    )
}

/*const element = <Welcome name="ДИМОООООН"/>*/

ReactDOM.render(<App />, document.getElementById("root"))
