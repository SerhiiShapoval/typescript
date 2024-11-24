import { NullableHTMLButtonElement, NullableHTMLElement } from '../types/domTypes';

export const setupModal = (
  openButton: NullableHTMLButtonElement,
  closeButton: NullableHTMLElement,
  modal: NullableHTMLElement
): void => {
  if (openButton && modal) {
    openButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }

  if (closeButton && modal) {
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    window.addEventListener('click', (event: MouseEvent) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
};
