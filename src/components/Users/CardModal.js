import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./CardModal.module.css";

const CardModal = ({ errorMessage, setShowAlert }) => {
  const handleCloseModal = () => {
    setShowAlert(false);
  };
  return (
    <div className={styles["modal__layout"]} onClick={handleCloseModal}>
      <Card className={styles["card__modal"]} nopadding>
        <h3>Invalid input</h3>
        <p>{errorMessage}</p>
        <div>
          <Button type="button" onClick={handleCloseModal}>
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CardModal;
