import React, { useState } from 'react';
import { Typography, Box, Card, Avatar, LinearProgress, Chip, IconButton, TextField, Button } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';
import { Plus, Apple, Utensils, Droplets, Target, TrendingUp, Calendar, Bell, Coffee, Salad } from 'lucide-react';
import { nutritionData } from '../data/mockData';

const weeklyCalories = [
  { day: 'Mon', calories: 2100, target: 2500 },
  { day: 'Tue', calories: 2400, target: 2500 },
  { day: 'Wed', calories: 1950, target: 2500 },
  { day: 'Thu', calories: 2600, target: 2500 },
  { day: 'Fri', calories: 2300, target: 2500 },
  { day: 'Sat', calories: 2800, target: 2500 },
  { day: 'Sun', calories: 2340, target: 2500 }
];

const todaysMeals = [
  { meal: 'Breakfast', food: 'Oatmeal with berries', calories: 320 },
  { meal: 'Lunch', food: 'Grilled chicken salad', calories: 450 },
  { meal: 'Snack', food: 'Greek yogurt', calories: 150 },
  { meal: 'Dinner', food: 'Salmon with vegetables', calories: 520 }
];

const DietPlanner = () => {
  const [newFood, setNewFood] = useState('');
  const totalCalories = todaysMeals.reduce((sum, meal) => sum + meal.calories, 0);

  const nutritionMetrics = [
    { title: 'Calories', value: totalCalories, goal: 2500, unit: 'kcal', icon: Utensils, color: '#1976d2', progress: (totalCalories/2500)*100 },
    { title: 'Protein', value: 85, goal: 120, unit: 'g', icon: Apple, color: '#4caf50', progress: 71 },
    { title: 'Carbs', value: 180, goal: 250, unit: 'g', icon: Coffee, color: '#ff9800', progress: 72 },
    { title: 'Fat', value: 65, goal: 80, unit: 'g', icon: Droplets, color: '#f44336', progress: 81 },
    { title: 'Fiber', value: 22, goal: 30, unit: 'g', icon: Salad, color: '#4caf50', progress: 73 },
    { title: 'Water', value: 6.5, goal: 8, unit: 'L', icon: Droplets, color: '#2196f3', progress: 81 }
  ];

  const mealPlan = [
    { meal: 'Breakfast', planned: 450, actual: 320, target: 500 },
    { meal: 'Lunch', planned: 600, actual: 450, target: 650 },
    { meal: 'Snack', planned: 200, actual: 150, target: 200 },
    { meal: 'Dinner', planned: 550, actual: 520, target: 600 }
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
        background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(244, 67, 54, 0.05) 100%)',
        border: '1px solid',
        borderColor: 'divider'
      }}>
        <Box>
          <Typography 
            variant={{ xs: 'h4', sm: 'h3' }} 
            fontWeight="800" 
            sx={{
              background: 'linear-gradient(135deg, #ff9800 0%, #f44336 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Diet Planner
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
          {/* Nutrition Metrics Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: 'repeat(2, 1fr)', 
              sm: 'repeat(3, 1fr)' 
            }, 
            gap: { xs: 1.5, sm: 2 }, 
            mb: { xs: 2, md: 3 }
          }}>
            {nutritionMetrics.map((metric, index) => {
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
                      {Math.round(metric.progress)}%
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
            {/* Weekly Calorie Chart */}
            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                  <Typography variant="h6" fontWeight="600" color="text.primary">
                    Weekly Calorie Intake
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Daily calories vs target
                  </Typography>
                </Box>
                <Chip icon={<TrendingUp size={16} />} label="+5%" color="success" size="small" />
              </Box>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyCalories}>
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
                  <Line type="monotone" dataKey="calories" stroke="#1976d2" strokeWidth={3} />
                  <Line type="monotone" dataKey="target" stroke="#ff9800" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Nutrition Breakdown Chart */}
            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                  <Typography variant="h6" fontWeight="600" color="text.primary">
                    Today's Nutrition
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Macronutrient breakdown
                  </Typography>
                </Box>
                <Chip icon={<Target size={16} />} label="Balanced" color="success" size="small" />
              </Box>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={nutritionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {nutritionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
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

          {/* Meal Plan Progress */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 3 }}>
              Today's Meal Plan
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={mealPlan}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} />
                <XAxis dataKey="meal" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: 8 }} />
                <Bar dataKey="actual" fill="#1976d2" radius={[4, 4, 0, 0]} />
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
          {/* Food Logger */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Log Food
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Search food..."
              value={newFood}
              onChange={(e) => setNewFood(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              fullWidth
              variant="contained"
              startIcon={<Plus size={16} />}
              sx={{ borderRadius: 2, mb: 3 }}
            >
              Add Food
            </Button>
            
            <Box sx={{ p: 2, backgroundColor: '#1976d2', color: 'white', borderRadius: 2, textAlign: 'center' }}>
              <Typography variant="h6">
                {totalCalories} kcal
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {2500 - totalCalories} kcal remaining
              </Typography>
            </Box>
          </Card>

          {/* Today's Meals */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Today's Meals
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {todaysMeals.map((meal, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, backgroundColor: 'action.hover', borderRadius: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#1976d2' }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" fontWeight="500" color="text.primary">
                      {meal.food}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {meal.meal} • {meal.calories} kcal
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>

          {/* Meal Suggestions */}
          <Card sx={{ p: 3, borderRadius: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
              🍽️ Meal Suggestion
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              Try a Quinoa Buddha Bowl for dinner - perfectly balanced macros!
            </Typography>
            <Chip label="480 kcal" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} size="small" />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default DietPlanner;