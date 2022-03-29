import classes from './UserDisplay.module.css'

export default function UserDisplay(props){
    return (
        <ul className={classes.ul}>
            {
            props.users.map(user=>(
                <li key={user.id} className={classes.li}>
                    <h1>{user.userName} {user.age} years old</h1>
                </li>)
               
           )}
        </ul>
    )
}