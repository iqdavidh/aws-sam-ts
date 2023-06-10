import {v4 as uuidv4} from 'uuid';

export const uidFactory = (): string => {
  return uuidv4();
}

