import React,{useState} from "react";
import "./Switch.css";

const Switch = (props) => {
  const [isOn, setValue] = useState(false);
  const checkHandler = () => {
    setValue(!isOn);
    if(props.clickHandler) {
      props.clickHandler(isOn);
    }
  };

  const toggleClass = isOn ? " switch-on" : " switch-off";
  const buttonColor = isOn ? " background-blue" : " background-grey";

  return (
    <div>
      <button type='button' className={'toggle-button'+ buttonColor} onClick={checkHandler}>
      <div className={'react-toggle-circle'+ toggleClass}></div>
    </button>
    </div>
  );
};

export default Switch;
