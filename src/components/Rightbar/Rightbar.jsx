import React from 'react'
import './right_bar.css'
import PeopleIcon from '@mui/icons-material/People';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Avatar from '@mui/material/Avatar'
import logo from '../../logo.svg'
import Badge from '@mui/material/Badge'
/*streamersIcon*/
import icon1 from './streamerIcon/icon1.jpg'
import icon2 from './streamerIcon/icon2.jpg'
import icon3 from './streamerIcon/icon3.jpg'
import icon4 from './streamerIcon/icon4.jpg'
import icon5 from './streamerIcon/icon5.jpg'
import icon6 from './streamerIcon/icon6.jpg'
/*gamesIcon*/
import gameicon1 from './gamesIcon/gameicon1.jpg'
import gameicon2 from './gamesIcon/gameicon2.jpg'
import gameicon3 from './gamesIcon/gameicon3.jpg'
import gameicon4 from './gamesIcon/gameicon4.jpg'

function Rightbar() {
  return (
    <div className='right_bar'>
      <div className="userListIcon">
        <div className="left">
          <div className="right_bar_people_icon">
          <Badge badgeContent={6} anchorOrigin= {{horizontal: 'right', vertical: 'top'}}>
          <PeopleIcon className='right_bar_icon' />
          </Badge>
          </div>
        </div>
        <div className="right">
          <ExpandLessIcon className='right_bar_icon' />
        </div>
      </div>
      <div className="right_bar_icon_box_top">
        <div className="avatar_box">
        <Avatar src={icon1} className="right_bar_icon_box_icon" />
        </div>
        <div className="avatar_box">
        <Avatar src={icon2} className="right_bar_icon_box_icon" />
        </div>
        <div className="avatar_box">
        <Avatar src={icon3} className="right_bar_icon_box_icon" />
        </div>
        <div className="avatar_box">
        <Avatar src={icon4} className="right_bar_icon_box_icon" />
        </div>
        <div className="avatar_box">
        <Avatar src={icon5} className="right_bar_icon_box_icon" />
        </div>
        <div className="avatar_box">
        <Avatar src={icon6} className="right_bar_icon_box_icon" />
        </div>
      </div>
      <div className="userListIcon">
        <div className="left">
          <div className="right_bar_people_icon">
          <Badge badgeContent={4} anchorOrigin= {{horizontal: 'right', vertical: 'top'}}>
          <PeopleIcon className='right_bar_icon' />
          </Badge>
          </div>
        </div>
        <div className="right">
          <ExpandLessIcon className='right_bar_icon' />
        </div>
      </div>
      <div className="right_bar_icon_box_bottom">
      <div className="avatar_box">
      <Avatar variant='square' src={gameicon1} className="right_bar_icon_box_icon" />
        </div>
        <div className="avatar_box">
        <Avatar variant='square' src={gameicon2} className="right_bar_icon_box_icon" />
        </div>
        <div className="avatar_box">
        <Avatar variant='square' src={gameicon3} className="right_bar_icon_box_icon" />
        </div>
        <div className="avatar_box">
        <Avatar variant='square' src={gameicon4} className="right_bar_icon_box_icon" />
        </div>
      </div>
    </div>
  )
}

export default Rightbar
