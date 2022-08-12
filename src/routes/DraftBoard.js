import React, { Component } from 'react';
import PlayerList from '../components/PlayersList';

class DraftBoard extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <PlayerList/>
            </div>
        );
    }
}
 
export default DraftBoard;