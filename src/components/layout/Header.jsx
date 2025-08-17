import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, Typography, Box, useTheme, useMediaQuery, Badge, Chip } from '@mui/material';
import { Menu as MenuIcon, Sun, Moon, Bell, Search, Settings, LogOut } from 'lucide-react';
import { useTheme as useCustomTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Header = ({ onMenuClick }) => {
  const theme = useTheme();
  const { mode, toggleTheme } = useCustomTheme();
  const { user, logout } = useAuth();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backdropFilter: 'blur(20px)',
        background: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(30, 41, 59, 0.8)',
      }}
    >
      <Toolbar sx={{ px: 3, minHeight: '72px !important' }}>
        {isMobile && (
          <IconButton
            edge="start"
            onClick={onMenuClick}
            sx={{ 
              mr: 2,
              p: 1.5,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'light' 
                  ? 'rgba(99, 102, 241, 0.08)'
                  : 'rgba(99, 102, 241, 0.12)',
              }
            }}
          >
            <MenuIcon size={20} />
          </IconButton>
        )}

        
        {/* Welcome Message */}
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography 
            variant={isMobile ? "body1" : "h6"} 
            fontWeight={600} 
            sx={{ mb: 0.5 }}
            noWrap
          >
            {isMobile ? "Hi Vraj! 👋" : "Good morning, Vraj! 👋"}
          </Typography>
          {!isMobile && (
            <Typography variant="body2" color="text.secondary" noWrap>
              Here's your health overview for today
            </Typography>
          )}
        </Box>
        
        {/* Health Score Badge */}
        {!isMobile && (
          <Chip 
            label="Health Score: 87"
            color="success"
            variant="outlined"
            sx={{ 
              mr: 2,
              fontWeight: 600,
              '& .MuiChip-label': {
                px: 2,
              }
            }}
          />
        )}
        
        {/* Action Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 0.5 : 1 }}>
          {!isMobile && (
            <IconButton 
              sx={{ 
                p: 1.5,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'light' 
                    ? 'rgba(99, 102, 241, 0.08)'
                    : 'rgba(99, 102, 241, 0.12)',
                }
              }}
            >
              <Search size={20} />
            </IconButton>
          )}
          
          <IconButton 
            onClick={toggleTheme}
            sx={{ 
              p: isMobile ? 1 : 1.5,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'light' 
                  ? 'rgba(99, 102, 241, 0.08)'
                  : 'rgba(99, 102, 241, 0.12)',
              }
            }}
          >
            {mode === 'light' ? <Moon size={isMobile ? 18 : 20} /> : <Sun size={isMobile ? 18 : 20} />}
          </IconButton>
          
          <IconButton 
            sx={{ 
              p: isMobile ? 1 : 1.5,
              borderRadius: 2,
              mr: isMobile ? 0.5 : 1,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'light' 
                  ? 'rgba(99, 102, 241, 0.08)'
                  : 'rgba(99, 102, 241, 0.12)',
              }
            }}
          >
            <Badge badgeContent={3} color="error" variant="dot">
              <Bell size={isMobile ? 18 : 20} />
            </Badge>
          </IconButton>
          
          {/* Profile Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            <IconButton 
              onClick={handleProfileClick}
              sx={{
                p: 0.5,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'light' 
                    ? 'rgba(99, 102, 241, 0.08)'
                    : 'rgba(99, 102, 241, 0.12)',
                }
              }}
            >
              <Avatar sx={{ 
                width: isMobile ? 36 : 40, 
                height: isMobile ? 36 : 40, 
                bgcolor: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: isMobile ? '0.75rem' : '0.875rem',
                boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
              }}>
                {user?.avatar || 'U'}
              </Avatar>
            </IconButton>
          </Box>
        </Box>
        
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 2,
              minWidth: 200,
              boxShadow: theme.palette.mode === 'light'
                ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
                : '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3)',
              border: `1px solid ${theme.palette.divider}`,
            }
          }}
        >
          <Box sx={{ px: 2, py: 1.5, borderBottom: `1px solid ${theme.palette.divider}` }}>
            <Typography variant="subtitle2" fontWeight={600}>
              {user?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.email}
            </Typography>
          </Box>
          <MenuItem onClick={handleClose} sx={{ py: 1.5 }}>
            <Avatar sx={{ width: 20, height: 20, mr: 2, bgcolor: 'transparent' }}>
              <Settings size={16} color={theme.palette.text.secondary} />
            </Avatar>
            Profile Settings
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ py: 1.5 }}>
            <Avatar sx={{ width: 20, height: 20, mr: 2, bgcolor: 'transparent' }}>
              <Bell size={16} color={theme.palette.text.secondary} />
            </Avatar>
            Notifications
          </MenuItem>
          <MenuItem onClick={() => { handleClose(); logout(); }} sx={{ py: 1.5, color: 'error.main' }}>
            <Avatar sx={{ width: 20, height: 20, mr: 2, bgcolor: 'transparent' }}>
              <LogOut size={16} color={theme.palette.error.main} />
            </Avatar>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;