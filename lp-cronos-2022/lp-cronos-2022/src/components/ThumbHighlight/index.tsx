import Image from "../Image";
import styles from "./styles.module.scss";

interface HighlightProps {
  slug: string;
  title: string;
  description: string;
  label: string;
  thumb: string;
  image: string;
  link: string;
}

const ThumbHighlight = (props: {
  data: HighlightProps;
  active: boolean;
  onClick: () => void;
}) => {
  const { data, active, onClick } = props;

  return (
    <>
      {data && data.thumb && (
        <div
          className={`${styles.container} ${active && styles.active}`}
          onClick={onClick}
        >
          <div className={styles.content}>
            <p dangerouslySetInnerHTML={{ __html: data.label }} />
            <Image src={data.thumb} alt={data.label} />
          </div>
        </div>
      )}
    </>
  );
};

export default ThumbHighlight;
