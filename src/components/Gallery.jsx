import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery({ images = [] }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className={styles.gallery}>
      <img src={images[current]} alt="" className={styles.main} />
      <div className={styles.thumbs}>
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className={index === current ? styles.active : undefined}
            onClick={() => setCurrent(index)}
          >
            <img src={src} alt={`Imagem ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
