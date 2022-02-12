import React from 'react'
import './streamsCard.css'
import {StreamData} from './StreamData'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function StreamsCard() {
  return (
      <div className="streamsCard_wrapper">
    <div className='streamsCard'>
      {StreamData.map((streamer) => {
          return <>
            <div className="streamCard">
                <div className="image_live_count">
                    <img src={streamer.image} alt="" />
                    <div className="liveCount">
                        <div className="live_with_icon">
                            <PlayCircleFilledWhiteIcon className='icon'/>
                            <span>live</span>
                        </div>
                        <div className="viewer_with_icon">
                        <RemoveRedEyeIcon className='icon'/>
                            <span>{streamer.viewers}</span>
                        </div>
                    </div>
                </div>
                <div className="card_info">
                    <div className="left_streamer_icon">
                        <img src={streamer.streamer_icon} alt="" />
                    </div>
                    <div className="right_streamer_details">
                        <div className="top_title">
                            <h4>{streamer.gameTitle}</h4>
                        </div>
                        <div className="bottom_title">
                            <span>{streamer.streamer_name}</span>
                            <div className="dot"></div>
                            <span>{streamer.gameName}</span>
                        </div>
                    </div>
                </div>
            </div>
          </>
      })}
    </div>
    </div>
  )
}

export default StreamsCard
