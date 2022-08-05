import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

 class Edit extends Component {
  render() {
    return (
      <div>
        <p>edit</p>
        <TextField
             sx={{

              width: { sm: 300, md: 700 },
              "& .MuiInputBase-root": {
                  height: 100
              }
          }}
          fullWidth
          size="Large"
          id="outlined-multiline-static"
          label="Edit this"
          multiline  
          rows={4}
        />

        <Button 
          sx={{
            "&:hover":{
              backgroundColor: 'blue'
            }
          }}
        
            size="small " variant="contained" color="secondary">
          Done 
        </Button>
      </div>
    )
  }
}
export default Edit 