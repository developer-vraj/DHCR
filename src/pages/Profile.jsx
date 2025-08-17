import React, { useState } from 'react';
import { Typography, Box, Card, Avatar, Button, TextField, Switch, FormControlLabel, IconButton, LinearProgress } from '@mui/material';
import { Edit, Save, User, Mail, Phone, MapPin, Shield, Bell, Palette, Smartphone, Calendar, Settings, Activity, Heart } from 'lucide-react';
import { useTheme as useCustomTheme } from '../context/ThemeContext';

const Profile = () => {
  const { mode, toggleTheme } = useCustomTheme();
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Vraj Patel',
    email: 'vraj.patel@email.com',
    phone: '+91 98765 43210',
    location: 'Godhara , Panchmahal, Gujarat 389011',
    bio: 'Health enthusiast focused on maintaining an active lifestyle and balanced nutrition.'
  });

  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    dataSharing: false,
    darkMode: mode === 'dark'
  });

 
  const handleSave = () => {
    setEditing(false);
  };

  const handleSettingChange = (setting) => (event) => {
    if (setting === 'darkMode') {
      toggleTheme();
    }
    setSettings({ ...settings, [setting]: event.target.checked });
  };

  return (
    <Box sx={{ 
      p: { xs: 1, sm: 2, md: 3 }, 
      backgroundColor: 'background.default', 
      minHeight: '100vh',
      maxWidth: '100%',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 },
        mb: { xs: 4, md: 5 },
        p: { xs: 2, sm: 3 },
        borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%)',
        border: '1px solid',
        borderColor: 'divider'
      }}>
        <Box>
          <Typography 
            variant={{ xs: 'h4', sm: 'h3' }} 
            fontWeight="800" 
            sx={{
              background: 'linear-gradient(135deg, #9c27b0 0%, #3f51b5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Profile & Settings
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            pl: 2,
            borderLeft: '4px solid',
            borderColor: 'secondary.main'
          }}>
          </Box>
        </Box>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', lg: '1fr 320px' }, 
        gap: { xs: 2, md: 3 }
      }}>
        {/* Main Content */}
        <Box>
          
        
          {/* Personal Information */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider', mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box>
                <Typography variant="h6" fontWeight="600" color="text.primary">
                  Personal Information
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Update your personal details
                </Typography>
              </Box>
              <Button
                variant={editing ? 'contained' : 'outlined'}
                startIcon={editing ? <Save size={20} /> : <Edit size={20} />}
                onClick={editing ? handleSave : () => setEditing(true)}
                sx={{ borderRadius: 2 }}
              >
                {editing ? 'Save' : 'Edit'}
              </Button>
            </Box>

            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
              gap: { xs: 2, sm: 3 } 
            }}>
              <TextField
                fullWidth
                label="Full Name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                disabled={!editing}
                size="small"
              />
              <TextField
                fullWidth
                label="Email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                disabled={!editing}
                size="small"
              />
              <TextField
                fullWidth
                label="Phone"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                disabled={!editing}
                size="small"
              />
              <TextField
                fullWidth
                label="Location"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                disabled={!editing}
                size="small"
              />
            </Box>
            <TextField
              fullWidth
              label="Bio"
              multiline
              rows={3}
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              disabled={!editing}
              size="small"
              sx={{ mt: 3 }}
            />
          </Card>

          {/* App Settings */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 3 }}>
              App Settings
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ backgroundColor: '#1976d215', color: '#1976d2', width: 40, height: 40 }}>
                    <Bell size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="600" color="text.primary">
                      Push Notifications
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Receive reminders and health updates
                    </Typography>
                  </Box>
                </Box>
                <Switch
                  checked={settings.notifications}
                  onChange={handleSettingChange('notifications')}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ backgroundColor: '#4caf5015', color: '#4caf50', width: 40, height: 40 }}>
                    <Mail size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="600" color="text.primary">
                      Email Updates
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Weekly health reports and tips
                    </Typography>
                  </Box>
                </Box>
                <Switch
                  checked={settings.emailUpdates}
                  onChange={handleSettingChange('emailUpdates')}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ backgroundColor: '#9c27b015', color: '#9c27b0', width: 40, height: 40 }}>
                    <Palette size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="600" color="text.primary">
                      Dark Mode
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Switch between light and dark themes
                    </Typography>
                  </Box>
                </Box>
                <Switch
                  checked={mode === 'dark'}
                  onChange={handleSettingChange('darkMode')}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ backgroundColor: '#f4433615', color: '#f44336', width: 40, height: 40 }}>
                    <Shield size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="600" color="text.primary">
                      Data Sharing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Share anonymized data for research
                    </Typography>
                  </Box>
                </Box>
                <Switch
                  checked={settings.dataSharing}
                  onChange={handleSettingChange('dataSharing')}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ backgroundColor: '#ff980015', color: '#ff9800', width: 40, height: 40 }}>
                    <Smartphone size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="600" color="text.primary">
                      Wearable Devices
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Connect fitness trackers and smartwatches
                    </Typography>
                  </Box>
                </Box>
                <Button variant="outlined" size="small" sx={{ borderRadius: 2 }}>
                  Connect
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* Right Sidebar */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: { xs: 2, md: 3 },
          order: { xs: -1, lg: 0 }
        }}>
          {/* Profile Avatar */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#1976d2',
                  fontSize: '2.5rem'
                }}
              >
                VP
              </Avatar>
              <Typography variant="h6" fontWeight="600" color="text.primary">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Health Enthusiast
              </Typography>
              <Button variant="outlined" size="small" sx={{ borderRadius: 2 }}>
                Change Photo
              </Button>
            </Box>
          </Card>

          {/* Account Status */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Account Status
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#4caf5015', color: '#4caf50', width: 32, height: 32 }}>
                  <Shield size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Verified Account
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Email and phone verified
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#1976d215', color: '#1976d2', width: 32, height: 32 }}>
                  <Activity size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Premium Member
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Active since Jan 2024
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Quick Actions */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Settings size={16} />}
                sx={{ borderRadius: 2, justifyContent: 'flex-start' }}
              >
                Privacy Settings
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Shield size={16} />}
                sx={{ borderRadius: 2, justifyContent: 'flex-start' }}
              >
                Security
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<User size={16} />}
                sx={{ borderRadius: 2, justifyContent: 'flex-start' }}
              >
                Export Data
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;