import React, { useState } from 'react';
import { Typography, Box, Card, Avatar, Chip, IconButton, TextField, Button, LinearProgress } from '@mui/material';
import { Send, Award, Flame, Target, Calendar, Bell, MessageCircle, Bot, Trophy, Zap } from 'lucide-react';

const chatMessages = [
  { id: 1, sender: 'coach', message: 'Great job on completing your workout today! How are you feeling?', time: '10:30 AM' },
  { id: 2, sender: 'user', message: 'Feeling energized! The morning run was refreshing.', time: '10:32 AM' },
  { id: 3, sender: 'coach', message: 'Excellent! I noticed you\'ve been consistent with your hydration goals. Keep it up! 💧', time: '10:35 AM' },
  { id: 4, sender: 'user', message: 'Thanks! What should I focus on next?', time: '10:37 AM' },
  { id: 5, sender: 'coach', message: 'Let\'s work on increasing your daily step count by 500 steps. Small increments lead to big results!', time: '10:40 AM' }
];

const achievements = [
  { id: 1, title: '7-Day Streak', description: 'Completed daily goals for a week', icon: Flame, color: 'error' },
  { id: 2, title: 'Hydration Hero', description: 'Met water intake goals 5 days in a row', icon: Target, color: 'info' },
  { id: 3, title: 'Early Bird', description: 'Morning workouts for 3 consecutive days', icon: Award, color: 'success' }
];



const HealthCoaching = () => {
  const [message, setMessage] = useState('');

  const coachingMetrics = [
    { title: 'Sessions', value: 24, goal: 30, unit: 'total', icon: MessageCircle, color: '#1976d2', progress: 80 },
    { title: 'Streak', value: 12, goal: 30, unit: 'days', icon: Flame, color: '#f44336', progress: 40 },
    { title: 'Goals Met', value: 18, goal: 20, unit: 'this month', icon: Target, color: '#4caf50', progress: 90 },
    { title: 'Achievements', value: 7, goal: 10, unit: 'unlocked', icon: Trophy, color: '#ff9800', progress: 70 },
    { title: 'Health Score', value: 87, goal: 100, unit: 'points', icon: Zap, color: '#9c27b0', progress: 87 },
    { title: 'Motivation', value: 95, goal: 100, unit: '%', icon: Award, color: '#4caf50', progress: 95 }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
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
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
        border: '1px solid',
        borderColor: 'divider'
      }}>
        <Box>
          <Typography 
            variant={{ xs: 'h4', sm: 'h3' }} 
            fontWeight="800" 
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Health Coaching
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
          {/* Coaching Metrics Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: 'repeat(2, 1fr)', 
              sm: 'repeat(3, 1fr)' 
            }, 
            gap: { xs: 1.5, sm: 2 }, 
            mb: { xs: 2, md: 3 }
          }}>
            {coachingMetrics.map((metric, index) => {
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

          {/* Chat Interface */}
          <Card sx={{ 
            p: { xs: 2, sm: 3 }, 
            borderRadius: 3, 
            boxShadow: 2, 
            border: 1, 
            borderColor: 'divider', 
            height: { xs: 400, sm: 500 } 
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pb: 2, borderBottom: '1px solid', borderBottomColor: 'divider' }}>
              <Avatar sx={{ backgroundColor: '#1976d215', color: '#1976d2', mr: 2, width: 48, height: 48 }}>
                <Bot size={24} />
              </Avatar>
              <Box>
                <Typography variant="h6" fontWeight="600" color="text.primary">
                  AI Health Coach
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Online • Ready to help
                </Typography>
              </Box>
            </Box>

            <Box sx={{ flex: 1, overflowY: 'auto', mb: 3, height: { xs: 200, sm: 300 } }}>
              {chatMessages.map((msg, index) => (
                <Box
                  key={msg.id}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    mb: 2
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      maxWidth: '70%',
                      backgroundColor: msg.sender === 'user' ? '#1976d2' : 'action.hover',
                      color: msg.sender === 'user' ? 'white' : 'text.primary',
                      borderRadius: 3,
                      border: msg.sender === 'user' ? 'none' : '1px solid',
                      borderColor: msg.sender === 'user' ? 'none' : 'divider'
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      {msg.message}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        opacity: 0.7,
                        textAlign: 'right',
                        display: 'block'
                      }}
                    >
                      {msg.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                sx={{ borderRadius: 2 }}
              />
              <Button
                variant="contained"
                onClick={handleSendMessage}
                sx={{ minWidth: 'auto', px: 3, borderRadius: 2 }}
              >
                <Send size={20} />
              </Button>
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
          {/* AI Coach Profile */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#1976d215',
                  color: '#1976d2',
                  fontSize: '2rem'
                }}
              >
                🤖
              </Avatar>
              <Typography variant="h6" fontWeight="600" color="text.primary">
                Your AI Coach
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Personalized health guidance
              </Typography>
              <Chip label="Online" color="success" size="small" />
            </Box>
          </Card>

          {/* Current Progress */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Today's Progress
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#4caf5015', color: '#4caf50', width: 32, height: 32 }}>
                  <Target size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Goals Completed
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    3 out of 4 goals
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#1976d215', color: '#1976d2', width: 32, height: 32 }}>
                  <MessageCircle size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Coaching Session
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    15 min conversation
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Recent Achievements */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Recent Achievements
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {achievements.slice(0, 3).map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, backgroundColor: 'action.hover', borderRadius: 2 }}>
                    <Avatar sx={{ backgroundColor: `${achievement.color === 'error' ? '#f44336' : achievement.color === 'info' ? '#2196f3' : '#4caf50'}15`, color: achievement.color === 'error' ? '#f44336' : achievement.color === 'info' ? '#2196f3' : '#4caf50', width: 32, height: 32 }}>
                      <Icon size={16} />
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" fontWeight="500" color="text.primary">
                        {achievement.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {achievement.description}
                      </Typography>
                    </Box>
                    <Chip label="New" size="small" color="success" />
                  </Box>
                );
              })}
            </Box>
          </Card>

          {/* Motivation Card */}
          <Card sx={{ p: 3, borderRadius: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
              🎆 Keep It Up!
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              You're on a 12-day streak! Your consistency is paying off.
            </Typography>
            <Chip label="Personal Best" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} size="small" />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default HealthCoaching;