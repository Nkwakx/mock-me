import { SearchOutlined } from '@mui/icons-material'
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material'

export default function Search() {
      return (
            <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
                  <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
                        <OutlinedInput
                              size='small'
                              placeholder='Search'
                              id='search'
                              startAdornment={
                                    <InputAdornment position='start' sx={{ mr: -0.5 }}>
                                          <SearchOutlined />
                                    </InputAdornment>
                              }
                              aria-describedby='search-helper-text'
                              inputProps={{
                                    'aria-label': 'search',
                              }}
                        />
                  </FormControl>
            </Box>
      )
}
