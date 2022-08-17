import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styling/PlayersList.css';
import PlayerCard from './PlayerCard';
import Cookies from 'universal-cookie';

const PlayerList = () => {
    // Initialize state of player list array
    const [playerList, getPlayerList] = useState([]);

    // This hook will 
    useEffect(() => {
        const cookies = new Cookies();
        
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
    }, [])
    return (
            <div className="adp-list">
                <h1>AVAILABLE PLAYERS</h1>
                <div className="titles">
                <span className="adp-team">Team</span>
                        <span className="adp-player">Player</span>
                        <span className="adp-position">Position</span>
                        <span className="adp-adp">ADP</span>
                    
                <div className="scroller">
                    
                    {playerList.map((p) => (
                        <PlayerCard key={p.playerId} id={p.playerId} name={p.name} position={p.position} team={p.team} adp={p.adp} logoURL={p.logoUrl}/>
                    ))}
                </div>
                </div>
            </div>
        );
    
}

export default PlayerList;