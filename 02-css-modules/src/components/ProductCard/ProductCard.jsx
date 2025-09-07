
import styles from './ProductCard.module.css';
import Button from '../Button/Button.jsx';

export default function ProductCard({ product, onAddToCart }) {
  const { title, price, image, tag, rating } = product;

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={image} alt={title} className={styles.img} />
      </div>

      <div className={styles.meta}>
        {tag && (
          <span className={`${styles.tag} ${styles[tag.toLowerCase()]}`}>
            {tag}
          </span>
        )}
      </div>

      <h3 className={styles.title}>{title}</h3>
      
      <div className={styles.priceRatingContainer}>
        <span className={styles.price}>R${price.toFixed(2)}</span>
        <span className={styles.rating}>⭐ {rating}</span>
      </div>

      <div className={styles.cardFooter}>
        
        <Button label="Adicionar" onClick={onAddToCart} variant="btn" />

        
        <Button 
          label="Ver detalhes" 
          onClick={() => console.log("Ver detalhes:", title)} 
          variant="outline" 
        />
      </div>
    </div>
  );
}
