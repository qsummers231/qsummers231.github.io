function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(response => response.json())
    .then(data => {
      const joke = data[0];
      document.getElementById('jokeContainer').innerHTML =
        `<p><strong>${joke.setup}</strong><br>${joke.punchline}</p>`;
    })
    .catch(error => {
      document.getElementById('jokeContainer').innerHTML = 'Oops! Could not load a joke.';
      console.error('Error fetching joke:', error);
    });
}
