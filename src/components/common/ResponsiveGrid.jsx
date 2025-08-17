import React from 'react';
import { Box } from '@mui/material';

const ResponsiveGrid = ({ 
  children, 
  columns = { xs: 1, sm: 2, md: 3 },
  spacing = { xs: 1.5, sm: 2, md: 3 },
  ...props 
}) => {
  const getGridColumns = () => {
    if (typeof columns === 'object') {
      return Object.entries(columns).reduce((acc, [breakpoint, cols]) => {
        acc[breakpoint] = `repeat(${cols}, 1fr)`;
        return acc;
      }, {});
    }
    return `repeat(${columns}, 1fr)`;
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: getGridColumns(),
        gap: spacing,
        width: '100%',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ResponsiveGrid;