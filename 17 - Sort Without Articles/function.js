const bands = ['Blossoms', 'Bloc Party', 'Pink Floyd', 'The Cure', 'The Beatles',
    'Dire Straits', 'Fleetwood Mac', 'Arcade Fire', 'Blur', 'The Eagles', 'A Tribe Called Quest',
    'Eurythmics', 'The Beastie Boys', 'Maximo Park'
];

// remove a, the & an from bands array
const strip = bandname => bandname.replace(/^(a |the |an)/i, '').trim();
// using new sorted bands, sort alphabetically without mutating original data.
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
console.log(sortedBands);
// sort bands into a list 
document.querySelector('#bands').innerHTML =
    sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

