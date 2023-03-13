import React, { useEffect } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { getTokenFromUrl } from './sportify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();
 
  //Run the code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash ="";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type:'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('7zHyMyFwnPzjHyZmcnrL7F').then (response=>
       dispatch({
        type:'SET_RAP',
        rap: response,
       })
       );
    }
}, [dispatch]);

  return <div className="app"> {token ? <Player spotify={spotify} /> : <Login />}</div>
}

export default App;
