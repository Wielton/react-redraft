import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styling/PlayersList.css';
import PlayerCard from './PlayerCard';
import { ListGroup } from 'react-bootstrap';
import Cookies from 'universal-cookie';

const PlayerList = () => {
    const cookies = new Cookies();
    const [playerList, getPlayerList] = useState([]);
    
    const fetchDraftList = () => {
        // Load data
        
        axios.get(process.env.REACT_APP_PLAYERS_API_KEY+"players", {
            params: {
                'sessionToken' : cookies.get('sessionToken')
                }
                
            
        }).then(response=>{
            const allPlayers = response.data;
            getPlayerList(allPlayers);
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    
        // set state with that data
    }
    useEffect(() => {
        fetchDraftList();
    })
    return (
            <div>
                <h1>AVAILABLE PLAYERS</h1>
                <ListGroup className="PlayersList">
                    
                    {playerList.map((p) => (
                        <PlayerCard key={p.playerId} id={p.playerId} name={p.name} position={p.position} team={p.team} adp={p.adp} logoURL={p.logoUrl}/>
                    ))}
                </ListGroup>
            </div>
        );
    
}

export default PlayerList;