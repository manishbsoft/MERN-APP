const API_KEY = 'AIzaSyDjB7gnMvZ9wdAoc8YvbO15D8XLhJdjw8s';
const axios = require('axios');
const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
    return { // if you don't have API_KEY / credit-card to purchage google's api - comment this return if you have API_KEY
      lat: 40.7484405,
      lng: -73.9878531
    };

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );

  const data = response.data;

  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }
  console.log(data)
  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAddress;
