import React, {useState} from "react";

function ColorBox(props){
    return (
        <div className="color-boxes" style={{backgroundColor: props.colorName}} key={props.index} onClick={props.handle(props.colorName)}></div>
    );
}


const ColorPickerB = ({ colors }) => {
    const [selectedColor, setSelectedColor] = useState('');
    const [showColorList, setShowColorList] = useState(false);
  
    const handleClick = () => {
      setShowColorList(!showColorList);
    };
  
    const handleColorClick = (color) => {
      setSelectedColor(color);
      setShowColorList(false);
    };
  
    return (
      <div>
        <button onClick={handleClick} className="pick-color-btn">Pick a color</button>
        {showColorList && (
          <div className="color-list">
            {colors.map((color) => (
              <div
                key={color}
                className="color-square"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        <div className="selected-color">
          <div style={{ backgroundColor: selectedColor }} className="colored-box-ex"></div>
        </div>
      </div>
    );
  };

function ColorPicker(){

    const colors = ['#0000FF','#808080','#008000','#800080'];
    // style={{backgroundColor: bgColor}}
    return(
        <>
        <h1>ColorPicker</h1>
        <div className="colored-box"> 
            <div> 
                <ColorPickerB colors={colors} />
            </div>
        </div>
        </>
    );
}

export default ColorPicker;