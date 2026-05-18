import { useState } from 'react';
import styles from '../styles/category.module.css';

const TABS = [
    { label: 'Action & Adventure', key: 'action', img: '/images/categories/Action___Adventure.webp', desc: 'Dive into heart-pounding adventures and action-packed stories that keep readers on the edge of their seats with every turn of the page.' },
    { label: 'Comics', key: 'comics', img: '/images/categories/comics.webp', desc: 'From bold illustrations to compelling storylines, we produce captivating comic books that connect with readers of all ages through vibrant visuals and creative content.' },
    { label: 'Dictionary', key: 'dict', img: '/images/categories/dictionary.webp', desc: 'Comprehensive, well-researched dictionaries crafted with precision to serve as reliable reference tools for students, professionals, and language enthusiasts.' },
    { label: 'Drama', key: 'drama', img: '/images/categories/drama.webp', desc: 'Emotionally rich and deeply engaging dramatic narratives that explore the complexities of human relationships and the defining moments of life.' },
    { label: 'Health', key: 'health', img: '/images/categories/health.webp', desc: 'Expert-authored health and wellness books that empower readers with knowledge to lead healthier, more balanced, and fulfilling lives.' },
    { label: 'Horror', key: 'horror', img: '/images/categories/horror.webp', desc: 'Spine-chilling horror stories masterfully crafted to unsettle, thrill, and leave a lasting impression long after the final page is turned.' },
    { label: 'Romance', key: 'romance', img: '/images/categories/romance.webp', desc: 'Heartfelt and passionate romance stories that celebrate love in all its forms, captivating readers with memorable characters and emotional depth.' },
    { label: 'Science Fiction', key: 'scifi', img: '/images/categories/science_fiction.webp', desc: 'Imaginative science fiction journeys that push the boundaries of what is possible, exploring futuristic worlds, advanced technology, and the human condition.' },
    { label: 'Travel', key: 'travel', img: '/images/categories/travel.webp', desc: 'Inspiring travel narratives and guides that take readers on breathtaking journeys around the globe, igniting wanderlust and a passion for exploration.' },
] as const;

type TabKey = typeof TABS[number]['key'];

export default function CategoriesSection() {
    const [active, setActive] = useState<TabKey>('comics');
    const current = TABS.find(t => t.key === active)!;

    return (
        <>
            <section className={styles.catSection}>
                <div className={styles.catContainer}>

                    <h2 className={styles.catHeading}>
                        Diverse Book Categories, Tailored For Every Reader
                    </h2>

                    <div className={styles.tabsWrap}>
                        {TABS.map(tab => (
                            <button
                                key={tab.key}
                                className={`${styles.tab} ${active === tab.key ? styles.tabActive : ''}`}
                                onClick={() => setActive(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.panelWrap}>
                        <div className={styles.panelLeft}>
                            <h3 className={styles.panelTitle}>{current.label}</h3>
                            <p className={styles.panelDesc}>{current.desc}</p>
                            <div className={styles.panelBtns}>
                                <button className={styles.btnOutline}>
                                    <span>🇺🇸</span> Live Call Available
                                </button>
                                <button className={styles.btnSolid}>Start Project</button>
                            </div>
                        </div>

                        <div className={styles.panelRight}>
                            <div className={styles.imgBox}>
                                <img
                                    key={current.key}
                                    src={current.img}
                                    alt={current.label}
                                    className={styles.panelImg}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className={styles.ctaSection}>
                <div
                    className={styles.bg}
                    style={{ backgroundImage: "url('/images/portfolio-bg.jpg')" }}
                />
                <div className={styles.ctaContainer}>

                    <div className={styles.ctaLeft}>
                        <h2 className={styles.ctaHeading}>Your Trusted Book Publisher</h2>
                        <p className={styles.ctaDesc}>
                            We deliver expertly crafted, well-researched books with speed, precision,
                            and quality designed to captivate readers and create lasting impact.
                        </p>
                        <div className={styles.ctaBtns}>
                            <button className={styles.ctaBtnOutline}>
                                <span>🇺🇸</span> +1 (866) 286-3588
                            </button>
                            <button className={styles.ctaBtnGhost}>Get Started</button>
                            <button className={styles.ctaBtnSolid}>Live Chat</button>
                        </div>
                    </div>

                    <div className={styles.ctaRight}>
                        <img
                            src="/images/cta-side-img.webp"
                            alt="Stuck in the Fire book"
                            className={styles.ctaImg}
                        />
                    </div>

                </div>
            </section>
        </>
    );
}