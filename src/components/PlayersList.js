import React, {Component} from 'react';
import axios from 'axios';
import '../styling/PlayersList.css';
import PlayerCard from './PlayerCard';
import { ListGroup } from 'react-bootstrap';


class PlayerList extends Component {
    constructor(props){
        super(props);
        this.state = {playerList: []}
    }
    
    componentDidMount() {
        // Load data
        
        axios.request({
            url : process.env.REACT_APP_PLAYERS_API_KEY+"players",
            method : "GET"
        }).then(response=>{
            this.setState({playerList: response.data});
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    
        // set state with that data
    }
    render() { 
        return (
            <div>
                <h1>AVAILABLE PLAYERS</h1>
                <ListGroup className="PlayersList">
                    
                    {this.state.playerList.map((p) => (
                        <PlayerCard key={p.playerId} id={p.playerId} name={p.name} position={p.position} team={p.team} adp={p.adp} logoURL={p.logoUrl}/>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default PlayerList;