import { Box,IconButton,styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'; 
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import React from 'react'
const Heading=styled(Box)`
background: #1d1e22;
display:flex;
padding:9px 12px;

`
const Header = styled(Box)
`
display: flex;
justify-content: space-between;
background: #060606;
color: #AAAEBC;
font-weight: 700;
`
const Container = styled(Box)
`
flex-grow: 1;
flex-basic: 0;
display: flex;
flex-direction: column;
padding: 0 8px 8px;
`
const Editor = ({heading,icon,color,value,onChange}) => {
    const [open,setOpen]=useState(true);
    const handleChange=(editor,data,value) =>
    {
         onChange(value);
    }
  return (
   
    <Container style={open?null:{flexGrow:0.8}}>
        <Header>
            <Heading>
                <Box component="span"
                style={{
                    background:color,
                    display:'flex',
                    height:20,
                    width:20,
                    placeContent:'center',
                    borderRadius:5,
                    marginRight:5,
                    color:'#000',
                    paddingBottom:4}}>{icon}</Box>
                {heading}
            </Heading>
            <IconButton onClick={()=> setOpen(prevState => !prevState)} style={{alignSelf:'center',color:'#5ce1e6'}}>
                {open ? <CloseFullscreenIcon/> :<OpenInFullIcon/>}
            </IconButton>
        </Header>
        <ControlledEditor className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
            theme:'material',
            lineNumbers:true,
            lineWrapping:true,
            lint: true,

        }}/>
    </Container>

  )
}

export default Editor