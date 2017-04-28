const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const env        = require('../config/env');
const Movie      = require('../models/movie');

mongoose.connect(env.db, () => {
  console.log('Connected');
});

Movie.collection.drop();

Movie
  .create([
    {
      name: 'La La Land',
      description: 'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
      image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRhFtgdSYQ89vUMjMJal2D8H39qBCkh9ptCEoZEsafOzkeQPTu2',
      genre: ' Comedy | Drama | Music | Musical | Romance',
      youtubeid: '0pdqf4P9MB8',
      year: '2016'
    },
    {
      name: 'Moonlight',
      description: 'A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him.',
      image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcT53B_Wizqekgv5U9fetXZc_7FmMFzp5MpeEodcyTOiugrjV7iP',
      genre: 'Drama',
      year: '2016'
    },
    {
      name: 'Arrival',
      description: 'Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind.',
      image: 'http://cdn3-www.comingsoon.net/assets/uploads/gallery/arrival/arrivalposter.jpg',
      genre: 'Drama',
      year: '2016'
    },
    {
      name: 'Manchester by the Sea',
      description: 'After the death of his older brother Joe, Lee Chandler (Casey Affleck) is shocked that Joe has made him sole guardian of his teenage nephew Patrick. Taking leave of his job as a janitor in Boston, Lee reluctantly returns to Manchester-by-the-Sea, the fishing village where his working-class family has lived for generations. There, he is forced to deal with a past that separated him from his wife, Randi (Michelle Williams), and the community where he was born and raised.',
      image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcS5-FlTo1iYdLeCeTN09lbE6seUjxO1jksMN8y5dpz3vJdRgFig',
      genre: 'Drama',
      year: '2016'
    },
    {
      name: 'Hell or High Water',
      description: 'Toby is a divorced father who\'s trying to make a better life for his son. His brother Tanner is an ex-convict with a short temper and a loose trigger finger. Together, they plan a series of heists against the bank that\'s about to foreclose on their family ranch. Standing in their way is Marcus, a Texas Ranger who\'s only weeks away from retirement. As the siblings plot their final robbery, they must also prepare for a showdown with a crafty lawman who\'s not ready to ride off into the sunset.',
      image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRYPGO1eXsOXccVk-YmuR5XBUsr9Cjf7PrrAdc-KngRAptlynNl',
      genre: 'Drama',
      year: '2016'
    },
    {
      name: 'Captain America: Civil War',
      description: 'Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side.',
      image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTz1xU3qYlGXViIS51HIQh71D339ceW2nlWnb8zzSaJAL0newVj',
      genre: 'Action',
      year: '2016'
    },
    {
      name: 'Zootopia',
      description: 'From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps (Ginnifer Goodwin) becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde (Jason Bateman), a wily fox who makes her job even harder.',
      image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcQj1fU0-Idujcrs_MB2xEWbVEygeCkcjYUp4Z-hSIPqgu0vFbQi',
      genre: 'Animation',
      year: '2016'
    },
    {
      name: 'Deadpool',
      description: 'Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor. With help from mutant allies Colossus and Negasonic Teenage Warhead (Brianna Hildebrand), Deadpool uses his new skills to hunt down the man who nearly destroyed his life.',
      image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcR-fLY3Z9Vn28UB-A3X_w0vjmkHcXG89HWwul5w6-sg3IonPXA_',
      genre: 'Action',
      year: '2016'
    },
    {
      name: 'Rogue One: A Star Wars Story',
      description: 'Former scientist Galen Erso lives on a farm with his wife and young daughter Jyn. His peaceful existence comes crashing down when the evil Orson Krennic takes him away from his beloved family. Many years later, Galen is now the Empire\'s lead engineer for the most powerful weapon in the galaxy, the Death Star. Knowing that her father holds the key to its destruction, a vengeful Jyn joins forces with a spy and other resistance fighters to steal the space station\'s plans for the Rebel Alliance.',
      image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQ0S5JQhVplHbw7O6nt7Q0r23Bssl9UNzC-z3zy1r45_eLUB43l',
      genre: 'Action',
      year: '2016'
    },
    {
      name: 'Jackie',
      description: 'After her husband\'s assassination, Jackie Kennedy\'s (Natalie Portman) world is completely shattered. Traumatized and reeling with grief, over the course of the next week she must confront the unimaginable: consoling their two young children, vacating the home she painstakingly restored, and planning her husband\'s funeral. Jackie quickly realizes that the next seven days will determine how history will define her husband\'s legacy - and how she herself will be remembered.',
      image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcTliHR9L9mzyggTgWg_5DUvFnA5PcBnypAxfXiSJK6MNQKivd6L',
      genre: 'Drama',
      year: '2016'
    },
    {
      name: 'Moana',
      description: 'The epic journey continues for "Moana" fans as Walt Disney Animation Studios introduces an all-new sing-along version of the hit, critically-lauded comedy-adventure "Moana." From Walt Disney Animation Studios comes "Moana," a sweeping, CG-animated adventure about a spirited teenager who sails out on a daring mission to prove herself a master wayfinder and fulfill her ancestors\' unfinished quest. During her journey, Moana meets the once-mighty demi-god Maui, and together, they traverse the open ocean on an action-packed voyage, encountering enormous fiery creatures and impossible odds.',
      image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTJOaSVrzlgewVqmUgUz4W5ty2KUeHH6s-aYSIr_Qw8v2EBrtCS',
      genre: 'Fantasy | Adventure',
      year: '2016'
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
