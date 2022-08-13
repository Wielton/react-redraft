import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../styling/PlayerCard.css';


const PlayerCard = (props) => {
    
    return (
            <ListGroup.Item className="PlayerCard">
                <div>{props.team}
                <img className="PlayerLogo" src={props.logoURL} alt={props.team} />
                </div>
                <div>{props.name}</div>
                <div>{props.position}</div>
                <div>{props.adp}</div>
                    
                
            </ListGroup.Item>
        );
}


export default PlayerCard;