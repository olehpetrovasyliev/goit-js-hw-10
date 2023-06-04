import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  err: document.querySelector('.error'),
  catWrapper: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(arr => {
    const catListName = arr
      .map(el => `<option value="${el.id}">${el.name}</option>`)
      .join('');
    refs.select.innerHTML = catListName;
    setTimeout(() => {
      fetchCatByBreed(refs.select.value).then(response => {
        let cat = response[0].breeds[0];
        console.log(response[0].breeds[0]);
        refs.catWrapper.innerHTML = `
                <img width=500 src="${response[0].url}" alt="${cat.name} loading ="lazy">
                <h2>${cat.name}</h2>
                <p class="cat-description">${cat.description}</p>
                <p class="cat-description">Temperament: ${cat.temperament}</p>
        `;
        refs.loader.classList.add('is-hidden');
      });
    }, 500);
  })
  .catch(err => {
    Notiflix.Notify.failure(err);
    refs.err.classList.remove('is-hidden');
  });

const onSelect = evt => {
  refs.loader.classList.remove('is-hidden');
  refs.catWrapper.innerHTML = '';
  if (refs.err.classList.contains('is-hidden')) {
    refs.err.classList.add('is-hidden');
  }
  setTimeout(() => {
    fetchCatByBreed(refs.select.value)
      .then(response => {
        let cat = response[0].breeds[0];
        console.log(response[0].breeds[0]);
        refs.catWrapper.innerHTML = `
                <img width = 500px src="${response[0].url}" alt="${cat.name} loading ="lazy">
                <h2>${cat.name}</h2>
                <p class="cat-description">${cat.description}</p>
                <p class="cat-description">Temperament: ${cat.temperament}</p>
        `;
        refs.loader.classList.add('is-hidden');
      })
      .catch(err => {
        Notiflix.Notify.failure(err);
        refs.err.classList.remove('is-hidden');
      });
  }, 500);
};

refs.select.addEventListener('change', onSelect);
