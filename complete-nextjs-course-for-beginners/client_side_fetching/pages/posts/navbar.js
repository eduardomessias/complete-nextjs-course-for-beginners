import styles from "../../styles/navbar.module.css"

const NavBar = () =>
    <div className={styles.container}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>


export default NavBar