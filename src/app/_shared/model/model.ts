export interface Model {
  word: string;
  definitions: Definition[];
}

export interface Definition {
  definition: string;
  partOfSpeech: string;
}

export interface User {
  textEditor: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}
