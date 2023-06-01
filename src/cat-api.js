// https://api.thecatapi.com/v1/images/search

export function fetchBreeds(breed) {
  return fetch(`https://api.thecatapi.com/v1/images/${breed}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
