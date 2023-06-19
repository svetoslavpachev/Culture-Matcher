import styles from "./backdrop.module.scss";

export default function Backdrop({ closeModal }) {
  return (
    <div
      className={styles.backdrop}
      onClick={() => {
        closeModal ? closeModal(false) : null;
      }}
    />
  );
}
