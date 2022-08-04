import React, {Component} from 'react';
import '../styling/PlayerCard.css';


class PlayerCard extends Component {
    state = {  } 
    render() { 
        
        return (
            <div className="PlayerCard">
                <img src={this.props.logoURL} alt={this.props.team} />
                <h1>{this.props.name}</h1>
                
            </div>
        );
    }
}

export default PlayerCard;