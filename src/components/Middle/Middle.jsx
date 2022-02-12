import React from 'react'
import './middle.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GameCard from './GameCards/GameCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AdjustIcon from '@mui/icons-material/Adjust';
import StreamsCard from './StreamsCards/StreamsCard';


function Middle() {
  return (
    <div className='middle'>
      <div className="middle_top_heading">
        <div className="top_broadcumb"><span style={{color: 'white'}}>home</span> <ChevronRightIcon style={{fontSize: '18px', color: 'gray'}} /> <span>Streams</span></div>
        <div className="bottom_heading_button">
          <h4>Streams</h4>
          <div className="stream_button_box">
          <PlayCircleIcon className='stream_icon' />
          <button className='start_stream'>Start Stream</button>
          </div>
        </div>
      </div>

      <div className="middle_mid_popular">
        <div className="middle_mid_popular_wrapper">
          <div className="middle_mid_popular_wrapper_top">
            <h4>popular games</h4>
            <div className="see_all">
              <span>see all</span>
            <ChevronRightIcon style={{fontSize: '16px'}} className='icon_like_see_all' />
            </div>
          </div>
          <div className="middle_mid_popular_wrapper_bottom">
            <GameCard/>
          </div>
        </div>
      </div>
      <div className="middle_bottom_stream_list">
        <div className="middle_bottom_stream_list_wrapper">
        <div className="middle_bottom_stream_list_top">
          <div className="middle_bottom_stream_list_top_menu_and_button">
            <div className="middle_bottom_stream_list_top_menu_and_button_menu">
                <ul>
                  <li className='active'><a href="#">top streams</a></li>
                  <li><a href="#">currently online</a></li>
                  <li><a href="#">upcoming</a></li>
                  <li><a href="#">clips (finished)</a></li>
                </ul>
            </div>
            <div className="middle_bottom_stream_list_top_menu_and_button_button">
                <div className="middle_bottom_stream_list_top_menu_and_button_button_filter" style={{marginRight: '10px'}}>
                <span style={{color: 'rgb(39, 186, 231)'}}>filter</span>
                <AdjustIcon style={{color: 'rgb(39, 186, 231)', fontSize: '12px', marginLeft: '5px'}} className='icon_like_see_all'/>
                </div>
                <div className="middle_bottom_stream_list_top_menu_and_button_button_see_all">
                <span>see all</span>
                <ChevronRightIcon className='icon_like_see_all' style={{fontSize: '16px'}} />
                </div>
            </div>
          </div>
          <div className="streamlist_line_wrapper">
            <div className="streamlist_line">
                <div className="streamlist_line_active">
                </div>
            </div>
          </div>
        </div>
        <div className="middle_bottom_stream_list_bottom">
            <StreamsCard />
        </div>

        </div>
      </div>
    </div>
  )
}

export default Middle
