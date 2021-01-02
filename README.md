## Yet another weather app

You can view the site [here](https://roninanu777.github.io/react_weatherapp/).  
<hr />

This is a mini-project where I coded a weather app using React. It uses the browser `navigator` API to get the current position and find the weather in that area using the [Open Weather Map](https://openweathermap.org/) API. It also has a feature to find the weather in other cities and add them, for which it uses a simple API which returns `city_ids` based on the query. To store the selected city it uses `localStorage` to save them.

### Getting started

To run this first create an `API_KEY` from [Open Weather Map](https://openweathermap.org/). After creating the API make a file `.env` in the root directory and enter the below lines:  

```
REACT_APP_BASEURL = https://api.openweathermap.org/data/2.5/weather
REACT_APP_API_KEY = <YOUR_API_KEY>
```
Now open the terminal and type in the commands below:

```
$ npm install
```
This will install all the necessry dependencies for the app.  

To start the app run the following command:  

```
$ npm start
```

The app will start on PORT 3000 by default.
