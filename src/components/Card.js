import React from "react";

class Card extends React.Component{

    render(){
        const {name, email, id} = this.props;
        return(
            <div className="bg-light-green dib br3 pa3 ma3 grow shadow-5">
                <div className="tc">
                    <img alt='photos' src={`https://robohash.org/${id}?size=200x200`} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" /> 
                    <h2 className="f3 mb2">{name}</h2>
                    <h2 className="f5 fw4 gray mt0">{email}</h2>
                </div>
            </div>
        );
    }
}

export default Card;