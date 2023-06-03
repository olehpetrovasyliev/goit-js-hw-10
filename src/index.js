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
    fetchCatByBreed(refs.select.value).then(data => {
      let cat = data[0].breeds[0];
      refs.catWrapper.innerHTML = `
          <div class='wrapper'>
            <img width=500 src="${data[0].url}" alt="${cat.name} loading="lazy">
            <h2>${cat.name}</h2>
            <p class="cat-description">${cat.description}</p>
            <p class="cat-description">Temperament: ${cat.temperament}</p>
          </div>
        `;
      refs.loader.classList.add('is-hidden');
    });
  })
  .catch(err => {
    Notiflix.Notify.failure(err);
  });

const onSelect = evt => {
  refs.loader.classList.remove('is-hidden');
  refs.catWrapper.innerHTML = '';

  setTimeout(() => {
    fetchCatByBreed(refs.select.value)
      .then(response => {
        let cat = response[0].breeds[0];
        console.log(response[0].breeds[0]);
        refs.catWrapper.innerHTML = `
                <img width=500 src="${response[0].url}" alt="${cat.name} loading ="lazy">
                <h2>${cat.name}</h2>
                <p class="cat-description">${cat.description}</p>
                <p class="cat-description">Temperament: ${cat.temperament}</p>
        `;
        refs.loader.classList.add('is-hidden');
      })
      .catch(err => {
        Notiflix.Notify.failure(err);
      });
  }, 500);
};

refs.select.addEventListener('change', onSelect);
