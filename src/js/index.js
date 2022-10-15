import { dadJoke } from './joker.js';

const jokeContainer = document.querySelector('blockquote');
const jokeButton = document.querySelector('button.dad-joke');
const jokeButtonText = jokeButton.querySelector('.joke-text');
const originalText = jokeButtonText.textContent;

jokeButton.addEventListener('click', async function () {
  jokeButtonText.textContent = 'Loading...';
  jokeButton.disabled = true;
  jokeButton.classList.add('loading');

  const joke = await dadJoke();

  jokeButton.disabled = false;
  jokeButton.classList.remove('loading');
  jokeButtonText.textContent = originalText;
  jokeContainer.textContent = joke;
});
