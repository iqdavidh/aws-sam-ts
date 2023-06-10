import {v4 as uuidv4} from 'uuid';

const UIDFactory = (): string => {
  return uuidv4();
}

export = UIDFactory;