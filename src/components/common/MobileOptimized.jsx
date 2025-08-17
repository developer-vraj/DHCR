import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

export const MobileContainer = ({ children, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        maxWidth: '100%',
        overflow: 'hidden',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export const MobileCard = ({ children, ...props }) => (
  <Box
    sx={{
      p: { xs: 1.5, sm: 2.5 },
      borderRadius: 3,
      boxShadow: 2,
      border: 1,
      borderColor: 'divider',
      backgroundColor: 'background.paper',
      ...props.sx
    }}
    {...props}
  >
    {children}
  </Box>
);

export const MobileStack = ({ children, spacing = { xs: 1, sm: 2 }, ...props }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: spacing,
      ...props.sx
    }}
    {...props}
  >
    {children}
  </Box>
);