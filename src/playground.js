const R = require('ramda')

const Artists = (artists) => artists

const Loading = R.always("Loading...");
const Error = R.always("Error.");
const ArtistResponse = R.cond([
  [R.prop('loading'), Loading],
  [R.prop('error'), Error],
  [R.T, R.pipe(R.path(['data', 'artists']), Artists)]
]);

const data = {artists: [
    {id: "123", name: "abc"}, 
    {id: "456", name: "def"}
]};

const bla = (component, prop) => R.pipe(R.path(['data', prop]), component);
console.log(bla(Artists, 'artists')({loading: false,  error: false, data: data}));

console.log(ArtistResponse({loading: true, error: false, data: data}));     
console.log(ArtistResponse({loading: false, error: true, data: data}));     
console.log(ArtistResponse({loading: false,  error: false, data: data}));     


