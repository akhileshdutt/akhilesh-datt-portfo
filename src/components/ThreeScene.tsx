
import React from 'react';

export const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-950/60 to-black dark:from-black dark:via-violet-950/60 dark:to-black light:from-white light:via-violet-50/60 light:to-white"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size"></div>
    </div>
  );
};
