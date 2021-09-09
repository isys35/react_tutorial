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


ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
