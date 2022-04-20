import React from "react";
import Switch from "./Switch";
import "./SwitchTile.css";

const SwitchTile = (props) => {

  return (
    <>
        <div className='switch-tile'>
            <div className='switch-tile-box'>
                <div className='switch-tile-text'>{props.title}</div>
                <div className='switch-tile-toggle'>
                    <Switch />
                </div>
            </div> 
        </div> 
    </>
  );
};

export default SwitchTile;
