

import react from 'react;'
import CarbCorrect from './CarbCorrect';


class CarbCorrect extends React.Component {
    render(){


// document.getElementById("CarbCorrectInput").onClick = function() {

//     var text = document.getElementById("CarbCorrectInput").value;

//     var li = "<li>" + text + </li>;

//     document.getElementById("list").appendChild(li);


    
// <input type='text' id = 'CarbCorrectInput' />
// <input type='button' value = 'add to list' id = 'CarbCorrectInput'>

// <ul id= 'CarbCorrectInput'> 


//   <li> <b>Topics</b></li> 

//     </ul>

// }
//     export default CarbCorrectLi



var Todo= React.createClass({
    save() {
      this.refs.newText.value
    },

    render(){
        return(
            <div className="list">
              <h1> TO-DO List</h1>
              <input type="text" ref="newtext" defaultValue={this.props.children} />
              <button onClick={console.log('Hello')} className="btn btn-primary glyphicon glyphicon-floppy-saved">
              </button>
              <ul>
                <li>{this.target.value}</li>
              </ul>
            </div>
        )
    },


});
    }
}