import { UserItem } from '@my-chat-app/shared';
import { loadUserByUsername, saveNewUser } from '../models/user-repository';

const saveUser = async (userItem: UserItem): Promise<void> => {

  const usernameNotAvailable = await loadUserByUsername(userItem.username);

  if (usernameNotAvailable) {
    throw new Error('Username is not available');
  }

  await saveNewUser(userItem);
};

export { saveUser };
