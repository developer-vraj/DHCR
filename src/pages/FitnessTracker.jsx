import React from 'react';
import { Typography, Box, Card, Avatar, LinearProgress, Chip, IconButton } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, LineChart, Line } from 'recharts';
import { Activity, Target, Flame, Clock, TrendingUp, Calendar, Bell, Dumbbell, Timer, Trophy } from 'lucide-react';
import { healthMetrics } from '../data/mockData';

const workoutData = [
  { day: 'Mon', duration: 45, calories: 320 },
  { day: 'Tue', duration: 60, calories: 450 },
  { day: 'Wed', duration: 30, calories: 220 },
  { day: 'Thu', duration: 75, calories: 520 },
  { day: 'Fri', duration: 40, calories: 280 },
  { day: 'Sat', duration: 90, calories: 650 },
  { day: 'Sun', duration: 55, calories: 380 }
];

const monthlyProgress = [
  { week: 'Week 1', steps: 65000, calories: 18500 },
  { week: 'Week 2', steps: 72000, calories: 20200 },
  { week: 'Week 3', steps: 68000, calories: 19100 },
  { week: 'Week 4', steps: 75000, calories: 21000 }
];

const FitnessTracker = () => {
  const fitnessMetrics = [
    { title: 'Daily Steps', value: healthMetrics.steps.value, goal: healthMetrics.steps.goal, unit: '', icon: Activity, color: '#1976d2', progress: 78 },
    { title: 'Calories Burned', value: healthMetrics.calories.value, goal: healthMetrics.calories.goal, unit: 'kcal', icon: Flame, color: '#f44336', progress: 65 },
    { title: 'Active Minutes', value: healthMetrics.activeTime.value, goal: healthMetrics.activeTime.goal, unit: 'min', icon: Clock, color: '#4caf50', progress: 85 },
    { title: 'Workouts', value: 12, goal: 20, unit: 'sessions', icon: Dumbbell, color: '#9c27b0', progress: 60 },
    { title: 'Distance', value: 8.5, goal: 10, unit: 'km', icon: Target, color: '#ff9800', progress: 85 },
    { title: 'Streak', value: 7, goal: 30, unit: 'days', icon: Trophy, color: '#4caf50', progress: 23 }
  ];

  const workoutSummary = [
    { name: 'This Week', workouts: 5, duration: 285, calories: 1850 },
    { name: 'Last Week', workouts: 4, duration: 240, calories: 1620 },
    { name: 'Avg/Week', workouts: 4.5, duration: 262, calories: 1735 }
  ];

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
        background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 152, 0, 0.05) 100%)',
        border: '1px solid',
        borderColor: 'divider'
      }}>
        <Box>
          <Typography 
            variant={{ xs: 'h4', sm: 'h3' }} 
            fontWeight="800" 
            sx={{
              background: 'linear-gradient(135deg, #4caf50 0%, #ff9800 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Fitness Tracker
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            pl: 2,
            borderLeft: '4px solid',
            borderColor: 'success.main'
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
          {/* Metrics Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: 'repeat(2, 1fr)', 
              sm: 'repeat(3, 1fr)' 
            }, 
            gap: { xs: 1.5, sm: 2 }, 
            mb: { xs: 2, md: 3 }
          }}>
            {fitnessMetrics.map((metric, index) => {
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

          {/* Charts Row */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: { xs: 2, md: 3 }, 
            mb: { xs: 2, md: 3 }
          }}>
            {/* Daily Workouts Chart */}
            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                  <Typography variant="h6" fontWeight="600" color="text.primary">
                    Daily Workouts
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration and calories this week
                  </Typography>
                </Box>
                <Chip icon={<TrendingUp size={16} />} label="+18%" color="success" size="small" />
              </Box>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={workoutData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--mui-palette-background-paper)',
                      border: '1px solid var(--mui-palette-divider)',
                      borderRadius: 8,
                      color: 'var(--mui-palette-text-primary)'
                    }} 
                  />
                  <Bar dataKey="duration" fill="#1976d2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Monthly Progress Chart */}
            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                  <Typography variant="h6" fontWeight="600" color="text.primary">
                    Monthly Progress
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Steps trend over weeks
                  </Typography>
                </Box>
                <Chip icon={<Target size={16} />} label="On Track" color="success" size="small" />
              </Box>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyProgress}>
                  <defs>
                    <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1976d2" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#1976d2" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} />
                  <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--mui-palette-background-paper)',
                      border: '1px solid var(--mui-palette-divider)',
                      borderRadius: 8,
                      color: 'var(--mui-palette-text-primary)'
                    }} 
                  />
                  <Area type="monotone" dataKey="steps" stroke="#1976d2" strokeWidth={3} fill="url(#stepsGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </Box>

          {/* Workout Summary */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 3 }}>
              Workout Summary
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={workoutSummary}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--mui-palette-background-paper)',
                    border: '1px solid var(--mui-palette-divider)',
                    borderRadius: 8,
                    color: 'var(--mui-palette-text-primary)'
                  }} 
                />
                <Bar dataKey="workouts" fill="#1976d2" radius={[4, 4, 0, 0]} />
                <Bar dataKey="duration" fill="#4caf50" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Box>

        {/* Right Sidebar */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: { xs: 2, md: 3 },
          order: { xs: -1, lg: 0 }
        }}>
          {/* Today's Workout */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Today's Workout
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#1976d215', color: '#1976d2', width: 32, height: 32 }}>
                  <Dumbbell size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Upper Body Strength
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    45 min • 320 kcal
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#4caf5015', color: '#4caf50', width: 32, height: 32 }}>
                  <Timer size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Rest Time
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    2 min between sets
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Achievements */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Recent Achievements
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#4caf50' }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="500" color="text.primary">
                    7-Day Streak
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Completed daily workouts
                  </Typography>
                </Box>
                <Chip label="New" size="small" color="success" />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#1976d2' }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="500" color="text.primary">
                    10K Steps
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Daily goal achieved
                  </Typography>
                </Box>
                <Chip label="Today" size="small" variant="outlined" />
              </Box>
            </Box>
          </Card>

          {/* Motivation */}
          <Card sx={{ p: 3, borderRadius: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
              💪 Keep Going!
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              You're 85% closer to your weekly fitness goal. Just 2 more workouts!
            </Typography>
            <Chip label="85% Complete" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} size="small" />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default FitnessTracker;