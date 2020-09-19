import './design/index.scss';
import { showMessage, openModal } from './lib';

document.querySelector('#show-modal').addEventListener('click', async () => {
  modal();
});

async function modal() {
  const title = 'Baking cookies';
  console.clear();
  console.group(title);

  openModal().then((response: string) => {
    const msg =
      response === 'yes'
        ? `Yay! This is fun! 😄`
        : `Aw, that is sad. Let's try harder to have fun 😞`;

    showMessage(msg, 'Response from Modal');
  });

  console.groupEnd();
}
