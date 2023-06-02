// https://api.thecatapi.com/v1/images/search
const BASE_URL = 'https://api.thecatapi.com';
const API_KEY =
  'api_key=live_Fx8aWtobi7nw45bvdMbnYxmBD1D3nvFGVPaXAj6F3RhDDbZnW7ML1sHaD6SV2LQQ';
export function fetchBreeds(breedID) {
  return fetch(`${BASE_URL}/v1/breeds/${breedID}?${API_KEY}`)
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













// const apiKey =
//   'live_9i6HzzZFNFA1oaYRze81AbtKlBywv3OJ6502fJjo0pAUtFOdj61V5PlPH5ga6JCl';

// export function fetchBreeds() {
//   return fetch('https://api.thecatapi.com/v1/breeds', {
//     headers: {
//       'x-api-key': apiKey,
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch breeds');
//     }
//     return response.json();
//   });
// }

// export function fetchCatByBreed(breedId) {
//   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
//   return fetch(url, {
//     headers: {
//       'x-api-key': apiKey,
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch cat by breed');
//     }
//     return response.json().then(data => {
//       if (data.length > 0) {
//         return {
//           name: data[0].breeds[0].name,
//           description: data[0].breeds[0].description,
//           temperament: data[0].breeds[0].temperament,
//           url: data[0].url,
//         };
//       } else {
//         throw new Error('No cat found for the selected breed');
//       }
//     });
//   });
// }












// const apiKey =
//   'live_9i6HzzZFNFA1oaYRze81AbtKlBywv3OJ6502fJjo0pAUtFOdj61V5PlPH5ga6JCl';
// // Функція для виконання запиту на отримання списку порід
// export function fetchBreeds() {
//   return fetch('https://api.thecatapi.com/v1/breeds', {
//     headers: {
//       'x-api-key': apiKey,
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch breeds');
//     }
//     return response.json();
//   });
// }
// // Функція для виконання запиту на отримання інформації про кота за породою
// export function fetchCatByBreed(breedId) {
//   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
//   return fetch(url, {
//     headers: {
//       'x-api-key': apiKey,
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch cat by breed');
//     }
//     return response.json().then(data => {
//       if (data.length > 0) {
//         return {
//           name: data[0].breeds[0].name,
//           description: data[0].breeds[0].description,
//           temperament: data[0].breeds[0].temperament,
//           url: data[0].url,
//         };
//       } else {
//         throw new Error('No cat found for the selected breed');
//       }
//     });
//   });
// }
