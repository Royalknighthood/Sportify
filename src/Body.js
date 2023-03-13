import React from 'react';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './Body.css';
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{rap}] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify}/>

      <div className='body__info'>
        <img src={rap?.images[0].url} alt=''/>
        <div className='body__infoText'>
            <strong>My Playlist</strong>
            <h2>Rap</h2>
            <p>{rap?.description}</p>
        </div>
      </div>

      <div className='body__songs'>
      <div className='body__icons'> 
      <PlayCircleFilledIcon className='body__shuffle'/>
      <FavoriteIcon fontSize='large' />
      <MoreHorizIcon />
      </div>

    
        {rap?.tracks.items.map((item) =>(
           <SongRow track={item.track} /> 
        ))}
         </div>
    </div>
  );
}

export default Body;
