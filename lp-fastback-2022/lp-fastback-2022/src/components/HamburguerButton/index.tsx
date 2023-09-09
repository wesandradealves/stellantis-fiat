import { useMobxStores } from "@/store";
import FastbackStore from "@store/FastbackStore";
import scssStyles from "@/utils/scssStyles";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import styles from "./HamburguerButton.module.scss";

const HamburguerButton: FC<{ handleClick: () => void; title: string }> =
  observer(({ handleClick, title }) => {
    const store: FastbackStore = useMobxStores();
    return (
      <div className={styles.container}>
        <button
          title={title}
          className={scssStyles([
            styles.button,
            store.menuOpen ? styles.active : "",
          ])}
          onClick={() => {
            handleClick();
          }}
        >
          <svg
            className={styles.burger}
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              className={scssStyles([styles.line, styles.line1])}
              d="M 50,35 H 30 M 50,35 H 70 V 38 H 30 V 41 H 70"
            />
            <path
              className={scssStyles([styles.line, styles.line2])}
              d="M 50,50 H 30 V 47 H 70 V 44 H 30"
            />
            <path
              className={scssStyles([styles.line, styles.line3])}
              d="M 50,50 H 70 V 53 H 30 V 56 H 70"
            />
            <path
              className={scssStyles([styles.line, styles.line4])}
              d="M 50,65 H 70 M 50,65 H 30 V 62 H 70 V 59 H 30"
            />
          </svg>
          <svg
            className={styles.x}
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className={styles.line} d="M 34,32 L 66,68" />
            <path className={styles.line} d="M 66,32 L 34,68" />
          </svg>
        </button>
      </div>
    );
  });

export default HamburguerButton;
