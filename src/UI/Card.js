import styles from "./Card.module.css";

const Card = (props) => {
  const paddingStyle = props.nopadding ? `${styles["no-padding"]}` : "";
  const additionalClass = props.className ? props.className : "";
  const classes = `${styles.card} ${additionalClass} ${paddingStyle}`;

  const Tag = props.as ? props.as : "div";

  return <Tag className={classes}>{props.children}</Tag>;
};

export default Card;
