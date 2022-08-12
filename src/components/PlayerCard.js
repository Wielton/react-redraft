import React, {Component} from 'react';
import { ListGroup } from 'react-bootstrap';
import '../styling/PlayerCard.css';


class PlayerCard extends Component {
    state = {  } 
    render() { 
        
        return (
            <ListGroup.Item className="PlayerCard">
                <div>{this.props.team}
                <img className="PlayerLogo" src={this.props.logoURL} alt={this.props.team} />
                </div>
                <div>{this.props.name}</div>
                <div>{this.props.position}</div>
                <div>{this.props.adp}</div>
                
                    
                
            </ListGroup.Item>
        );
    }
}

export default PlayerCard;