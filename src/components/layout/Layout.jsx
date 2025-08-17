import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '280px 1fr',
      gridTemplateRows: '72px 1fr',
      minHeight: '100vh'
    }}>
      <Box sx={{ gridColumn: '1 / -1', gridRow: '1' }}>
        <Header onMenuClick={handleSidebarToggle} />
      </Box>
      
      {!isMobile && (
        <Box sx={{ gridColumn: '1', gridRow: '2' }}>
          <Sidebar open={true} onClose={() => {}} />
        </Box>
      )}
      
      <Box
        component="main"
        sx={{
          gridColumn: isMobile ? '1' : '2',
          gridRow: '2',
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: theme.palette.background.default,
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          {children}
        </motion.div>
      </Box>
      
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </Box>
  );
};

export default Layout;