import React, { useState } from 'react';
import styles from '../styles/portfolio.module.css';

const TABS = [
    'Fiction',
    'Non-Fiction',
    'Biography',
    'Autobiography',
    'Informative',
    'Memoirs',
] as const;

type Tab = (typeof TABS)[number];

const PORTFOLIO: Record<Tab, number[]> = {
    Fiction: [1, 2, 3, 4, 5, 6],
    'Non-Fiction': [7, 8, 9, 10, 11, 12],
    Biography: [13, 14, 15, 16, 17, 18],
    Autobiography: [19, 20, 21, 22, 23, 24],
    Informative: [25, 26, 27, 28, 29, 30],
    Memoirs: [31, 32, 33, 34, 35],
};

export default function PortfolioSection() {
    const [activeTab, setActiveTab] = useState<Tab>('Fiction');
    const [fade, setFade] = useState(false);

    const books = PORTFOLIO[activeTab];
    // Duplicate for seamless infinite loop
    const allBooks = [...books, ...books];

    const handleTabChange = (tab: Tab) => {
        if (tab === activeTab) return;
        setFade(true);
        setTimeout(() => {
            setActiveTab(tab);
            setFade(false);
        }, 300);
    };

    return (
        <section className={styles.section}>
            <div
                className={styles.bg}
                style={{ backgroundImage: "url('/images/portfolio-bg.jpg')" }}
            />

            <div className={styles.container}>
                <div className={styles.headingWrap}>
                    <h2 className={styles.heading}>Creative Portfolio</h2>
                    <p className={styles.subDesc}>
                        We provide a wide range of book writing services.<br />
                        Look at our impressive portfolio, which will make you work with us.
                    </p>
                </div>

                {/* Centered Tabs */}
                <div className={styles.tabsWrap}>
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Full-width auto-slider */}
            <div className={styles.sliderOuter}>
                <div className={styles.fadeLeft} />
                <div className={styles.fadeRight} />

                <div className={`${styles.sliderViewport} ${fade ? styles.fading : ''}`}>
                    <div className={styles.sliderTrack} key={activeTab}>
                        {allBooks.map((n, i) => (
                            <div key={`${n}-${i}`} className={styles.slideItem}>
                                <img
                                    src={`/images/Portfolio/${n}.jpg`}
                                    alt={`Book ${n}`}
                                    className={styles.bookImg}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent && !parent.querySelector('.fallback')) {
                                            parent.innerHTML = `
                                                <div class="fallback" style="
                                                    width: 240px;
                                                    height: 350px;
                                                    background: linear-gradient(135deg, #e85d1a, #c0391a);
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: center;
                                                    color: #fff;
                                                    font-weight: 800;
                                                    font-size: 1.4rem;
                                                    border-radius: 8px;
                                                    font-family: Raleway, sans-serif;
                                                ">Book ${n}</div>
                                            `;
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}