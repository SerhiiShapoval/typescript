import { Post, NullableHTMLButtonElement, NullableHTMLElement } from '../types/domTypes';

export const setupDataLoader = (
  loadButton: NullableHTMLButtonElement,
  container: NullableHTMLElement
): void => {
  if (loadButton && container) {
    loadButton.addEventListener('click', () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data: Post[]) => {
          container.innerHTML = '<h3>Fetched Posts</h3>';
          data.forEach((post) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
              <h4>${post.title}</h4>
              <p>${post.body}</p>
            `;
            container.appendChild(postElement);
          });
        })
        .catch((error: Error) => {
          console.error('Error fetching data:', error);
          container.innerHTML = 'Failed to load data';
        });
    });
  }
};
