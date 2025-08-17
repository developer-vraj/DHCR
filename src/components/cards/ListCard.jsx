import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const ListCard = ({ title, items, renderItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            {title}
          </Typography>
          
          <List sx={{ py: 0 }}>
            {items.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {renderItem ? renderItem(item, index) : (
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemText
                      primary={item.title}
                      secondary={item.subtitle}
                    />
                  </ListItem>
                )}
              </motion.div>
            ))}
          </List>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ListCard;