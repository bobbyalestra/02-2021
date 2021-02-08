

import React from 'react';
class Forms extends React.Component {

    render () {
        return (
            <form>
                <label htmlFor='CarbCover'>Carb Cover</label>
                <input type="number" name="CarbCover" id="carbCover"/>
                <button>Cover Carbs</button>
            </form>
        )
    }
}

export default Forms;