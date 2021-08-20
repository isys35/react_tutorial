import React from "react";
import ReactDOM from 'react-dom';
import './index.css';


function Welcome(props) {
    return <h1>Привет, {props.name}</h1>
}

/*
class Welcome extends React.Component{
    render() {
        return <h1>Привет, {this.props.name}</h1>;
    }
}
*/

function App() {
    return (
      <div>
          <Welcome name="Алиса" />
          <Welcome name="Базилио" />
          <Welcome name="Буратино" />
      </div>
    );
}


/*const element = <Welcome name="ДИМОООООН"/>*/

ReactDOM.render(<App />, document.getElementById("root"))
