export const setupCardEffects = (cards: NodeListOf<HTMLElement>): void => {
  cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.classList.add('hover');
    });
    card.addEventListener('mouseout', () => {
      card.classList.remove('hover');
    });
  });
};
