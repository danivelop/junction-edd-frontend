import React from 'react';
import DrawingBoard from 'react-drawing-board';

interface Props {
  operations: any[];
  onChange: (operations: any) => void;
}

const CANVAS_STYLE = { width: '100%', height: '336px' };

export const Canvas: React.FC<Props> = ({ operations, onChange }) => {
  return (
    <DrawingBoard
      clsssName="canvas"
      userId="user1"
      style={CANVAS_STYLE}
      operations={operations}
      onChange={(_, afterOperation) => {
        onChange(afterOperation);
      }}
    />
  );
};
