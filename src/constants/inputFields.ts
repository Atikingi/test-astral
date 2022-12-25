import { InputProps } from '../types/inputs';

export const inputFields: InputProps[] = [
  {
    type: 'text',
    name: 'firstname',
    displayName: 'Firstname'
  },
  {
    type: 'text',
    name: 'lastname',
    displayName: 'Lastname'
  },
  {
    type: 'radio',
    name: 'gender',
    displayName: 'Gender',
    radioValues: ['Men', 'Women'],
    group: true
  },
  {
    type: 'text',
    name: 'nickname',
    displayName: 'Nickname'
  },
  {
    type: 'text',
    name: 'cityOfBirth',
    displayName: 'City of birth'
  },
  {
    type: 'text',
    name: 'currentCity',
    displayName: 'City where you live'
  },
  {
    type: 'text',
    name: 'hobby',
    displayName: 'Your hobby'
  },
  {
    type: 'text',
    name: 'levelLanguage',
    displayName: 'Your level of English language'
  },
  {
    type: 'checkbox',
    name: 'interests',
    displayName: 'Your interests',
    checkboxValues: ['Auto', 'IT', 'Science'],
    group: true
  },
  {
    type: 'checkbox',
    name: 'subscribe',
    displayName: 'Subscribe to news'
  },
  {
    type: 'email',
    name: 'email',
    displayName: 'Email for news'
  },
  {
    type: 'text',
    name: 'reason',
    displayName: 'Why you dont subscribe?'
  },
  {
    type: 'date',
    name: 'dateOfStart',
    displayName: 'Date you started learning English'
  },
  {
    type: 'checkbox',
    name: 'driverLicenseCheck',
    displayName: 'I have a driver license'
  },
  {
    type: 'select',
    name: 'driverLicense',
    displayName: 'Driver license',
    options: ['Choose driver license', 'A', 'B', 'C']
  },
  {
    type: 'number',
    name: 'height',
    displayName: 'Your height'
  },
  {
    type: 'text',
    name: 'zodiac',
    displayName: 'Your zodiac'
  },
  {
    type: 'text',
    name: 'films',
    displayName: 'Your favorite films'
  },
  {
    type: 'text',
    name: 'book',
    displayName: 'Favorite book'
  },
  {
    type: 'select',
    name: 'smoke',
    displayName: 'Did you smoke',
    options: ['Did you smoke?', 'No', 'Yes']
  }
];
