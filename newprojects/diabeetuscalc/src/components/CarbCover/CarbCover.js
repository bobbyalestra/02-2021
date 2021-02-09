

import React from 'react';
import './CarbCoverButton.css';
import './CarbCoverLabel.css'
import './CarbCoverButt.css'
import './CarbCoverInput.css'
class CarbCover extends React.Component {

    render () {
        return (
            <form>
                <label id="CarbCoverLabel" htmlFor='CarbCover'>Carb Cover</label>
                <input type="number" name="CarbCover" id="CarbCoverInput"/>
                <button id='CarbCoverButt'>Cover Carbs</button>
            
            </form>
        )
    }
}

export default CarbCover;