import styles from "./styles.module.scss";

interface ThumbVersionProps {
  name: string;
  image: string;
  active: boolean;
  onClick: () => void;
}

const ThumbVersion = ({ name, image, active, onClick }: ThumbVersionProps) => {
  return (
    <div
      className={`${styles.container} ${active && styles.active}`}
      onClick={onClick}
    >
      <div className={styles.content}>
        <h4
          className={styles.title}
          dangerouslySetInnerHTML={{
            __html: name,
          }}
        />
      </div>
      <div className={styles.thumb}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.bg} />
    </div>
  );
};

export default ThumbVersion;
