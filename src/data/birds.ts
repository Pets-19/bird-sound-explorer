import { Bird } from '../types';

export const birds: Bird[] = [
  {
    id: 'american-robin',
    name: 'American Robin',
    scientificName: 'Turdus migratorius',
    description: 'A familiar backyard bird with a warm orange breast and cheerful song that heralds spring across North America.',
    imageUrl: 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    regions: ['North America'],
    soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC143073-American%20Robin%20song%205-5-09.mp3',
    babySoundUrl: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC559642-American%20Robin%20begging%20call%204-20-20.mp3',
    funFacts: [
      'Robins can produce three successful broods in one year',
      'They can see worms underground by detecting their movement',
      'Robins\' eggs are sky blue, a color known as "robin\'s egg blue"',
      'They can eat up to 14 feet of earthworms in a day'
    ],
    migrationPaths: [
      {
        season: 'Winter',
        coordinates: [[-80, 25], [-100, 30], [-115, 32]],
        soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC143073-American%20Robin%20song%205-5-09.mp3'
      },
      {
        season: 'Summer',
        coordinates: [[-75, 45], [-100, 50], [-120, 48]],
        soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC143073-American%20Robin%20song%205-5-09.mp3'
      }
    ],
    isMigratory: true
  },
  {
    id: 'bald-eagle',
    name: 'Bald Eagle',
    scientificName: 'Haliaeetus leucocephalus',
    description: 'The national bird and symbol of the United States, known for its white head and impressive wingspan.',
    imageUrl: 'https://images.pexels.com/photos/1834142/pexels-photo-1834142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    regions: ['North America'],
    soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQFTAOZ/XC518308-200209_0915_BD%20Bald%20Eagle%20A%20Singing.mp3',
    babySoundUrl: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC626114-Bald%20Eagle%20nestling%20calls%206-7-18.mp3',
    funFacts: [
      'Bald eagles aren\'t actually bald - their name comes from an old English word meaning "white-headed"',
      'They can spot prey up to a mile away',
      'Their nests can weigh up to 2,000 pounds and measure 8 feet across',
      'They have a grip 10 times stronger than an adult human hand'
    ],
    isMigratory: false
  },
  {
    id: 'barn-owl',
    name: 'Barn Owl',
    scientificName: 'Tyto alba',
    description: 'Ghostly pale and strictly nocturnal, Barn Owls are silent predators of the night world.',
    imageUrl: 'https://images.pexels.com/photos/106144/pexels-photo-106144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    regions: ['Worldwide except Antarctica'],
    soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC143928-Barn%20Owl%20screech%20threecalls%202-18-09.mp3',
    babySoundUrl: 'https://www.xeno-canto.org/sounds/uploaded/SIKZXBBNRJ/XC609432-Tyto%20alba_08_May_2021_20_01_02_nestling_food%20begging%20calls_Grange%20Farm_52.24708%20N%200.44493%20E.mp3',
    funFacts: [
      'Their heart-shaped face acts as a satellite dish to capture sound',
      'They can eat their own body weight in food every night',
      'They can fly silently due to special feather adaptations',
      'They have asymmetrical ears - one higher than the other - to better pinpoint sound'
    ],
    isMigratory: false
  },
  {
    id: 'california-condor',
    name: 'California Condor',
    scientificName: 'Gymnogyps californianus',
    description: 'One of the world\'s rarest birds and the largest flying land bird in North America, rescued from extinction through captive breeding.',
    imageUrl: 'https://images.pexels.com/photos/11734299/pexels-photo-11734299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    regions: ['Southwestern United States', 'Mexico'],
    soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC617727-California%20Condor%20call%2011-26-21.mp3',
    endangeredStatus: 'Critically Endangered',
    funFacts: [
      'Condors can live up to 60 years',
      'They can soar for hours without flapping their wings',
      'By 1987, all remaining wild condors were brought into captivity to save the species',
      'They have a 9.5-foot wingspan'
    ],
    isMigratory: false
  },
  {
    id: 'emperor-penguin',
    name: 'Emperor Penguin',
    scientificName: 'Aptenodytes forsteri',
    description: 'The tallest and heaviest of all living penguin species, endemic to Antarctica and famed for their epic breeding migrations.',
    imageUrl: 'https://images.pexels.com/photos/4793237/pexels-photo-4793237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    regions: ['Antarctica'],
    soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC204115-130111-08_MVI_4188Emperor.mp3',
    babySoundUrl: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC204107-090111-07_MVI_3708Emp_chick%20calls.mp3',
    endangeredStatus: 'Near Threatened',
    funFacts: [
      'Male emperors incubate eggs for 2 months during the Antarctic winter',
      'They can dive deeper than 500 meters and hold their breath for up to 20 minutes',
      'Chicks have special down that traps air for extra insulation',
      'They huddle together to stay warm, rotating positions so all get turns in warmer inner positions'
    ],
    isMigratory: true,
    migrationPaths: [
      {
        season: 'Winter',
        coordinates: [[0, -70], [45, -70], [90, -70], [135, -70], [180, -70], [-135, -70], [-90, -70], [-45, -70]],
        soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC204115-130111-08_MVI_4188Emperor.mp3'
      },
      {
        season: 'Summer',
        coordinates: [[0, -65], [45, -65], [90, -65], [135, -65], [180, -65], [-135, -65], [-90, -65], [-45, -65]],
        soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC204115-130111-08_MVI_4188Emperor.mp3'
      }
    ]
  }
];

export const regions: { [key: string]: {name: string, center: [number, number], zoom: number} } = {
  'North America': {
    name: 'North America',
    center: [-95.7129, 37.0902],
    zoom: 3
  },
  'South America': {
    name: 'South America',
    center: [-58.3816, -23.4162],
    zoom: 3
  },
  'Europe': {
    name: 'Europe',
    center: [10.4515, 51.1657],
    zoom: 3
  },
  'Africa': {
    name: 'Africa',
    center: [19.4900, 9.1021],
    zoom: 3
  },
  'Asia': {
    name: 'Asia',
    center: [103.8405, 36.5748],
    zoom: 3
  },
  'Australia': {
    name: 'Australia',
    center: [133.7751, -25.2744],
    zoom: 3
  },
  'Antarctica': {
    name: 'Antarctica',
    center: [0, -90],
    zoom: 2
  }
};

export const extinctBirds = [
  {
    id: 'dodo',
    name: 'Dodo',
    scientificName: 'Raphus cucullatus',
    description: 'A flightless bird endemic to Mauritius, extinct by 1662 due to human activities.',
    imageUrl: 'https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    regions: ['Mauritius'],
    soundUrl: '', // No sound available
    endangeredStatus: 'Extinct',
    funFacts: [
      'The dodo had no natural predators before humans arrived on Mauritius',
      'They laid just one egg at a time, making population recovery difficult',
      'They went extinct less than 100 years after humans discovered them',
      'Their appearance is known only through old drawings and written accounts'
    ],
    isMigratory: false
  },
  {
    id: 'passenger-pigeon',
    name: 'Passenger Pigeon',
    scientificName: 'Ectopistes migratorius',
    description: 'Once the most abundant bird in North America, hunted to extinction by 1914.',
    imageUrl: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    regions: ['North America'],
    soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/NNFNXIFIPM/passenger.mp3',
    endangeredStatus: 'Extinct',
    funFacts: [
      'They once numbered in the billions - perhaps 3-5 billion birds',
      'A single flock could take days to pass overhead',
      'The last passenger pigeon, Martha, died at the Cincinnati Zoo in 1914',
      'Their population collapsed from billions to none in just 50 years'
    ],
    isMigratory: true,
    migrationPaths: [
      {
        season: 'Spring',
        coordinates: [[-85, 32], [-82, 40], [-80, 43]],
        soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/NNFNXIFIPM/passenger.mp3'
      },
      {
        season: 'Fall',
        coordinates: [[-80, 43], [-82, 40], [-85, 32]],
        soundUrl: 'https://www.xeno-canto.org/sounds/uploaded/NNFNXIFIPM/passenger.mp3'
      }
    ]
  }
];