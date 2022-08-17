import React from 'react';
import Roster from '../components/Roster';
import PlayerList from '../components/PlayersList';

const RosterPortal = (roster) => {
    return(
        <div>
        <div>
            <Roster />
        </div>
        <div>
            <h1>League Standings</h1>
        </div>
        <div>
            <PlayerList />
        </div>
        </div>
        )
}

export default RosterPortal;