import React from 'react';
import { Typography, Box, Card, Avatar, Button, Chip, IconButton, LinearProgress } from '@mui/material';
import { Heart, MessageCircle, Share, Trophy, Medal, Award, Calendar, Bell, Users, TrendingUp, Target } from 'lucide-react';
import { communityPosts, leaderboard } from '../data/mockData';

const challenges = [
  { id: 1, title: '10K Steps Challenge', participants: 234, daysLeft: 5, progress: 78 },
  { id: 2, title: 'Hydration Hero', participants: 156, daysLeft: 12, progress: 45 },
  { id: 3, title: 'Morning Workout', participants: 89, daysLeft: 8, progress: 92 }
];

const Community = () => {


  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy size={20} color="#FFD700" />;
      case 2: return <Medal size={20} color="#C0C0C0" />;
      case 3: return <Award size={20} color="#CD7F32" />;
      default: return null;
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
        background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(33, 150, 243, 0.05) 100%)',
        border: '1px solid',
        borderColor: 'divider'
      }}>
        <Box>
          <Typography 
            variant={{ xs: 'h4', sm: 'h3' }} 
            fontWeight="800" 
            sx={{
              background: 'linear-gradient(135deg, #4caf50 0%, #2196f3 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Community
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
        <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
          {/* Community Feed */}
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
                  Community Feed
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Latest updates from the community
                </Typography>
              </Box>
              <Chip icon={<TrendingUp size={16} />} label="Active" color="success" size="small" />
            </Box>
            
            <Box sx={{ maxHeight: { xs: 400, sm: 600 }, overflowY: 'auto' }}>
              {communityPosts.map((post, index) => (
                <Box
                  key={post.id}
                  sx={{
                    p: 3,
                    mb: 2,
                    backgroundColor: 'action.hover',
                    borderRadius: 3,
                    border: 1, borderColor: 'divider',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ backgroundColor: '#1976d2', mr: 2, width: 40, height: 40 }}>
                      {post.user.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle2" fontWeight="600" color="text.primary">
                        {post.user}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {post.time}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                    {post.content}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button
                      size="small"
                      startIcon={<Heart size={16} />}
                      sx={{ color: 'text.secondary', '&:hover': { color: '#f44336' } }}
                    >
                      {post.likes}
                    </Button>
                    <Button
                      size="small"
                      startIcon={<MessageCircle size={16} />}
                      sx={{ color: 'text.secondary' }}
                    >
                      Comment
                    </Button>
                    <Button
                      size="small"
                      startIcon={<Share size={16} />}
                      sx={{ color: 'text.secondary' }}
                    >
                      Share
                    </Button>
                  </Box>
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
          order: { xs: -1, lg: 0 },
          minWidth: 0,
          overflow: 'hidden'
        }}>
          {/* Leaderboard */}
          <Card sx={{ 
            p: { xs: 2, sm: 3 }, 
            borderRadius: 3, 
            boxShadow: 2, 
            border: 1, 
            borderColor: 'divider' 
          }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Leaderboard
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {leaderboard.slice(0, 5).map((user, index) => (
                <Box
                  key={user.rank}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 1.5,
                    backgroundColor: user.name === 'You' ? '#1976d2' : 'action.hover',
                    color: user.name === 'You' ? 'white' : 'text.primary',
                    borderRadius: 2,
                    border: 1, borderColor: 'divider'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mr: 2, minWidth: 24 }}>
                    {getRankIcon(user.rank) || (
                      <Typography variant="body2" fontWeight="600" sx={{ textAlign: 'center', width: 20 }}>
                        {user.rank}
                      </Typography>
                    )}
                  </Box>
                  <Avatar sx={{ 
                    mr: 2, 
                    width: 32, 
                    height: 32,
                    backgroundColor: user.name === 'You' ? 'white' : '#1976d2', 
                    color: user.name === 'You' ? '#1976d2' : 'white',
                    fontSize: '0.875rem'
                  }}>
                    {user.avatar}
                  </Avatar>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="body2" fontWeight="500" noWrap>
                      {user.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: user.name === 'You' ? 'rgba(255,255,255,0.7)' : 'text.secondary' }}
                    >
                      {user.points} points
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>

          {/* Active Challenges */}
          <Card sx={{ 
            p: { xs: 2, sm: 3 }, 
            borderRadius: 3, 
            boxShadow: 2, 
            border: 1, 
            borderColor: 'divider' 
          }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Active Challenges
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {challenges.map((challenge, index) => (
                <Box
                  key={challenge.id}
                  sx={{
                    p: 2,
                    backgroundColor: 'action.hover',
                    borderRadius: 2,
                    border: 1, borderColor: 'divider'
                  }}
                >
                  <Typography variant="body2" fontWeight="600" color="text.primary">
                    {challenge.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                    {challenge.participants} participants • {challenge.daysLeft} days left
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={challenge.progress}
                      sx={{
                        flex: 1,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: 'grey.200',
                        '& .MuiLinearProgress-bar': { backgroundColor: '#1976d2' }
                      }}
                    />
                    <Typography variant="caption" color="text.secondary" fontWeight="600">
                      {challenge.progress}%
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Community;