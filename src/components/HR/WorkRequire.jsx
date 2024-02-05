import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function WorkRequire(props) {
  return (
    <div>
        <Box
              sx={{
                '& .MuiTextField-root': { m: 1, maxWidth: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
        <TextField
          id="outlined-multiline-static requires"
          name={`requires${props.currentWork}`}
          label="requires"
          multiline
          onChange={props.handleChange}/>   
        </Box>
    </div>
  );
}
