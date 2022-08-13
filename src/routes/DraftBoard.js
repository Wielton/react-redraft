import React from 'react';
import PlayerList from '../components/PlayersList';
import Roster from '../components/Roster';

const DraftBoard = () => {
        return (
            <div>
                <Roster />
                <PlayerList/>
            </div>
        );
    }


export default DraftBoard;