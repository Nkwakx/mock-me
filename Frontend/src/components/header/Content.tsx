import { Box, IconButton, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';
import Search from './Search';
import Notification from './Notification';
import Profile from './Profile';
import Mobile from '../media/Mobile';

export default function Content() {
      const matchesXs = useMediaQuery((theme: any) => theme.breakpoints.down('md'));
      return (
            <>
                  {!matchesXs && <Search />}
                  {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

                  <IconButton
                        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                        target='_blank'
                        disableRipple
                        color='secondary'
                        title='Github'
                        component='a'
                        href=''
                  >
                        <GithubOutlined />
                  </IconButton>
                  <Notification />
                  {!matchesXs && <Profile />}
                  {matchesXs && <Mobile />}
            </>
      )
}
