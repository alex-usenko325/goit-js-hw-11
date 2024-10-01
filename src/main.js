import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let page = 1;
let query = '';

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = event.currentTarget.elements.query.value.trim();

  gallery.innerHTML = '';
  page = 1;
  loader.style.display = 'block';

  try {
    const data = await fetchImages(query, page);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, no images found for your search query. Please try again!',
        position: 'topRight',
        class: 'custom-iziToast-error',
      });
      return;
    }

    renderImages(data.hits);
    lightbox.refresh();
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
      class: 'custom-iziToast-error',
    });
  }
});
