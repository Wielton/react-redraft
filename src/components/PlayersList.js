import React, {Component} from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerList extends Component {
    constructor(props){
        super(props);
        this.state = {playerList: []}
    }
    
    componentDidMount() {
        // Load data
        
        axios.request({
            url : process.env.REACT_APP_PLAYERS_API+"players",
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
            <div className="PlayerList">
                {this.state.playerList.map((p) => (
                    <PlayerCard key={p.playerId} id={p.playerId} name={p.name} pos={p.position} team={p.team} adp={p.adp} logoURL={p.logoUrl}/>
                ))}
            </div>
        );
    }
}

export default PlayerList;