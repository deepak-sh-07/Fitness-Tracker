import logo from '../assets/logo.svg';
import styles from './Navbar.module.css'; 

function Navbar() {
    const username = "Deepak";
    const day = 45;

    return (
        <div className={styles.header}>
            <div className={styles.welcome}>Welcome Back, {username}</div>
            <img className={styles.logo} src={logo} alt="Logo" />
            <div className={styles.day}>Day {day}</div>
        </div>
    );
}

export default Navbar;
