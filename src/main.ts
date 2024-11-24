import { setupModal } from './modules/modal';
import { setupDataLoader } from './modules/dataLoader';
import { setupCardEffects } from './modules/cardEffects';

// Елементи DOM
const openModalButton = document.getElementById('openModal') as HTMLButtonElement | null;
const closeModalButton = document.getElementById('closeModal') as HTMLElement | null;
const modal = document.getElementById('modal') as HTMLElement | null;
const loadDataButton = document.getElementById('loadData') as HTMLButtonElement | null;
const dataContainer = document.getElementById('dataContainer') as HTMLElement | null;
const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

// Ініціалізація модулів
setupModal(openModalButton, closeModalButton, modal);
setupDataLoader(loadDataButton, dataContainer);
setupCardEffects(cards);
