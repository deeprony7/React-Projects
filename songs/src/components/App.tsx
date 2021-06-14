import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';

const App = () => {
  return (
    <React.Fragment>
      <br/>
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
