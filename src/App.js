import './App.css';
import { useState } from 'react';
import AddUserRefs from './components/AddUser/AddUserRefs';
import UserDisplay from './components/UserList/UserDisplay'
import styles from './components/UserList/UserDisplay.module.css'

function App(props) {
const [userList, setUserList] = useState([]);

const onAddUserSuccessHandler = (uName,uAge)=>{
  setUserList(prevUserList=>{
    console.log(userList)
    return [{userName:uName, age:uAge, id:Math.random().toLocaleString()}, ...prevUserList]
    
  })
}

  return (
    <div className="App">
      <AddUserRefs onChange={onAddUserSuccessHandler}/>
      <UserDisplay users={userList}  className={styles.users}/>
    </div>
  );
}

export default App;
