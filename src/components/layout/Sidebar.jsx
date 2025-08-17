import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography, useTheme, useMediaQuery, Avatar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Activity, Apple, MessageCircle, Users, Bell, User, Zap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const menuItems = [
  { text: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { text: 'Health Records', icon: FileText, path: '/records' },
  { text: 'Fitness Tracker', icon: Activity, path: '/fitness' },
  { text: 'Diet Planner', icon: Apple, path: '/diet' },
  { text: 'Health Coaching', icon: MessageCircle, path: '/coaching' },
  { text: 'Community', icon: Users, path: '/community' },
  { text: 'Reminders', icon: Bell, path: '/reminders' },
  { text: 'Profile', icon: User, path: '/profile' }
];

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const { user } = useAuth();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();

  const drawerWidth = 280;

  const drawer = (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      background: theme.palette.mode === 'light' 
        ? 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
        : 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
    }}>
      {/* Logo Section */}
      <Box sx={{ 
        p: 3, 
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: theme.palette.mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(30,41,59,0.8)',
        backdropFilter: 'blur(10px)',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
          }}>
            <Zap size={20} color="white" />
          </Box>
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ 
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2,
            }}>
              HealthCare+
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
              Digital Health Platform
            </Typography>
          </Box>
        </Box>
      </Box>
      
      {/* Navigation Menu */}
      <Box sx={{ flex: 1, px: 3, py: 2 }}>
        <Typography variant="caption" color="text.secondary" sx={{ 
          fontWeight: 600, 
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          mb: 2,
          display: 'block',
          px: 1,
        }}>
          Main Menu
        </Typography>
        
        <List sx={{ py: 0 }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    borderRadius: 1,
                    py: 1.5,
                    px: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: isActive 
                      ? theme.palette.primary.main 
                      : 'transparent',
                    color: isActive ? 'white' : theme.palette.text.primary,
                    boxShadow: isActive 
                      ? '0 4px 12px rgba(99, 102, 241, 0.3)'
                      : 'none',
                    '&:hover': {
                      backgroundColor: isActive 
                        ? theme.palette.primary.dark 
                        : theme.palette.mode === 'light' 
                          ? 'rgba(99, 102, 241, 0.08)'
                          : 'rgba(99, 102, 241, 0.12)',
                      transform: 'translateX(4px)',
                    },
                    '&::before': isActive ? {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 3,
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      borderRadius: '0 2px 2px 0',
                    } : {},
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <ListItemIcon sx={{ 
                    color: isActive ? 'white' : theme.palette.text.secondary, 
                    minWidth: 40,
                    transition: 'color 0.2s ease',
                  }}>
                    <Icon size={20} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    primaryTypographyProps={{
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.875rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* User Profile Section */}
      <Box sx={{ 
        p: 3, 
        borderTop: `1px solid ${theme.palette.divider}`,
        background: theme.palette.mode === 'light' ? 'rgba(248,250,252,0.8)' : 'rgba(15,23,42,0.8)',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ 
            width: 36, 
            height: 36, 
            bgcolor: theme.palette.primary.main,
            mr: 2,
            fontSize: '0.875rem',
            fontWeight: 600,
          }}>
            {user?.avatar || 'U'}
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" fontWeight={600} noWrap>
              {user?.name}
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
              {user?.role}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? open : true}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: theme.palette.mode === 'light' 
            ? '0 0 0 1px rgba(0,0,0,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)'
            : '0 0 0 1px rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.3)',
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default Sidebar;