import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Navbar from "../components/Navbar.jsx";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../assets/4891584-removebg-preview.png";
const Home = () => {
  const [toggledark, settoggel] = useState(false);
  useEffect(() => {
    if (toggledark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [toggledark]);

  return (
    <Container
      className=" dark:bg-slate-100"
      sx={{ backgroundColor: "", minHeight: "100vh", padding: "1rem" }}
      maxWidth="xl"
    >
      <Paper
        sx={{ width: "100%", minHeight: "90vh", backgroundColor: "" }}
        elevation={8}
      >
        <div className="w-full h-[45vh] p-3 bg-purple-400 relative rounded overflow-hidden">
          <Navbar />
          <div className="m-4">
            <div className="italic font-semibold  text-sm antialiased animate-pulse md:text-xl md:ml-20 mt-20">
              Time Table made easy{" "}
            </div>
            <div className="absolute right-3 bottom-4 w-56 md:w-[350px] md:h-[350px] md:right-6 md:top-16  h-56">
              <img className="w-full h-full" src={img} alt="" />
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold italic ml-10 text-pretty text-xl">Services:-</p>
          <div
            style={{ backgroundColor: "blueviolet" }}
            className=" place-content-center place-items-center grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 p-3"
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default Home;
// <button onClick={()=>settoggel(e=>!e)} className="p-2">Dark</button>
