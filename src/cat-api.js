// // // https://api.thecatapi.com/v1/images/search
const BASE_URL = 'https://api.thecatapi.com';
const API_KEY =
  'live_Fx8aWtobi7nw45bvdMbnYxmBD1D3nvFGVPaXAj6F3RhDDbZnW7ML1sHaD6SV2LQQ';

// }
export function fetchBreeds() {
  return fetch(`${BASE_URL}/v1/breeds?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(err => {
      {
        Notiflix.Notify.failure(err);
        refs.err.classList.toggle('is-hidden');
      }
    });
}

export const fetchCatByBreed = breedId => {
  return fetch(
    `${BASE_URL}/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
