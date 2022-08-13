import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styling/PlayersList.css';
import PlayerCard from './PlayerCard';
import { ListGroup } from 'react-bootstrap';
import Cookies from 'universal-cookie';

const Roster = () => {
    const cookies = new Cookies();
    const [roster, getRoster] = useState([]);
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_PLAYERS_API_KEY+"rosters", {
            params: {
                'sessionToken' : cookies.get('sessionToken')
                }
                
            
        }).then(response=>{
            const rosterData = response.data;
            getRoster(rosterData);
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }, [])
    return (
            <div>
                <h1>ROSTER</h1>
                <ListGroup className="PlayersList">
                    
                    {roster.map((p) => (
                        <PlayerCard key={p.playerId} id={p.playerId} name={p.name} position={p.position} team={p.team} logoURL={p.logoUrl}/>
                        
                    ))}
                </ListGroup>
            </div>
        );
    
}

export default Roster;