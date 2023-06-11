import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['blue', 'green', 'yellow', 'red', 'purple', 'aqua', 'black', 'fuchsia', 'gray', 'lime', 'maroon', 'navy', 'olive', 'silver', 'teal', 'white'];

  return <ColorPicker colors={colors} />;
};

export default App;
