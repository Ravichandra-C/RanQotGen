import React from "react";
import ReactDOM from 'react-dom';
import {quotes} from "../quotes"
export default class QuoteCard extends React.Component{

    constructor(props){
        super(props);
        let [cardColor,bodyColur]=this.random_bg_color();
        this.random_bg_color=this.random_bg_color.bind(this);
        this.animations=["animate__zoomInDown","animate__zoomInLeft","animate__zoomInRight","animate__backInDown","animate__backInLeft","animate__backInRight","animate__backInUp","animate__bounceIn","animate__bounceInDown","animate__bounceInLeft","animate__bounceInRight","animate__bounceInUp","animate__fadeIn","animate__fadeInDown",
        "animate__fadeInDownBig","animate__fadeInLeft","animate__fadeInLeftBig","animate__fadeInRight","animate__fadeInRightBig","animate__fadeInUp","animate__fadeInUpBig","animate__fadeInTopLeft","animate__fadeInTopRight","animate__fadeInBottomLeft","animate__fadeInBottomRight","animate__flip","animate__flipInX","animate__flipInY","animate__lightSpeedInRight",
        "animate__lightSpeedInRight","animate__lightSpeedInLeft","animate__lightSpeedOutRight","animate__lightSpeedOutLeft","animate__rotateIn","animate__rotateInDownLeft","animate__rotateInDownRight","animate__rotateInUpLeft","animate__rotateInUpRight","animate__jackInTheBox","animate__rollIn","animate__zoomIn","animate__zoomInDown","animate__zoomInLeft","animate__zoomInRight",
        "animate__zoomInUp","animate__slideInDown","animate__slideInLeft","animate__slideInRight","animate__slideInUp"];
        let rand=Math.random()*quotes.length;
        let randomQuote=quotes[Math.ceil(rand)];
        this.state={
            quote:randomQuote.text,
            author:randomQuote.author,
            card_color:cardColor,
            animate___Class:"animate__zoomIn"
        }
        this.generateNextQuote=this.generateNextQuote.bind(this);
    }
  generateNextQuote(event){
    let rand=Math.random()*quotes.length;
    let [cardColor,bodyColur]=this.random_bg_color();
    document.querySelector("body").style.backgroundColor=bodyColur;
    document.querySelector("h1.display-4").style.color=cardColor;
    let randomQuote=quotes[Math.ceil(rand)];
    let animationClasName=this.animations[Math.floor(Math.random()*this.animations.length)];
    console.log("Class Name "+animationClasName);
    this.setState({quote:randomQuote.text,author:randomQuote.author,card_color:cardColor,animate___Class:animationClasName});
    }
random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var x_neg=(255-x);
    var y_neg=(255-y);
    var z_neg=(255-z);
    var negbgColor="rgb(" + x_neg + "," + y_neg + "," + z_neg + ")";
    return [bgColor,negbgColor];
}

    componentDidMount() {  }
    componentWillUnmount() {  }
    render(){
        let cardClass='animate__animated card m-3 text-center shadow '+this.state.animate___Class
        const imgStyle={
            width: "50px",
            height: "50px"
        }
        const cardBodyStyle={
            color:this.state.card_color
        }
        return (
        
                <div className='col-10 d-flex flex-column justify-items-center'>
                     <div id='cardbdy' className={cardClass}>
                        <div className='card-body' style={cardBodyStyle}>
                                <h2 id='quote' className= 'card-text'>{this.state.quote}</h2>
                                <h3 id='author' className="card-text text-right">{this.state.author}</h3>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className='col-8'>
                                <a href="https://twitter.com/intent/tweet" className="twitter-share-button" data-hashtags="RandonQuote" data-show-count="false"><img src="imgs/twitterimg.png" style={imgStyle}></img></a>
                            </div>
                            <div className='col-4'>
                                <button className="btn btn-lg btn-dark float-right" type="button" onClick={this.generateNextQuote}>Next Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                );
    }
}
