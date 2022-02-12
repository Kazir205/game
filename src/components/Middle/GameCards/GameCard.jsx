import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { GameInfo } from './GameData';
import './gameCard.css'

export default function GameCard() {
  return (
            <div className='gameCards'>
                {GameInfo.map((game) => {
                    return (<>
                        <div className="gameCard">
                        <div className="cardImage_container">
                        <img src={game.image} alt="" className="cardImage" />
                      </div>
                      <div className="cardBottom">
                        <div className="game_name">{game.name}</div>
                        <div className="live_watch">
                            <RemoveRedEyeIcon className='live_watch_icon'/>
                            <span>{game.viewers}</span>
                        </div>
                      </div>
                      </div>
                    </>)
                })}
           </div>
  )
}
