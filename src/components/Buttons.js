import React from 'react';


const Buttons = ({getTabs}) => {
    return(
        <div className="buttons">
            <button onClick={getTabs} value="PLAYER">PLAYER</button>
            <button onClick={getTabs} value="CHORDS">CHORDS</button>
            <button onClick={getTabs} value="TEXT_BASS_TAB">BASS</button>
            <button onClick={getTabs} value="TEXT_GUITAR_TAB">GUITAR</button>
        </div>
    );
  }

export default Buttons;