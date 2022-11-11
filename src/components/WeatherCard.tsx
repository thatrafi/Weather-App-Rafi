import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { WeatherData } from "../service/WeatherApi";

interface WeatherCardProps {
  weather?: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://static.saltinourhair.com/wp-content/uploads/2017/07/23144231/things-to-do-gili-air-header.jpg"
        alt="green iguana"
      />
      {weather && (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weather.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temp : {weather.main.temp}
          </Typography>
        </CardContent>
      )}
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default WeatherCard;
