import React from 'react';
import '../styling/PlayerCard.css';


const PlayerCard = (props) => {
    
    return (
            <div className="PlayerCard">
                <div>{props.team}
                <img className="PlayerLogo" src={props.logoURL} alt={props.team} />
                </div>
                <div>{props.name}</div>
                <div>{props.position}</div>
                <div>{props.adp}</div>
                    
                
            </div>
        );
}


export default PlayerCard;