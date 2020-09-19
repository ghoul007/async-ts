import { User } from './lib/interfaces';
import { getUserAsync } from './lib/data';
import './design/index.scss';
import { showMessage, openModal } from './lib';


const searchEmailElement  = document.querySelector('#search-email') as HTMLInputElement;
document.querySelector('#show-modal').addEventListener('click', async () => {
  modal();
});

document.querySelector('#render-user').addEventListener('click', render );

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



async function render() {
  showMessage();
  let hero: User;
  try {
    hero = await getUserAsync(searchEmailElement.value);
  } catch (error) {
    console.log(error);
    showMessage(error);
  } finally {
    showMessage(hero.email);
  }
}