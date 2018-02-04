import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Search = () => (
  <div className="ui loading search">
    <div className="ui icon input">
      <input className="prompt" type="text" placeholder="Search..."/>>
      <i className="search icon"></i>
    </div>
    <div className="results"></div>
  </div>
)

const Table = () => (
  <table class="ui celled table"> 
    <thead> 
      <tr> 
        <th>Header</th> 
        <th>Header</th> 
      </tr> 
    </thead>
    <tbody>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
      </tr> 
      <tr> 
        <td>Cell</td> 
        <td>Cell</td> 
      </tr> 
      <tr> 
       <td>Cell</td> 
       <td>Cell</td> 
      </tr> 
    </tbody> 
  </table>
)

const image = 'https://geology.com/world/world-map-clickable.gif';

class Dashboard extends React.Component{
  constructor(props) { 
    super(props);
    
  }

  render() {
    return (
      <div>
        <div class="ui large header"> Truck #123: </div>
        <div className="ui two column centered grid">
          <Search className="column" />
          <div className="column">
            <div className="ui grid">
              <Table className="row" />
              <div className="six wide column"><img src={image}/></div>
              <div className="six wide column"><img src={image}/></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
