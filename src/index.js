import { fetchBreeds, changeCat } from './cat-api';
const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  err: document.querySelector('.error'),
  catWrapper: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(arr =>
    refs.select.insertAdjacentHTML(
      'beforeend',
      arr.map(el => `<option value = ${el.id}>${el.name}</option>`).join('')
    )
  )
  .catch(error => {
    console.log(error);
  });

function showCatInfo(cat) {
  refs.err.classList.toggle('.is-hidden');
  refs.catWrapper.innerHTML = `<img src="${cat.url}" alt=${cat.name}><h1>Name: ${cat.name}</h1><p>Description:${cat.description}</p> <p>Temperament: ${cat.temperament}</p>`;
}

refs.select.addEventListener('change', showCatInfo);
