import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const MetricCard = ({ title, value, goal, unit, icon: Icon, color = 'primary' }) => {
  const theme = useTheme();
  const progress = goal ? (value / goal) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              sx={{
                p: 1,
                borderRadius: 2,
                backgroundColor: theme.palette[color].main + '20',
                color: theme.palette[color].main,
                mr: 2,
              }}
            >
              <Icon size={20} />
            </Box>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
          
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
            {value.toLocaleString()}
            <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {unit}
            </Typography>
          </Typography>
          
          {goal && (
            <>
              <LinearProgress
                variant="determinate"
                value={Math.min(progress, 100)}
                sx={{
                  mb: 1,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: theme.palette.grey[200],
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: theme.palette[color].main,
                  },
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {Math.round(progress)}% of {goal} {unit}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MetricCard;