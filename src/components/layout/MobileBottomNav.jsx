import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Activity, Apple, MessageCircle, Users, Bell, User } from 'lucide-react';

const MobileBottomNav = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { label: 'Records', icon: FileText, path: '/records' },
    { label: 'Fitness', icon: Activity, path: '/fitness' },
    { label: 'Diet', icon: Apple, path: '/diet' },
    { label: 'Coaching', icon: MessageCircle, path: '/coaching' }
  ];

  const currentIndex = navItems.findIndex(item => item.path === location.pathname);

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        display: { xs: 'block', md: 'none' },
        borderTop: `1px solid ${theme.palette.divider}`,
        borderRadius: '16px 16px 0 0',
        background: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(30, 41, 59, 0.95)',
        backdropFilter: 'blur(20px)',
      }} 
      elevation={8}
    >
      <BottomNavigation
        value={currentIndex}
        onChange={(event, newValue) => {
          navigate(navItems[newValue].path);
        }}
        sx={{
          backgroundColor: 'transparent',
          '& .MuiBottomNavigationAction-root': {
            color: theme.palette.text.secondary,
            '&.Mui-selected': {
              color: theme.palette.primary.main,
            },
          },
        }}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <BottomNavigationAction
              key={item.path}
              label={item.label}
              icon={<Icon size={20} />}
              sx={{
                minWidth: 'auto',
                '& .MuiBottomNavigationAction-label': {
                  fontSize: '0.75rem',
                  fontWeight: 500,
                },
              }}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav;