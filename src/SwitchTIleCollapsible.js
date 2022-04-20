import React, { useState } from "react";
import Switch from "./Switch";
import SwitchTile from "./SwitchTile";
import "./SwitchTile.css";

const SwitchTileCollapsible = (props) => {
  const [showList, setShowList] = useState(false);
  const clickHandler = (isOn) => {
    !isOn? setShowList(true):setShowList(false);
  }
  const chevronClass = showList? ' rotate': ' rotate down';
  const tiles = props.tiles;

  return (
    <>
        <div className='switch-tile'>
            <div className='switch-tile-box'>
                <div className='switch-tile-text display-flex'>
                    <div className='align-left'>{tiles[0]}</div>
                </div>
                <div className='switch-tile-toggle'>
                    <Switch />
                </div>
            </div>
            <div className='switch-tile-box'>
                <div className='switch-tile-text display-flex'>
                    {props.section==='SETTINGS' && <div  className='align-left'>{tiles[1].tileTitle}</div>}
                    {props.section ==='ALERTS' && <div  className='align-left'>{tiles[1].tileTitle}</div>}
                    {props.section==='SETTINGS' && <Switch clickHandler={clickHandler}/>}
                    {props.section ==='ALERTS' && <div>
                        <select className='option-menu' disabled={showList?false:true}>
                            {tiles[1].tileOptions.map(option=> {
                                return <option value={option}>{option}</option>
                            })}
                        </select>
                    </div>}
                </div>
                <div className='switch-tile-toggle'>
                    {props.section==='ALERTS' && <Switch clickHandler={clickHandler}/>}
                    
                    {props.section ==='SETTINGS' && <div  className='align-right'>
                        <div className={'fa fa-chevron-up'+ chevronClass} >
                        </div>
                    </div>}
                </div>
            </div>
            {props.section ==='SETTINGS' && showList && <div className='subtiles'>
                    {tiles[1].tileSettings.map(subtile => {
                            return <SwitchTile title={subtile}/>
                    })}
                </div>}
            
        </div>
       
    </>
  );
};

export default SwitchTileCollapsible;
