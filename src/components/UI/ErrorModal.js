import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

export default function errorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card className={classes.modal}>
          <header className="header">
            <h2 className={classes.h2}>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button type="button" onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>{" "}
      </div>
    </div>
  );
}
