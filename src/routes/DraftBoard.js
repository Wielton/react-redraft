import React from 'react';
import PlayerList from '../components/PlayersList';
import Roster from '../components/Roster';
import '../styling/DraftBoard.css';

const DraftBoard = () => {
        return (
            <div className="container-draftboard">
                <div className="roster">
                    <Roster />
                </div>
                <div className="adp">
                    <PlayerList />
                </div>
            </div>
        );
    }


export default DraftBoard;