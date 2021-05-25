import React, {Component} from 'react';
import {render} from 'react-dom';

// class App extends Component{
//     render() {
//         return (<h1>Hello World</h1>)
//     }
// }
const App = () => {
   return (
       <div>
          <h1>Hello World</h1>
       </div>
   )
   
}
//render(<App/>, document.getElementById("app"));


ReactDOM.render(
<App />,

document.getElementById('app'),
);