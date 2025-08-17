import React from 'react';
import { Typography, Box, Card, CardContent, Avatar, LinearProgress, Chip, IconButton, Divider } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, BarChart, Bar } from 'recharts';
import { Footprints, Flame, Clock, Droplets, Moon, Heart, TrendingUp, Target, Calendar, Bell, MoreVertical, Activity, Zap } from 'lucide-react';
import { healthMetrics, weeklyActivity, nutritionData, reminders } from '../data/mockData';

const Dashboard = () => {
  const metrics = [
    { title: 'Steps', value: healthMetrics.steps.value, goal: healthMetrics.steps.goal, unit: '', icon: Footprints, color: '#1976d2', progress: 78 },
    { title: 'Calories', value: healthMetrics.calories.value, goal: healthMetrics.calories.goal, unit: 'kcal', icon: Flame, color: '#f44336', progress: 65 },
    { title: 'Active Time', value: healthMetrics.activeTime.value, goal: healthMetrics.activeTime.goal, unit: 'min', icon: Clock, color: '#4caf50', progress: 85 },
    { title: 'Hydration', value: healthMetrics.hydration.value, goal: healthMetrics.hydration.goal, unit: 'L', icon: Droplets, color: '#2196f3', progress: 60 },
    { title: 'Sleep', value: healthMetrics.sleep.value, goal: healthMetrics.sleep.goal, unit: 'hrs', icon: Moon, color: '#9c27b0', progress: 90 },
    { title: 'Heart Rate', value: healthMetrics.heartRate.value, goal: healthMetrics.heartRate.goal, unit: 'bpm', icon: Heart, color: '#ff5722', progress: 72 }
  ];

  const weeklyGoals = [
    { name: 'Steps', current: 45000, target: 70000, color: '#1976d2' },
    { name: 'Calories', current: 1800, target: 2500, color: '#f44336' },
    { name: 'Water', current: 6, target: 8, color: '#2196f3' },
    { name: 'Sleep', current: 49, target: 56, color: '#9c27b0' }
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
        background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
        border: '1px solid',
        borderColor: 'divider'
      }}>
        <Box>
          <Typography 
            variant={{ xs: 'h4', sm: 'h3' }} 
            fontWeight="800" 
            sx={{
              background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Health Dashboard
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            pl: 2,
            borderLeft: '4px solid',
            borderColor: 'primary.main'
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
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} sx={{ 
                  p: { xs: 1.5, sm: 2.5 }, 
                  borderRadius: 3, 
                  boxShadow: 2, 
                  border: 1, 
                  borderColor: 'divider' 
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Avatar sx={{ 
                      backgroundColor: `${metric.color}15`, 
                      color: metric.color, 
                      width: { xs: 40, sm: 48 }, 
                      height: { xs: 40, sm: 48 } 
                    }}>
                      <IconComponent size={20} />
                    </Avatar>
                  </Box>
                  <Typography 
                    variant={{ xs: 'h5', sm: 'h4' }} 
                    fontWeight="700" 
                    color="text.primary"
                  >
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
            {/* Activity Chart */}
            <Card sx={{ 
              p: { xs: 2, sm: 3 }, 
              borderRadius: 3, 
              boxShadow: 2, 
              border: 1, 
              borderColor: 'divider' 
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                  <Typography variant="h6" fontWeight="600" color="text.primary">
                    Weekly Activity
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Steps and calories trend
                  </Typography>
                </Box>
                <Chip icon={<TrendingUp size={16} />} label="+12%" color="success" size="small" />
              </Box>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={weeklyActivity}>
                  <defs>
                    <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1976d2" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#1976d2" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
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
                  <Area type="monotone" dataKey="steps" stroke="#1976d2" strokeWidth={3} fill="url(#stepsGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            {/* Nutrition Chart */}
            <Card sx={{ 
              p: { xs: 2, sm: 3 }, 
              borderRadius: 3, 
              boxShadow: 2, 
              border: 1, 
              borderColor: 'divider' 
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                  <Typography variant="h6" fontWeight="600" color="text.primary">
                    Nutrition Balance
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Today's macronutrients
                  </Typography>
                </Box>
                <Chip icon={<Target size={16} />} label="Balanced" color="success" size="small" />
              </Box>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={nutritionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {nutritionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--mui-palette-background-paper)',
                      border: '1px solid var(--mui-palette-divider)',
                      borderRadius: 8,
                      color: 'var(--mui-palette-text-primary)'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                gap: { xs: 1, sm: 2 }, 
                mt: 2 
              }}>
                {nutritionData.map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: item.color }} />
                    <Typography variant="caption" color="text.secondary">
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Box>

          {/* Weekly Goals */}
          <Card sx={{ 
            p: { xs: 2, sm: 3 }, 
            borderRadius: 3, 
            boxShadow: 2, 
            border: 1, 
            borderColor: 'divider' 
          }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 3 }}>
              Weekly Goals Progress
            </Typography>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={weeklyGoals}>
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
                <Bar dataKey="current" fill="#1976d2" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" fill="currentColor" fillOpacity={0.1} radius={[4, 4, 0, 0]} />
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
          {/* Quick Stats */}
          <Card sx={{ 
            p: { xs: 2, sm: 3 }, 
            borderRadius: 3, 
            boxShadow: 2, 
            border: 1, 
            borderColor: 'divider' 
          }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Today's Summary
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#4caf5015', color: '#4caf50', width: 32, height: 32 }}>
                  <Activity size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Active Minutes
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    127 min today
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ backgroundColor: '#ff572215', color: '#ff5722', width: 32, height: 32 }}>
                  <Zap size={16} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    Energy Level
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    High (8.2/10)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Reminders */}
          <Card sx={{ 
            p: { xs: 2, sm: 3 }, 
            borderRadius: 3, 
            boxShadow: 2, 
            border: 1, 
            borderColor: 'divider' 
          }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Upcoming Reminders
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {reminders.slice(0, 4).map((reminder, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, backgroundColor: 'action.hover', borderRadius: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#1976d2' }} />
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

        
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;