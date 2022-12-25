import { useState } from 'react';
import styles from './style.module.css';
import { getRandomPhrase } from '../../lib/phraseRandomizer';

type Props = {
  word_en: string;
  word_ru: string;
  transcription: string;
  example: string;
};

const Card = ({ word_en, word_ru, transcription, example }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipHandler = () => {
    setIsFlipped(!isFlipped);
  };

  const flippedCardClass = isFlipped ? styles.flipped : '';

  const phrase = getRandomPhrase();

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${flippedCardClass}`}>
        <div className={`${styles.cardFrontSide} ${styles.cardFace}`}>
          <h6 className={styles.title}>{phrase}</h6>
          <h3 className={styles.word}>{word_en}</h3>
          <p className={styles.transcription}>{transcription}</p>
          <p className={styles.example}>{example}</p>
          <button className={styles.flipButton} onClick={flipHandler}>
            Learn more
          </button>
        </div>
        <div className={`${styles.cardBackside} ${styles.cardFace}`}>
          <p className={styles.translate}>Translate:</p>
          <p className={styles.word}>{word_ru}</p>
          <button className={styles.flipButton} onClick={flipHandler}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
