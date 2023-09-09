import styles from "./styles.module.scss";

interface LinkMenuProps {
  active: boolean;
  onClick: () => void;
  children: JSX.Element | string;
}

const LinkMenu = ({ active, onClick, children }: LinkMenuProps) => {
  return (
    <button
      className={`${styles.link} ${active && styles.active}`}
      onClick={(e) => onClick()}
    >
      {children}
    </button>
  );
};

export default LinkMenu;
