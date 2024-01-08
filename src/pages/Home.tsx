import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className={styles.container}>
            <div className={styles.loginButtonWrap}>
                {/* <button className={styles.loginButton}>Login</button> */}
                <Link to={'/login'} className={styles.loginButton}>
                    Login or Register
                </Link>
            </div>
            <div className={styles.contentWrap}>
                {/* <div className={styles.box}>Try Firestore</div>
                <div className={styles.box}>Try Storage</div> */}
                <Link to={'/try-firestore'} className={styles.box}>
                    Try Firestore
                </Link>
                <Link to={'/try-storage'} className={styles.box}>
                    Try Storage
                </Link>
            </div>
        </main>
    );
};

export default Home;
