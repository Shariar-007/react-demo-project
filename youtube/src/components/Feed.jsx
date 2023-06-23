import React, { useEffect, useState} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar } from './';


const Feed = () => {
  return (
    <Stack sx={{ direction: {sx: "column", md: "row"}}}>

      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px : { sx: 0, md: 2 } }}>
        <Sidebar />
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: "#fff"}}>
          Copyright © 2023 Shariar Shohag
        </Typography>
      </Box>

      {/* <Box p={2} sx={{overflowY: 'auto', heightL: '90vh', flex: 2}}>
        <Typography  variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
            Copyright © 2023 Shariar Shohag
        </Typography>
      </Box> */}
    </Stack>
  )
}

export default Feed
