import React, {Component} from 'react';
import '../styling/PlayerCard.css';


class PlayerCard extends Component {
    state = {  } 
    render() { 
        
        return (
            <div className="PlayerCard">
                <img src={this.props.logoURL} alt={this.props.team} />
                <h2>{this.props.name}</h2>
                <div>
                    <p>Position: {this.props.position}</p>
                    <p>Team: {this.props.team}</p>
                    <p>ADP: {this.props.adp}</p>
                </div>
            </div>
        );
    }
}

export default PlayerCard;