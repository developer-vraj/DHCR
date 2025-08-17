import React, { useState } from 'react';
import { Typography, Box, Card, Avatar, Button, Switch, Chip, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem, LinearProgress } from '@mui/material';
import { Plus, Pill, Droplets, Activity, Calendar, Edit, Delete, Bell, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { reminders } from '../data/mockData';

const Reminders = () => {
  const [open, setOpen] = useState(false);
  const [newReminder, setNewReminder] = useState({
    title: '',
    time: '',
    type: 'medication',
    frequency: 'daily'
  });

  const reminderMetrics = [
    { title: 'Active', value: 8, goal: 10, unit: 'reminders', icon: Bell, color: '#1976d2', progress: 80 },
    { title: 'Completed', value: 23, goal: 25, unit: 'today', icon: CheckCircle, color: '#4caf50', progress: 92 },
    { title: 'Missed', value: 2, goal: 0, unit: 'this week', icon: AlertCircle, color: '#f44336', progress: 20 },
    { title: 'Streak', value: 12, goal: 30, unit: 'days', icon: Calendar, color: '#ff9800', progress: 40 },
    { title: 'On Time', value: 95, goal: 100, unit: '%', icon: Clock, color: '#4caf50', progress: 95 },
    { title: 'Categories', value: 4, goal: 5, unit: 'types', icon: Activity, color: '#9c27b0', progress: 80 }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'medication': return <Pill size={20} />;
      case 'hydration': return <Droplets size={20} />;
      case 'fitness': return <Activity size={20} />;
      case 'activity': return <Activity size={20} />;
      default: return <Calendar size={20} />;
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      medication: '#f44336',
      hydration: '#2196f3',
      fitness: '#4caf50',
      activity: '#1976d2'
    };
    return colors[type] || '#64748b';
  };

  const handleAddReminder = () => {
    setOpen(false);
    setNewReminder({ title: '', time: '', type: 'medication', frequency: 'daily' });
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
        background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.05) 0%, rgba(255, 193, 7, 0.05) 100%)',
        border: '1px solid',
        borderColor: 'divider'
      }}>
        <Box>
          <Typography 
            variant={{ xs: 'h4', sm: 'h3' }} 
            fontWeight="800" 
            sx={{
              background: 'linear-gradient(135deg, #ff5722 0%, #ffc107 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Reminders
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            pl: 2,
            borderLeft: '4px solid',
            borderColor: 'warning.main'
          }}>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
          <IconButton sx={{ backgroundColor: 'background.paper', boxShadow: 1 }}>
            <Bell size={20} />
          </IconButton>
          <IconButton sx={{ backgroundColor: 'background.paper', boxShadow: 1 }}>
            <Calendar size={20} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', lg: '1fr 320px' }, 
        gap: { xs: 2, md: 3 }
      }}>
        {/* Main Content */}
        <Box>
          {/* Reminder Metrics Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: 'repeat(2, 1fr)', 
              sm: 'repeat(3, 1fr)' 
            }, 
            gap: { xs: 1.5, sm: 2 }, 
            mb: { xs: 2, md: 3 }
          }}>
            {reminderMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} sx={{ p: 2.5, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Avatar sx={{ backgroundColor: `${metric.color}15`, color: metric.color, width: 48, height: 48 }}>
                      <IconComponent size={24} />
                    </Avatar>
                  </Box>
                  <Typography variant="h4" fontWeight="700" color="text.primary">
                    {metric.value.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {metric.title} {metric.unit && `(${metric.unit})`}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={metric.progress} 
                      sx={{ 
                        flex: 1, 
                        height: 6, 
                        borderRadius: 3,
                        backgroundColor: 'grey.200',
                        '& .MuiLinearProgress-bar': { backgroundColor: metric.color }
                      }} 
                    />
                    <Typography variant="caption" color="text.secondary" fontWeight="600">
                      {metric.progress}%
                    </Typography>
                  </Box>
                </Card>
              );
            })}
          </Box>

          {/* Add New Reminder */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider', mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6" fontWeight="600" color="text.primary">
                  Health Reminders
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay on track with your health goals
                </Typography>
              </Box>
              <Button
                variant="contained"
                startIcon={<Plus size={20} />}
                onClick={() => setOpen(true)}
                sx={{ borderRadius: 2, px: 3 }}
              >
                Add Reminder
              </Button>
            </Box>
          </Card>

          {/* Today's Schedule */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 3 }}>
              Today's Schedule
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {reminders.map((reminder, index) => (
                <Box
                  key={reminder.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2.5,
                    backgroundColor: 'action.hover',
                    borderRadius: 3,
                    border: 1, borderColor: 'divider',
                  }}
                >
                  <Avatar sx={{ backgroundColor: `${getTypeColor(reminder.type)}15`, color: getTypeColor(reminder.type), mr: 2, width: 40, height: 40 }}>
                    {getIcon(reminder.type)}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" fontWeight="600" color="text.primary">
                      {reminder.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {reminder.time}
                    </Typography>
                  </Box>
                  <Chip
                    label={reminder.type}
                    sx={{
                      backgroundColor: `${getTypeColor(reminder.type)}15`,
                      color: getTypeColor(reminder.type),
                      fontWeight: 500,
                      mr: 2
                    }}
                    size="small"
                  />
                  <Switch defaultChecked sx={{ mr: 1 }} />
                  <IconButton size="small" sx={{ mr: 1, '&:hover': { backgroundColor: '#1976d215' } }}>
                    <Edit size={16} />
                  </IconButton>
                  <IconButton size="small" sx={{ '&:hover': { backgroundColor: '#f4433615' } }}>
                    <Delete size={16} />
                  </IconButton>
                </Box>
              ))}
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
          {/* Quick Stats */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Today's Summary
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#4caf5015', color: '#4caf50', width: 32, height: 32 }}>
                  <CheckCircle size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Completed
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    6 out of 8 reminders
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#ff980015', color: '#ff9800', width: 32, height: 32 }}>
                  <Clock size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Next Reminder
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Water intake in 30 min
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Upcoming Reminders */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Upcoming
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {reminders.slice(0, 3).map((reminder, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, backgroundColor: 'action.hover', borderRadius: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: getTypeColor(reminder.type) }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" fontWeight="500" color="text.primary">
                      {reminder.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {reminder.time}
                    </Typography>
                  </Box>
                  <Chip label={reminder.type} size="small" variant="outlined" />
                </Box>
              ))}
            </Box>
          </Card>

          {/* Performance */}
          <Card sx={{ p: 3, borderRadius: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
              🏆 Great Job!
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              You've maintained a 95% completion rate this month. Keep it up!
            </Typography>
            <Chip label="12 Day Streak" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} size="small" />
          </Card>
        </Box>
      </Box>

      {/* Add Reminder Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Reminder</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              fullWidth
              label="Reminder Title"
              value={newReminder.title}
              onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
            />
            <TextField
              fullWidth
              label="Time"
              type="time"
              value={newReminder.time}
              onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={newReminder.type}
                onChange={(e) => setNewReminder({ ...newReminder, type: e.target.value })}
                label="Type"
              >
                <MenuItem value="medication">Medication</MenuItem>
                <MenuItem value="hydration">Hydration</MenuItem>
                <MenuItem value="fitness">Fitness</MenuItem>
                <MenuItem value="activity">Activity</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Frequency</InputLabel>
              <Select
                value={newReminder.frequency}
                onChange={(e) => setNewReminder({ ...newReminder, frequency: e.target.value })}
                label="Frequency"
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddReminder}>
            Add Reminder
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Reminders;