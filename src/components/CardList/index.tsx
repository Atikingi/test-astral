import Card from '../Card';
import { CardProps } from '../../store/types/types';
import styles from './style.module.css';

type Props = {
  cards: CardProps[];
};

const CardList = ({ cards }: Props) => {
  return (
    <section className={styles.list}>
      {cards.map(({ id, word, transcription, example }) => (
        <Card
          key={id}
          word_en={word.en}
          word_ru={word.ru}
          transcription={transcription}
          example={example}
        />
      ))}
    </section>
  );
};

export default CardList;
