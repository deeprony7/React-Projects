import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetail'
import Navbar from './Navbar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <TextField />
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
