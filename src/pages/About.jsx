import React from 'react'
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
   <>
   <Container
      className="bg-slate-900 dark:bg-slate-100"
      sx={{ backgroundColor: "", minHeight: "100vh", padding: "1rem" }}
      maxWidth="xl"
    >
      <Paper
        className=" shadow-lg bg-pink-200"
        sx={{ width: "100%", minHeight: "90vh" }}
        elevation={8}
      >
        about <NavLink className={`font-bold text-lg`} to={-1} >Home</NavLink>
      </Paper>
    </Container>
   </>
  )
}

export default About
