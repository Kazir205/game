import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DraftsIcon from '@mui/icons-material/Drafts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import profile from '../Header/profile.jpg'


function Header() {
  return(
    <div className='header'>
      <div className="menu_icon">
          <MenuIcon className='menu'/>
      </div>
      <div className="search_box">
      <div className="header__search">
                <SearchIcon fontSize='5px' className='header_search_icon'/>
                <input type="text" placeholder="search for anything" />
            </div>
      </div>
      <div className="noti_iconsets">
        <div className="three_icon">
          <Badge badgeContent={30} style={{color: 'white'}} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }} className='three_icon_badge'>
            <div className="polygon">
          <FavoriteIcon fontSize='5px' className='noti_icon'/>
          </div>
          </Badge>
          <Badge badgeContent={5} style={{color: 'white'}} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }} className='three_icon_badge'>
            <div className="polygon">
          <StarIcon fontSize='5px' className='noti_icon'/>
          </div>
          </Badge>
          <Badge badgeContent={25} style={{color: 'white'}} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }} className='three_icon_badge'>
            <div className="polygon">
          <EmojiEventsIcon fontSize='5px' className='noti_icon'/>
          </div>
          </Badge>
        </div>
        <div className="gmail_icon_container notification_icon">
          <DraftsIcon className='draf_icon'/>
        </div>
        <div className="notification_icon">
        <Badge badgeContent={2}  style={{color: 'white'}} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <NotificationsIcon className='notiIcon'/>
          </Badge>
        </div>
      </div>
      <div className="name_avatar">
        <Avatar src={profile} className="avatarImage" />
        <span className='avatar_name'>Masud Reza</span>
        <ExpandMoreIcon style={{color: 'lightgray', fontSize: '15px'}}/>
      </div>
      <div className="users_icon_container">
        <PeopleIcon className='users_icon'/>
      </div>
    </div>
    )
}

export default Header
