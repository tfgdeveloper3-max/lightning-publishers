import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';

const NAV = [
    {
        heading: 'Our Services',
        links: ['Book Cover Design', 'Book Video Trailers', 'Manuscript Development', 'Book Publishing', 'Book Marketing', 'Book Editing'],
    },
    {
        heading: 'Book Categories',
        links: ['Fiction', 'Non-Fiction', 'Biography', 'Autobiography', 'Science Fiction', 'Horror'],
    },
    {
        heading: 'Company',
        links: ['About Us', 'Our Process', 'Portfolio', 'Testimonials', 'Blog', 'Contact Us'],
    },
];

const SOCIALS = [
    {
        label: 'Facebook',
        href: '#',
        path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    },
    {
        label: 'Twitter / X',
        href: '#',
        path: 'M4 4l16 16M4 20L20 4',
    },
    {
        label: 'Instagram',
        href: '#',
        path: 'M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.5-8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z',
    },
    {
        label: 'LinkedIn',
        href: '#',
        path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
    },
];

export default function Footer() {
    const [email, setEmail] = useState('');

    return (
        <footer className={styles.footer}>

            {/* ── TOP ORANGE STRIP ── */}
            <div className={styles.topStrip}>
                <div className={styles.stripInner}>
                    <div className={styles.stripLeft}>
                        <p className={styles.stripLabel}>Ready To Publish Your Book?</p>
                        <p className={styles.stripSub}>Get started today with a free consultation.</p>
                    </div>
                    <div className={styles.stripRight}>
                        <a href="tel:+18556837504" className={styles.stripPhone}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                            </svg>
                            +1 (855) 683-7504
                        </a>
                        <button className={styles.stripBtn}>Start Your Project →</button>
                    </div>
                </div>
            </div>

            {/* ── MAIN BODY ── */}
            <div className={styles.body}>
                <div className={styles.bodyInner}>

                    {/* Brand col */}
                    <div className={styles.brandCol}>
                        {/* Logo */}
                        <div className={styles.logoWrap}>
                            <img src="/images/footerLogo.png" alt="Footer Logo" className={styles.logoImg} />
                        </div>

                        <p className={styles.brandDesc}>
                            Your one-stop destination for professional book writing, editing, publishing, and marketing services. We turn your ideas into beautifully crafted books that captivate readers worldwide.
                        </p>

                        {/* Newsletter */}
                        <p className={styles.newsletterLabel}>Subscribe to our newsletter</p>
                        <div className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className={styles.newsletterInput}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <button className={styles.newsletterBtn}>Subscribe</button>
                        </div>

                        {/* Socials */}
                        <div className={styles.socials}>
                            {SOCIALS.map(s => (
                                <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav cols */}
                    {NAV.map(col => (
                        <div key={col.heading} className={styles.navCol}>
                            <h4 className={styles.navHeading}>{col.heading}</h4>
                            <div className={styles.navDivider} />
                            <ul className={styles.navList}>
                                {col.links.map(link => (
                                    <li key={link}>
                                        <a href="#" className={styles.navLink}>
                                            <span className={styles.navArrow}>›</span>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact col */}
                    <div className={styles.contactCol}>
                        <h4 className={styles.navHeading}>Contact Us</h4>
                        <div className={styles.navDivider} />
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e85d1a" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                                </svg>
                                <div>
                                    <p className={styles.contactLabel}>Call Us</p>
                                    <a href="tel:+18556837504" className={styles.contactValue}>+1 (855) 683-7504</a>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e85d1a" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                </svg>
                                <div>
                                    <p className={styles.contactLabel}>Email Us</p>
                                    <a href="mailto:info@crescentbookpublishers.com" className={styles.contactValue}>info@crescentbooks.com</a>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e85d1a" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                                <div>
                                    <p className={styles.contactLabel}>Our Office</p>
                                    <p className={styles.contactValue}>30 N Gould St, Sheridan, WY 82801, USA</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e85d1a" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                </svg>
                                <div>
                                    <p className={styles.contactLabel}>Business Hours</p>
                                    <p className={styles.contactValue}>Mon – Sat: 9am – 6pm EST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── BOTTOM BAR ── */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomInner}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Crescent Book Publishers. All Rights Reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <a href="#" className={styles.legalLink}>Privacy Policy</a>
                        <span className={styles.legalDot}>·</span>
                        <a href="#" className={styles.legalLink}>Terms of Service</a>
                        <span className={styles.legalDot}>·</span>
                        <a href="#" className={styles.legalLink}>Sitemap</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}