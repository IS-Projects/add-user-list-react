import Button from "./Button";
import Card from "./Card";
import styles from "./CardModal.module.css";

const CardModal = ({ errorMessage, closeModalHandler }) => {
  const stopOnCLickPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={styles["modal__layout"]} onClick={closeModalHandler}>
      <Card
        className={styles["card__modal"]}
        nopadding
        onClick={stopOnCLickPropagation}
      >
        <h3>Invalid input</h3>
        <p>{errorMessage}</p>
        <div>
          <Button type="button" onClick={closeModalHandler}>
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CardModal;
