import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetail'
import Navbar from './Navbar'

const App = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList/>
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
