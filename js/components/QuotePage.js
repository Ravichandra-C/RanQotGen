
import React from "react";
import ReactDOM from 'react-dom';
import {quotes} from "../quotes"
import QuoteCard from "../components/QuoteCard"
class QuotePage extends React.Component{

    constructor(props){
        super(props);

    }

    render(){

        return (

            <div className="container d-flex flex-column">
                <div className='row'>
                    <h1 className="col title display-4 pt-5">Random Quote Generator</h1>
                </div>

                <div id='app' className='row justify-content-center align-items-center flex-grow-1'>
                    <QuoteCard quote="Happiness is a way of travel. Not a destination." author='Ravi'/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<QuotePage />,document.querySelector("body"));