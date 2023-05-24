import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react'

export default function Profile() {

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
      const [value, setValue] = React.useState(0);
      const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
            setValue(newValue);
      };

      const iconBackColorOpen = 'grey.300';

      return (
            <Box sx={{ flexShrink: 0, ml: 0.75 }}>
                  <IconButton
                        sx={{
                              p: 0.25,
                              bgcolor: open ? iconBackColorOpen : 'transparent',
                              borderRadius: 1,
                              '&:hover': { bgcolor: 'secondary.lighter' },
                        }}
                        aria-label='open profile'
                        ref={anchorRef}
                        aria-controls={open ? 'profile-grow' : undefined}
                        aria-haspopup='true'
                        onClick={handleToggle}
                  >
                        <Stack direction='row' spacing={2} alignItems='center' sx={{ p: 0.5 }}>
                              <Avatar alt='profile' src='' sx={{ width: 32, height: 32 }} />
                              <Typography variant='body2' sx={{ color: 'text.primary' }}></Typography>
                        </Stack>
                  </IconButton>
            </Box>
      )
}
