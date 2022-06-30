// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
//creates a new instance of a promise
const promise = new Promise((resolve, reject) => {
	//calls setTimeout and passes a arrow function as the parameter
  setTimeout(() =>{
  	//if the promise is good then show 'success' after 4000 miliSeconds
  	resolve('success')
  }, 4000)
});

// #2) Run the above promise and make it console.log "success"
//calls the promise and then console logs the resolve
promise.then(console.log);

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
//stores the promise.resolve in a variable
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
//if the promise fails then catch it and console log the message
Promise.reject('failed').catch(console.log('Ooops something went wrong'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]
//maps through the urls
Promise.all(urls.map(url =>
//grabs the urls and parses them into a json message
	fetch(url).then(resp => resp.json())
//stores them in the results and logs each index of the urls
)).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
	console.log(results[3])
//if any error pops up this catch will display the message
}).catch(err=> console.log('error', err))
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?