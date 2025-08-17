import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const ChartCard = ({ title, subtitle, children, height = 300 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
          
          <Box sx={{ height, width: '100%' }}>
            {children}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ChartCard;