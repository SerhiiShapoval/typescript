// Типи для елементів DOM
const openModalButton = document.getElementById('openModal') as HTMLButtonElement | null;
const closeModalButton = document.getElementById('closeModal') as HTMLElement | null;
const modal = document.getElementById('modal') as HTMLElement | null;
const loadDataButton = document.getElementById('loadData') as HTMLButtonElement | null;
const dataContainer = document.getElementById('dataContainer') as HTMLElement | null;

// Перевірка на null перед використанням
if (openModalButton && modal) {
  // Відкриття модального вікна
  openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
  });
}

if (closeModalButton && modal) {
  // Закриття модального вікна
  closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Закриття модального вікна при натисканні поза ним
if (modal) {
  window.addEventListener('click', (event: MouseEvent) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Функція для завантаження та відображення даних
const loadData = (): void => {
  if (loadDataButton && dataContainer) {
    loadDataButton.addEventListener('click', () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data: { title: string, body: string }[]) => {
          dataContainer.innerHTML = '<h3>Fetched Posts</h3>';
          data.forEach((post) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
              <h4>${post.title}</h4>
              <p>${post.body}</p>
            `;
            dataContainer.appendChild(postElement);
          });
        })
        .catch((error: Error) => {
          console.error('Error fetching data:', error);
          dataContainer.innerHTML = 'Failed to load data';
        });
    });
  }
};

// Додання інтерактивності до карток (hover ефект)
const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;
cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});

// Запуск функції для завантаження даних
loadData();
