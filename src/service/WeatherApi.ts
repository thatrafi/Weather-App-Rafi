interface TempData {
  temp?: number;
  pressure?: number;
}

export interface WeatherData {
  name: string;
  main: TempData;
}

// export const FetchWeatherApi: PromiseFn<WeatherData> = async (lat,lon) => {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data: WeatherData = {
//     name: "Gili",
//     main: {
//       temp: 100,
//     },
//   };
//   if (!response.ok) {
//     return data;
//   }
//   const result = response.json as unknown as WeatherData;
//   return result || data;
// };
