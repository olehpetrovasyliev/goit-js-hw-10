// https://api.thecatapi.com/v1/images/search
const BASE_URL = 'https://api.thecatapi.com';
const API_KEY =
  'api_key=live_Fx8aWtobi7nw45bvdMbnYxmBD1D3nvFGVPaXAj6F3RhDDbZnW7ML1sHaD6SV2LQQ';

// }
export function fetchBreeds() {
  return fetch(`${BASE_URL}/v1/breeds?${API_KEY}`)
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

// export function fetchCatByBreed(breedId) {
//   return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }
