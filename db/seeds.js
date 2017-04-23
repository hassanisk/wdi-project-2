const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const env = require('../config/env');
const Movie = require('../models/movie');

mongoose.connect(env.db, () => {
  console.log('Connected');
});

Movie.collection.drop();

Movie
  .create([
    {
      name: 'Alton Towers',
      description: 'A place where there was a gardener call Parsely - but I don\'t think his name was Parsely.',
      image: 'http://www.towerstimes.co.uk/wp-content/uploads/2015/06/at-general2-news.jpg',
      genre: 'Farley Ln, Alton, Stoke-on-Trent ST10 4DB',
      year: 'https://www.altontowers.com/'
    },
    {
      name: 'Diggerland',
      description: 'I would have loved this place as a child!',
      image: 'http://www.diggerland.com/wp-content/uploads/2016/01/mbilelogo.png',
      genre: 'Medway Valley Leisure Park, Roman Way, Strood, Rochester, Kent ME2 2NU',
      year: 'http://www.diggerland.com/'
    },
    {
      name: 'Legoland',
      description: 'Causes lots of traffic near my house... but there is a mole there that I designed with a nappy.',
      image: 'http://www.icaew.com/-/media/corporate/images/members-homepage/business-services-and-offers-and-discounts/leisure/legoland-500x300.ashx',
      genre: 'Medway Valley Leisure Park, Roman Way, Strood, Rochester, Kent ME2 2NU',
      year: 'https://www.legoland.co.uk/'
    }
  ])
  .then(movies => {
    console.log(`${movies.length} were created`);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  })
  .finally(() => {
    mongoose.connection.close();
  });
