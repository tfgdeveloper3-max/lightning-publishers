import React, { useState } from 'react';
import styles from '../styles/testimonial.module.css';

const TESTIMONIALS = [
    {
        name: 'Sophia Williams',
        stars: 5,
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: "As a first-time author, I was nervous about the process. But the team walked me through every stage with care. Their expertise turned my manuscript into a polished book I'm proud to share.",
    },
    {
        name: 'David Clark',
        stars: 5,
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
        text: 'From editing to distribution, every step was handled seamlessly. The team understood my goals and delivered results that exceeded expectations. Working with them has been one of the best decisions of my Publishing career.',
    },
    {
        name: 'Rachel Martinez',
        stars: 5,
        img: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: "Crescent Book Publishers exceeded my expectations. Their professional editing and customized book design made my children's story come alive. The illustrations were stunning, and the publishing process felt effortless with their expert guidance.",
    },
    {
        name: 'James Anderson',
        stars: 5,
        img: 'https://randomuser.me/api/portraits/men/55.jpg',
        text: 'Incredible experience from start to finish. The team was professional, responsive, and genuinely invested in making my book the best it could be. I highly recommend Crescent Book Publishers to any aspiring author.',
    },
    {
        name: 'Emily Johnson',
        stars: 5,
        img: 'https://randomuser.me/api/portraits/women/22.jpg',
        text: 'The quality of their work is outstanding. They transformed my rough draft into a beautifully crafted book. The entire process was smooth and the team was always available to answer my questions.',
    },
];

const CARDS_PER_PAGE = 3;
const TOTAL_DOTS = Math.ceil(TESTIMONIALS.length / CARDS_PER_PAGE);

export default function TestimonialsSection() {
    const [activeDot, setActiveDot] = useState(2); // 3rd dot active like reference

    const start = (activeDot - 1) * 1; // sliding window of 3
    const visible = TESTIMONIALS.slice(
        Math.max(0, Math.min(start, TESTIMONIALS.length - CARDS_PER_PAGE)),
        Math.max(0, Math.min(start, TESTIMONIALS.length - CARDS_PER_PAGE)) + CARDS_PER_PAGE
    );

    return (
        <>
            {/* ── SECTION 1: TESTIMONIALS ── */}
            <section className={styles.testSection}>
                {/* bokeh bg */}
                <div
                    className={styles.testBg}
                    style={{ backgroundImage: "url('/images/portfolio-bg.jpg')" }}
                />

                <div className={styles.testContainer}>
                    {/* Heading */}
                    <div className={styles.headingWrap}>
                        <h2 className={styles.heading}>Client Testimonials</h2>
                        <p className={styles.subDesc}>
                            At Crescent Book Publishers, we go above and beyond to meet every client's expectation
                            by delivering exactly what they envision for their book.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className={styles.cardsGrid}>
                        {visible.map((t) => (
                            <div key={t.name} className={styles.card}>
                                <div className={styles.cardTop}>
                                    <div className={styles.cardMeta}>
                                        <p className={styles.cardName}>{t.name}</p>
                                        <div className={styles.stars}>
                                            {Array.from({ length: t.stars }).map((_, i) => (
                                                <span key={i} className={styles.star}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className={styles.avatar}
                                    />
                                </div>
                                <p className={styles.cardText}>{t.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className={styles.dotsWrap}>
                        {Array.from({ length: TESTIMONIALS.length }).map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${activeDot === i + 1 ? styles.dotActive : ''}`}
                                onClick={() => setActiveDot(i + 1)}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: CTA BANNER ── */}
            <section className={styles.ctaSection}>
                <div
                    className={styles.ctaBg}
                    style={{ backgroundImage: "url('/images/portfolio-bg.jpg')" }}
                />

                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaHeading}>
                        In Search Of Professional Book Publishing Services?
                    </h2>
                    <p className={styles.ctaDesc}>
                        You've found the right partner. At Crescent Book Publishers, we craft impactful books
                        and provide strategic marketing solutions to ensure your work connects with the audience it deserves.
                    </p>

                    <div className={styles.ctaBtns}>
                        <button className={styles.ctaBtnOutline}>
                            <span>🇺🇸</span> Call An Expert
                        </button>
                        <button className={styles.ctaBtnGhost}>Get Started</button>
                        <button className={styles.ctaBtnSolid}>Live Chat</button>
                    </div>

                    {/* Platform badges */}
                    <div className={styles.badgesWrap}>
                        <img
                            src="/images/best-publishing-platform.webp"
                            alt="Trusted publishing platforms — DMCA Protected, Amazon Kindle, Trustpilot, Google Reviews"
                            className={styles.badgesImg}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}