import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Card, 
  Box, 
  Typography,
  useTheme,
  useMediaQuery 
} from '@mui/material';

const ResponsiveTable = ({ 
  headers, 
  data, 
  renderRow, 
  renderMobileCard,
  ...props 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile && renderMobileCard) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {data.map((item, index) => renderMobileCard(item, index))}
      </Box>
    );
  }

  return (
    <TableContainer 
      sx={{ 
        borderRadius: 2, 
        border: 1, 
        borderColor: 'divider',
        overflowX: 'auto'
      }}
      {...props}
    >
      <Table sx={{ minWidth: isMobile ? 300 : 650 }}>
        <TableHead sx={{ backgroundColor: 'action.hover' }}>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell 
                key={index}
                sx={{ 
                  fontWeight: 600, 
                  color: 'text.primary',
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  padding: { xs: 1, sm: 2 }
                }}
                {...header.props}
              >
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => renderRow(item, index))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResponsiveTable;