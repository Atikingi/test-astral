export const getRandomPhrase = () => {
  const phrases = ['Word of the day', 'Popular word', 'Interesting word'];
  const randomNumber = Math.floor(Math.random() * phrases.length);

  return phrases[randomNumber];
};
