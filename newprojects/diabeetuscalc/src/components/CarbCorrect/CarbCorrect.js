import React from 'react';
import './CarbCorrect.css';
import './CarbCorrectButton.css';
class CarbCorrect extends React.Component {

    render () {
        return (
            <form>
                <label htmlFor='carbCorrect'>Carb Correction</label>
                <input type="number" name="Carbinput" id="CarbCorrect"/>
                <button id='CarbCorrectButton'>Cover Carbs</button>
            </form>
        )
    }
}

export default CarbCorrect;