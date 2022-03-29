import { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  
  const [error, setError] = useState();
  const userNameInputRef = useRef();
  const ageInputRef = useRef();


  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (userNameInputRef.current.value.trim().length === 0 || ageInputRef.current.value.trim().length === 0) {
      setError({
        title: "Invalid inputs",
        message: "Please enter valid username and age",
      });
      return;
    }
    if(ageInputRef.current.value < 1 ){
      setError({
        title: "Invalid age",
        message: "Age should be > 1",
      });
      return;
    }
    console.log(userNameInputRef.current.value, ageInputRef.current.value)
    props.onChange(userNameInputRef.current.value, ageInputRef.current.value);
    
  };

  const onConfirmHandler = (event) => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={onConfirmHandler}></ErrorModal>
      )}
      <Card>
        <form onSubmit={onSubmitHandler} className={styles.input}>
          <label>Username</label>
          <input
            type="text" ref={userNameInputRef}
          ></input>
          <label>Age</label>
          <input
            type="number" ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
