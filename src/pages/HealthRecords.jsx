import React, { useState } from 'react';
import { Box, Typography, Card, Avatar, Chip, IconButton, TextField, InputAdornment, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Upload, Search, Eye, Download, FileText, Calendar, Bell, FolderOpen, Activity, Shield } from 'lucide-react';
import { healthRecords } from '../data/mockData';

const HealthRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredRecords = healthRecords.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeColor = (type) => {
    const colors = {
      'Lab Report': '#1976d2',
      'Imaging': '#9c27b0',
      'Medication': '#4caf50',
      'Immunization': '#2196f3'
    };
    return colors[type] || '#64748b';
  };

  const recordStats = [
    { title: 'Total Records', value: healthRecords.length, icon: FileText, color: '#1976d2' },
    { title: 'Lab Reports', value: healthRecords.filter(r => r.type === 'Lab Report').length, icon: Activity, color: '#4caf50' },
    { title: 'Imaging', value: healthRecords.filter(r => r.type === 'Imaging').length, icon: Eye, color: '#9c27b0' },
    { title: 'Recent', value: healthRecords.filter(r => new Date(r.date) > new Date('2024-01-01')).length, icon: FolderOpen, color: '#ff9800' }
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
        background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(103, 58, 183, 0.05) 100%)',
        border: '1px solid',
        borderColor: 'divider'
      }}>
        <Box>
          <Typography 
            variant={{ xs: 'h4', sm: 'h3' }} 
            fontWeight="800" 
            sx={{
              background: 'linear-gradient(135deg, #2196f3 0%, #673ab7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Health Records
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            pl: 2,
            borderLeft: '4px solid',
            borderColor: 'info.main'
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
          {/* Stats Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: 'repeat(2, 1fr)', 
              sm: 'repeat(4, 1fr)' 
            }, 
            gap: { xs: 1.5, sm: 2 }, 
            mb: { xs: 2, md: 3 }
          }}>
            {recordStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} sx={{ p: 2.5, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Avatar sx={{ backgroundColor: `${stat.color}15`, color: stat.color, width: 48, height: 48 }}>
                      <IconComponent size={24} />
                    </Avatar>
                  </Box>
                  <Typography variant="h4" fontWeight="700" color="text.primary">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.title}
                  </Typography>
                </Card>
              );
            })}
          </Box>

          {/* Upload Section */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider', mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box>
                <Typography variant="h6" fontWeight="600" color="text.primary">
                  Upload New Record
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Supported formats: PDF, JPG, PNG, DOCX (Max 10MB)
                </Typography>
              </Box>
              <Button
                variant="contained"
                startIcon={<Upload size={20} />}
                sx={{ borderRadius: 2, px: 3 }}
              >
                Upload
              </Button>
            </Box>
          </Card>

          {/* Records Table */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" fontWeight="600" color="text.primary">
                Medical Records
              </Typography>
              <TextField
                size="small"
                placeholder="Search records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search size={20} />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: { xs: '100%', sm: 300 } }}
              />
            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              {/* Mobile Card Layout */}
              {filteredRecords.map((record, index) => (
                <Card key={record.id} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <Avatar sx={{ backgroundColor: `${getTypeColor(record.type)}15`, color: getTypeColor(record.type), width: 40, height: 40 }}>
                      <FileText size={20} />
                    </Avatar>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="body1" fontWeight="600" color="text.primary" noWrap>
                        {record.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                        <Chip
                          label={record.type}
                          sx={{ 
                            backgroundColor: `${getTypeColor(record.type)}15`,
                            color: getTypeColor(record.type),
                            fontWeight: 500
                          }}
                          size="small"
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        {record.date} • {record.size}
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton size="small" sx={{ mr: 1, '&:hover': { backgroundColor: '#1976d215' } }}>
                        <Eye size={16} />
                      </IconButton>
                      <IconButton size="small" sx={{ '&:hover': { backgroundColor: '#4caf5015' } }}>
                        <Download size={16} />
                      </IconButton>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {/* Desktop Table Layout */}
              <TableContainer sx={{ borderRadius: 2, border: 1, borderColor: 'divider' }}>
                <Table>
                  <TableHead sx={{ backgroundColor: 'action.hover' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600, color: 'text.primary' }}>Document Name</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: 'text.primary' }}>Type</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: 'text.primary' }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: 'text.primary' }}>Size</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600, color: 'text.primary' }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRecords.map((record, index) => (
                      <TableRow
                        key={record.id}
                        sx={{ 
                          '&:hover': { backgroundColor: 'action.hover' },
                          borderBottom: 1, borderBottomColor: 'divider'
                        }}
                      >
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar sx={{ backgroundColor: `${getTypeColor(record.type)}15`, color: getTypeColor(record.type), width: 32, height: 32 }}>
                              <FileText size={16} />
                            </Avatar>
                            <Typography variant="body2" fontWeight="500" color="text.primary">
                              {record.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={record.type}
                            sx={{ 
                              backgroundColor: `${getTypeColor(record.type)}15`,
                              color: getTypeColor(record.type),
                              fontWeight: 500
                            }}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {record.date}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {record.size}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton size="small" sx={{ mr: 1, '&:hover': { backgroundColor: '#1976d215' } }}>
                            <Eye size={16} />
                          </IconButton>
                          <IconButton size="small" sx={{ '&:hover': { backgroundColor: '#4caf5015' } }}>
                            <Download size={16} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
          {/* Quick Actions */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Upload size={16} />}
                sx={{ borderRadius: 2, justifyContent: 'flex-start' }}
              >
                Upload Document
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Search size={16} />}
                sx={{ borderRadius: 2, justifyContent: 'flex-start' }}
              >
                Search Records
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Download size={16} />}
                sx={{ borderRadius: 2, justifyContent: 'flex-start' }}
              >
                Export All
              </Button>
            </Box>
          </Card>

          {/* Recent Activity */}
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, border: 1, borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="600" color="text.primary" sx={{ mb: 2 }}>
              Recent Activity
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#4caf50' }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="500" color="text.primary">
                    Blood Test Results
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Uploaded 2 hours ago
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#1976d2' }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="500" color="text.primary">
                    X-Ray Report
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Viewed yesterday
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Security Notice */}
          <Card sx={{ p: 3, borderRadius: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Shield size={20} />
              <Typography variant="h6" fontWeight="600">
                Secure Storage
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Your health records are encrypted and stored securely with HIPAA compliance.
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default HealthRecords;