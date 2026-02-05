import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  AppBar,
  Toolbar
} from '@mui/material';

const LandingPage = ({ onGetStarted }) => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'primary.main', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            ✨ Admin Platform
          </Typography>
          <Button 
            onClick={onGetStarted} 
            sx={{ 
              fontWeight: 600,
              bgcolor: 'white',
              color: 'primary.main',
              px: 3,
              py: 1,
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                transform: 'scale(1.05)',
                boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 6, pb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'text.primary' }}>
              Welcome to Our Platform
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
              Experience a fully responsive interface designed with Material UI.
              Seamlessly adaptable to any device size.
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              onClick={onGetStarted}
              sx={{ 
                py: 1.5, 
                px: 4, 
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                bgcolor: 'primary.main',
                boxShadow: (theme) => `0 4px 14px ${theme.palette.mode === 'dark' ? 'rgba(46, 125, 50, 0.5)' : 'rgba(46, 125, 50, 0.4)'}`,
                '&:hover': {
                  bgcolor: 'primary.dark',
                  boxShadow: (theme) => `0 6px 20px ${theme.palette.mode === 'dark' ? 'rgba(46, 125, 50, 0.6)' : 'rgba(46, 125, 50, 0.5)'}`,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Started →
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 3,
                boxShadow: (theme) => `0 8px 24px ${theme.palette.mode === 'dark' ? 'rgba(46, 125, 50, 0.4)' : 'rgba(46, 125, 50, 0.25)'}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: (theme) => `0 12px 32px ${theme.palette.mode === 'dark' ? 'rgba(46, 125, 50, 0.5)' : 'rgba(46, 125, 50, 0.35)'}`
                }
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600 }}>🎨 Responsive Visuals</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            { id: 1, title: 'Fast Performance', icon: '⚡', desc: 'Lightning-fast load times' },
            { id: 2, title: 'Secure Platform', icon: '🔒', desc: 'Enterprise-grade security' },
            { id: 3, title: 'Easy to Use', icon: '✨', desc: 'Intuitive user interface' }
          ].map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 8px 24px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.1)',
                    transform: 'translateY(-4px)',
                    borderColor: 'primary.main'
                  }
                }}
              >
                <Typography variant="h3" sx={{ mb: 2 }}>{item.icon}</Typography>
                <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" sx={{ fontWeight: 500 }}>
                  {item.desc}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Start using our amazing features today.
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
