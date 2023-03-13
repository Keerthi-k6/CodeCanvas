import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded';
const Container = styled(AppBar)`
background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 11vh;
  
  `;
  
  
  const Header = () => {
    return (

        <Container position='static'>
            <Toolbar>
             <img src= {require('./CC.png')} alt="logo" style={{width: 40, marginRight:4}}/>
                <h2>Code</h2><span style={{color:'#5ce1e6'}}><h2>Canvas</h2></span>
                <ViewSidebarRoundedIcon style={{color :'#5ce1e6',marginLeft : 'auto'}}/>
            </Toolbar>
        </Container>
    )
}

export default Header