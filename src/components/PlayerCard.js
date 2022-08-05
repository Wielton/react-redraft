import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import '../styling/PlayerCard.css';


class PlayerCard extends Component {
    state = {  } 
    render() { 
        
        return (
            <div className="PlayerCard">
                <div>
                    <img className="PlayerLogo" src={this.props.logoURL} alt={this.props.team} />
                    {this.props.name}
                </div>
                <div>
                    {this.props.position}
                    {this.props.team}
                    {this.props.adp}
                </div>
                <div>
                    <Button variant="primary">Add</Button>
                </div>
            </div>
        );
    }
}

export default PlayerCard;