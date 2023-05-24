import { BellOutlined } from '@ant-design/icons';
import { Badge, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'

export default function Notification() {
      const theme = useTheme();
      const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

      const anchorRef = React.useRef<HTMLButtonElement>(null);
      const [open, setOpen] = React.useState(false);
      const handleToggle = () => {
            setOpen((prevOpen) => !prevOpen);
      };
      const handleClose = (event: React.MouseEvent<EventTarget>) => {
            if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
                  return;
            }
            setOpen(false);
      };
      const iconBackColorOpen = 'grey.300';
      const iconBackColor = 'grey.100';
      return (
            <Box sx={{ flexShrink: 0, ml: 0.75 }}>
                  <IconButton
                        disableRipple
                        color='secondary'
                        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
                        aria-label='open profile'
                        ref={anchorRef}
                        aria-controls={open ? 'profile-grow' : undefined}
                        aria-haspopup='true'
                        onClick={handleToggle}
                  >
                        <Badge badgeContent={4} color='primary'>
                              <BellOutlined />
                        </Badge>
                  </IconButton>
            </Box>
      )
}
