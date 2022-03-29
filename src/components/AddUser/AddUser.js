import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid inputs",
        message: "Please enter valid username and age",
      });
      return;
    }
    if(age < 1 ){
      setError({
        title: "Invalid age",
        message: "Age should be > 1",
      });
      return;
    }
    props.onChange(userName, age);
    setUserName("");
    setAge("");
  };

  const onUserNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onConfirmHandler = (event) => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={onConfirmHandler}></ErrorModal>
      )}{" "}
      <Card>
        <form onSubmit={onSubmitHandler} className={styles.input}>
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={onUserNameChangeHandler}
          ></input>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={onAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
