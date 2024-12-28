import styles from './PhoneCard.module.css';

const Card = ({ id, img, name, price, items, removeItem, onIncrease, onDecrease }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.image}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>${price}</p>
                <button onClick={() => removeItem(id)}>Remove</button>
            </div>
            <div className={styles.counter}>
                <span onClick={() => onIncrease(id)}>+</span>
                <span>{items}</span>
                <span onClick={() => onDecrease(id)}>-</span>
            </div>
        </div>
    );
}

export default Card;
