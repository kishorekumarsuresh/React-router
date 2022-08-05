import React,{Component} from 'react'
import TextField from '@mui/material/TextField';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import CurrentDT from './CurrentDT';
import Chip from '@mui/material/Chip';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';




class Create extends Component{
  constructor(props) {
    super(props)
    this.state = {
      blogs : ["Good morning"],
      new_blog : "",
      edt : ""
    }
  }
  changeValue = (e) =>{
    this.setState({new_blog:e.target.value})
  }

  clickButton = (e) =>{
    e.preventDefault()
    this.setState({blogs : [...this.state.blogs,this.state.new_blog]})
    this.setState({new_blog: ""})
  
    
  }

  editBlog=(v)=> {
    this.setState({edt : v })
    console.log(this.state.edt)
    
  }
 


  render(){
    return(
      <>
        
     <h2>  
    
      <CreateIcon/> Write it and Post it...!</h2>
    
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
          label="Create your blog "
          multiline  
          rows={4}
          value={this.state.new_blog}
          onChange={this.changeValue}
        />
        <Button 
          sx={{
            "&:hover":{
              backgroundColor: 'blue'
            }
          }}
        
        onClick={this.clickButton} size="small " variant="contained" color="secondary">
          Post 
        </Button>
        
      <ul>
        {
          this.state.blogs.map((elem,indx) =>(
            <>
              <li key={indx}>{elem}  &nbsp;&nbsp; <Chip label="edit"  size="large" onClick={()=>{this.editBlog(elem)}}/> <AutoFixHighIcon /></li> 
               <p> published at <CurrentDT/> </p>
            </>
            
          ))
        }
      </ul>
      
    
      </>
     
    )
  }
}

export default Create
