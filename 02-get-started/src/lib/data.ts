import axios from 'axios';

import { User } from './interfaces';

export const getUserAsync = async function(email: string) {
  try {
    const response = await axios.get(`api/heroes?email=${email.toLowerCase()}`);
    const { data } = response;
    const hero: User = data[0];
    return hero;
  } catch (error) {
    console.error(`Developer Error: Async Data Error: ${error.message}`);
    throw new Error(`Oh no! We're unable to fetch the User`);
  }
};
