import React from "react";
import ReactDOM from 'react-dom';
import './index.css';


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Вода закипит.</p>
    }
    return <p>Вода не закипит.</p>
}

ReactDOM.render(
  <BoilingVerdict celsius={55}/>,
  document.getElementById('root')
);
