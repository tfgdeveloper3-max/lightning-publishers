import React from 'react';
import styles from '../styles/service.module.css';

const SERVICES = [
    {
        icon: '/images/icons/service-icon-1.png',
        title: 'Book Cover Design',
        desc: "Your cover is the first impression. Our skilled design team works hand-in-hand with literary experts to create visually striking covers that reflect your book's true essence and message.",
    },
    {
        icon: '/images/icons/service-icon-2.png',
        title: 'Book Video Trailers',
        desc: 'Bring your story to life with cinematic book trailers. Our creative team crafts engaging videos that grab attention and boost visibility across social and digital platforms.',
    },
    {
        icon: '/images/icons/service-icon-3.png',
        title: 'Manuscript Development',
        desc: 'From concept to completion, we help shape your ideas into compelling, reader-focused manuscripts designed to keep audiences hooked from the first page to the last.',
    },
    {
        icon: '/images/icons/service-icon-4.png',
        title: 'Book Publishing',
        desc: 'Publishing on platforms like Amazon and beyond doesn\'t have to be overwhelming. We simplify the entire publishing journey, ensuring a smooth, stress-free process.',
    },
    {
        icon: '/images/icons/service-icon-5.png',
        title: 'Book Marketing',
        desc: 'Stand out in today\'s crowded market. With tailored marketing campaigns and targeted outreach, we connect your book with the right readers and maximize its reach.',
    },
    {
        icon: '/images/icons/service-icon-6.png',
        title: 'Book Editing',
        desc: 'Our professional editors refine every word, enhancing clarity, flow, and style to deliver a polished manuscript that\'s ready for successful publication.',
    },
];

export default function ServicesSection() {
    return (
        <section className={styles.section}>
            {/* Background */}
            <div
                className={styles.sectionBg}
                style={{ backgroundImage: "url('/images/service-bg.jpg')" }}
            />

            <div className={styles.container}>

                {/* ── TOP ROW ── */}
                <div className={styles.topRow}>

                    {/* Left — heading + desc */}
                    <div className={styles.topLeft}>
                        <h2 className={styles.heading}>Our Services</h2>
                        <div className={styles.headingUnderline} />
                        <p className={styles.topDesc}>
                            From initial concept to worldwide release, Crescent Book Publishers
                            provides complete solutions to publish and promote your book—all in one place.
                        </p>
                    </div>

                    {/* Right — orange banner */}
                    <div className={styles.bannerWrap}>
                        <div className={styles.banner}>
                            <div className={styles.bannerLeft}>
                                <p className={styles.bannerTitle}>
                                    The One-Stop Destination for Book Writing and Publishing!
                                </p>
                                <div className={styles.bannerBtns}>
                                    <button className={styles.bannerBtnOutline}>
                                        <span>🇺🇸</span> Talk To An Expert
                                    </button>
                                    <button className={styles.bannerBtnSolid}>
                                        Live Chat
                                    </button>
                                </div>
                            </div>

                            <div className={styles.bannerImg}>
                                <img
                                    src="/images/service-side-img.png"
                                    alt="Featured books"
                                    className={styles.booksImage}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* ── SERVICES GRID ── */}
                <div className={styles.servicesGrid}>
                    {SERVICES.map((s) => (
                        <div key={s.title} className={styles.serviceCard}>
                            <div className={styles.iconWrap}>
                                <img src={s.icon} alt={s.title} className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}