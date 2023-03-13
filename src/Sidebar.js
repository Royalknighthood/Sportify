import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LyricsIcon from '@mui/icons-material/Lyrics';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{playlists}] = useDataLayerValue ();
    return (
    <div className='sidebar'>
        <img 
        className='sidebar__logo'
        src='https://t4.ftcdn.net/jpg/03/57/09/27/240_F_357092776_RLUQxuHpbD8cfaajU4gBD1nGv7oyO5zf.jpg'
         alt=''/>
         <SidebarOption Icon={HomeIcon} title='Home' />
         <SidebarOption Icon={TrendingUpIcon} title='TrendingUp' />
         <SidebarOption Icon={LyricsIcon}title='Feed' />

         <br />
         <strong className='sidebar__title'>PLAYLISTS</strong>
         <hr />

         {playlists?.items?.map(playlists =>(
         <SidebarOption title={playlists.name}/>   
         ))}
    </div>
  );
}

export default Sidebar;
