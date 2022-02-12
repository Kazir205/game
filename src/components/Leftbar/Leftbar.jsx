import React from 'react'
import './left_bar.css'
import ExploreIcon from '@mui/icons-material/Explore';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AddLinkIcon from '@mui/icons-material/AddLink';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';

function Leftbar() {
  return (
    <div className='left_bar'>
      <div className="left_icon">
        <div className="top_icons">
          <ExploreIcon className='left_menu_icon'/>
          <TrackChangesIcon className='left_menu_icon'/>
          <AddLinkIcon className='left_menu_icon'/>
          <SportsEsportsIcon className='left_menu_icon active'/>
          <TwoWheelerIcon className='left_menu_icon'/>
          <MilitaryTechIcon className='left_menu_icon'/>
        </div>
        <div className="bottom_icons">
          <NightsStayIcon className='left_bottom_menu_icon'/>
          <SettingsApplicationsIcon className='left_bottom_menu_icon'/>
          <FlipToFrontIcon className='left_bottom_menu_icon' />
        </div>
      </div>
      <div className="right_menu">
        <div className="top_menu">
          <ul className='menu'>
            <li className='active'><a>General <span className='menuNoti'>03</span></a></li>
            <li><a>News</a></li>
            <li><a>Leagues</a></li>
              <li className='subHead'><a>Current Season</a></li>
              <li className='subHead'><a>Spring 18</a></li>
              <li className='subHead'><a>Winter 18</a></li>
              <li className='subHead'><a>Fall 17</a></li>
              <li className='subHead'><a>Spring 17</a></li>
            <li><a>Cups</a></li>
            <li><a>Community</a></li>
            <li><a>Users</a></li>
            <li><a>Teams</a></li>
          </ul>
        </div>
        <div className="bottom_menu">
          <div className="bottom_menu_icon_box">
            <ModeStandbyIcon className='right_bottom_menu_icon' />
            <span>Facebook</span>
          </div>
          <div className="bottom_menu_icon_box">
          <ModeStandbyIcon className='right_bottom_menu_icon' />
            <span>Discord</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
