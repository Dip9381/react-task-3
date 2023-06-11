import React, { useEffect, useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [clrs,setcolors]=useState(null);

  const handleButtonClick = () => {
    setShowColors(!showColors);
    setSelectedColor(null);
  };
  const handleColorClick = (color) => {
    setSelectedColor(color);
    setcolors(color);
    setShowColors(false);
  };

  return (
    <div style={{textAlign:'center',width:'150px',marginLeft:'auto',marginRight:'auto'}}>
      <button onClick={handleButtonClick}>Pick a color</button>
      {showColors && (
        <div style={{display: 'flex',
        flexDirection:'row',flexWrap:'wrap',width:'150px'}}>
          {colors.map((color, index) => (
            <div
              key={index}
              id='picker'
              style={{
                backgroundColor: color,
                width: '20px',
                height: '20px',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor&& clrs && <p style={{color:clrs}}>Selected color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
