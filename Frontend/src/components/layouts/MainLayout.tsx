import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import Header from '../header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  const theme = useTheme();
  const matchLG = useMediaQuery(theme.breakpoints.down('xl'));

  const [open, setOpen] = React.useState('lg' ? true : false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box component='main' sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
