import styles from './Home.module.scss';

const Home = () => {
    return (
        <main className={styles.container}>
            <div className={styles.loginButtonWrap}>
                <button className={styles.loginButton}>Login</button>
            </div>
            <div className={styles.contentWrap}>
                <div className={styles.box}>Try Firestore</div>
                <div className={styles.box}>Try Storage</div>
            </div>
        </main>
    );
};

export default Home;
