// Researched fetch api, promises, asynchoronous code
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

// Requesting a random joke from the following link
fetch("https://api.chucknorris.io/jokes/random")
    
    // Promise successfully resolved, we convert the returned text to an object we can make use of.
    .then(response => response.json())
    
    .then(result => {
        
        // Accessing the object and locating the joke inside. Saved into a new variable for reference later. 
        let newJoke = result.value;

        // Inserting our joke into our "p" element to be displayed in our browser
        let addJokeToElement = document.querySelector("p");
        addJokeToElement.innerHTML = newJoke;
      
    }),
    
    // An error is thrown to the console if the promise doesn't resolve successfully.
    error => {
        console.log(error);
    }

/*
    Thinking
        1. This website displays a random joke everytime the page is refreshed.
*/