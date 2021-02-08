import React from 'react';

class Carbinput extends React.Component {

    render () {
        return (
            <form>
                <label htmlFor='carbCorrect'>Carb Correction</label>
                <input type="number" name="Carbinput" id="Carbinput"/>
                <button>Cover Carbs</button>
            </form>
        )
    }
}

export default Carbinput;