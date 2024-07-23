import styles from './page.module.scss';
import Card from './components/Card/Card';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Game Cards</h1>
            <div className={styles.bodyCards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    );
}
