import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import Content from './Content';
import App from '../../App';
import AppBarStyled from './AppBarStyled';

export default function Header({ open, handleDrawerToggle }: any) {
      const theme = useTheme();
      const matchMD = useMediaQuery(theme.breakpoints.down('lg'));

      const iconBackColor = 'grey.100';
      const iconBackColorOpen = 'grey.200';

      const mainHeader = (
            <Toolbar>
                  <IconButton
                        disableRipple
                        aria-label='open drawer'
                        onClick={handleDrawerToggle}
                        edge='start'
                        color='secondary'
                        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor, ml: { sx: 0, lg: -2 } }}
                  >
                        {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  </IconButton>
                  <Content />
            </Toolbar>
      )

      const appBar = {
            position: 'fixed',
            color: 'inherit',
            elevation: 0,
            sx: {
                  borderBottom: `1px solid ${theme.palette.divider}`,
            }
      }

      return (
          
            <>
                  {!matchMD && matchMD ? (
                        <AppBarStyled {...appBar}>
                              {mainHeader}
                        </AppBarStyled>
                  ) : null}
            </>
      )
}
