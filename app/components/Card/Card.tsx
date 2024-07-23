'use client';

import { useState } from 'react';
import cx from 'classnames';

import styles from './Card.module.scss';

interface CardProps {
    text: string;
    isFlipped: boolean;
    id: number | string;
}

const Card = ({ text }: CardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(true);
    };

    return (
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
            <div className={cx(styles.card__inner, styles.flipped__inner)}>
                <div className={styles.card__inner__front}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/card-1.png" alt="Image" />
                </div>
                <div className={styles.card__inner__back}>
                    <p>What is the capital of France?</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
