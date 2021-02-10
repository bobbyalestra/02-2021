import React from 'react';
import './CarbCorrect.css';
import './CarbCorrectButton.css';
import './CarbCorrectLabel.css';
class CarbCorrect extends React.Component {
    targets = document.getElementById('CarbCorrectButton');
    


     
        
    
    render () {
        return (

       
                <div id='CarbCorrectDiv'>

                <label id ='CarbCorrectLabel' htmlFor='CarbCorrectLabel'>Carb Correction</label>
                <input className = "CarbCorrect" type="number" name="CarbCover" id="CarbCorrectButton"  defaultValue={this.props.children}/>
               
                <button id="submit" onclick='addlist()'/>
            


                </div>
            
             );
                return 
            }
}


export default CarbCorrect;  



