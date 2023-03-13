import { Box,styled} from '@mui/material'
import React from 'react'
import Editor from './Editor'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
const Container = styled(Box)
`
background-color: #060606;
display: flex;
height:70vh;
}
`

const Code = () => {
    const {html, setHtml, css, setCss, js, setJs}= useContext(DataContext);
  return (
    <Container >
    <Editor
    heading ="HTML" icon="/"color="#e34c26" value={html} onChange={setHtml}/>
    <Editor heading ="CSS" icon="*" color="#0EBFFF" value={css} onChange={setCss}/>
    <Editor heading="JS" icon="( )" color="#FCD000" value={js} onChange={setJs}/>
    </Container>
  )
}

export default Code