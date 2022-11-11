import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WeatherCard from "./components/WeatherCard";
import styled from "styled-components";
import { WeatherData } from "./service/WeatherApi";

const Container = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled.div`
  height: 100vh;
`;

function App() {
  const [lat, setLat] = useState<number | undefined>(undefined);
  const [lon, setLon] = useState<number | undefined>(undefined);
  const [data, setData] = useState<WeatherData>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      pos.coords.latitude && setLat(pos.coords.latitude);
      pos.coords.longitude && setLon(pos.coords.longitude);
    });
  });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      const dummy: WeatherData = {
        name: "Gili",
        main: {
          temp: 100,
        },
      };
      const result = data.json as unknown as WeatherData;
      setData(result || dummy);
    });
  }, [lat, lon]);

  return (
    <AppContainer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Muhammad Rafiudin
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <WeatherCard weather={data} />
      </Container>
    </AppContainer>
  );
}

export default App;
