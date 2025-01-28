# Weather-app Design implemented Weather API 

 In Working MODe  
 Check Some Output i have aaded some screenshots
![Screenshot 2025-01-27 200716](https://github.com/user-attachments/assets/5ca10c7b-6f39-4dc2-b859-27b91aebd688)
![Screenshot 2025-01-27 200744](https://github.com/user-attachments/assets/972f4f03-7646-403f-832b-41d7507272db)
![Screenshot 2025-01-27 200805](https://github.com/user-attachments/assets/63d97f01-35fa-4ed1-8646-97251dcf1849)
# Weather App

## Project Overview
The Weather App is a web-based application that allows users to check the current weather of any city. It provides real-time weather information such as temperature, weather conditions, humidity, wind speed, and local time, using a clean and interactive interface. Background images dynamically change based on the weather conditions and temperature.

---

## Features
- Search for weather information by city name.
- Displays temperature, weather description, humidity, wind speed, and local time.
- Dynamic background images based on the temperature (e.g., summer, winter, spring themes).
- Fully responsive design for all devices.
- Frontend powered by HTML, CSS, and JavaScript.
- Backend server built with Node.js for secure API key handling and communication with external APIs.

---

## Technologies Used
### Frontend:
- **HTML**
- **CSS** (including animations and gradients)
- **JavaScript** (fetch API, DOM manipulation)

### Backend:
- **Node.js**
- **Express.js**

### External APIs:
- **WeatherAPI** for fetching real-time weather data.

---

## Project Structure
```plaintext
Weather-App/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
```

---

## How to Run Locally

### Prerequisites
1. Install [Node.js](https://nodejs.org/).
2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

---

### Setting Up the Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following content:
   ```plaintext
   WEATHER_API_KEY=your_weather_api_key
   ```
   Replace `your_weather_api_key` with your actual WeatherAPI key.

4. Start the server:
   ```bash
   node server.js
   ```
   Or use `nodemon` for development:
   ```bash
   npx nodemon server.js
   ```

The backend will be running at `http://localhost:3000`.

---

### Setting Up the Frontend
1. Open the `frontend/index.html` file in your browser, or use a local server to host it.
2. The application will connect to the backend to fetch weather data.

---

## API Endpoint
**GET /api/weather?city=city_name**
- **Parameters**:
  - `city` (required): The name of the city to fetch weather data for.
- **Response**:
  ```json
  {
    "location": {
      "name": "City Name",
      "localtime": "2025-01-28 14:30"
    },
    "current": {
      "temp_c": 25,
      "condition": {
        "text": "Sunny"
      },
      "humidity": 50,
      "wind_kph": 15
    }
  }
  ```

---

## Deployment
### Frontend:
- Host the frontend on platforms like GitHub Pages, Netlify, or Vercel.

### Backend:
- Deploy the Node.js backend on platforms like Render, Heroku, or Vercel.

---

## Screenshots
### Homepage:
![Homepage Screenshot](#)

### Weather Information:
![Weather Screenshot](#)

---

## Future Enhancements
- Add support for weekly forecasts.
- Include geolocation-based weather.
- Add user authentication for personalized features.

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

