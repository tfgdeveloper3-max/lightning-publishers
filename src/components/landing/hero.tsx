import React, { useState } from 'react';
import styles from '../styles/hero.module.css';

const SERVICES = [
    'Expert Manuscript Evaluation',
    'Professional Editing & Proofreading',
    'Custom Book Cover Design',
    'Interior Formatting & Layout',
    'Step-By-Step Guidance from 50+ Publishing Experts',
];

const SERVICE_OPTIONS = [
    'Manuscript Evaluation',
    'Book Cover Design',
    'Professional Editing',
    'Interior Formatting',
    'Full Publishing Package',
];

export default function CrescentHero() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        consent: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const target = e.target as HTMLInputElement;
        setForm(prev => ({
            ...prev,
            [target.name]: target.type === 'checkbox' ? target.checked : target.value,
        }));
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('Form submitted:', form);
    };

    return (
        <>
            <section className={styles.hero}>

                {/* BACKGROUND */}
                <div
                    className={styles.heroBg}
                    style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
                />

                {/* TOP BAR */}
                <div className={styles.topbar}>
                    <a href="#" className={styles.logoWrap}>
                       <img src="/images/logo.png" alt="" className={styles.logoImg} />
                    </a>

                    <div className={styles.topbarRight}>
                        <div className={styles.contactItem}>
                            <span className={styles.contactLabel}>Talk To Us</span>
                            <a href="tel:+18556837504" className={styles.contactValue}>
                                +1 (855) 683-7504
                            </a>
                        </div>
                        <div className={styles.contactItem}>
                            <span className={styles.contactLabel}>24/7 Available</span>
                            <span className={styles.contactValueChat}>Live Chat</span>
                        </div>
                    </div>
                </div>

                {/* MAIN BODY */}
                <div className={styles.heroBody}>

                    {/* LEFT */}
                    <div className={styles.heroLeft}>
                        <h1 className={styles.heroTitle}>
                            All-In-One Online Book Publishing Services
                        </h1>
                        <p className={styles.heroDesc}>
                            Looking to publish your own book but feeling overwhelmed by the
                            self-publishing process? At Crescent Book Publishers, we provide
                            complete book publishing services designed to make your journey
                            seamless. In collaboration with top publishing platforms, we support
                            both first-time and seasoned authors in achieving their publishing
                            goals with confidence.
                        </p>
                        <p className={styles.servicesHeading}>
                            Our Complete Online Book Publishing Solutions Cover:
                        </p>
                        <div className={styles.servicesGrid}>
                            {SERVICES.map(s => (
                                <div key={s} className={styles.serviceItem}>
                                    <span className={styles.serviceDot} aria-hidden="true" />
                                    {s}
                                </div>
                            ))}
                        </div>
                        <div className={styles.heroBtns}>
                            <button className={styles.btnPrimary}>Lets Get Started</button>
                            <button className={styles.btnSecondary}>Live Chat</button>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className={styles.formWrap}>
                        <div className={styles.formHeader}>
                            <p className={styles.formHeaderTop}>Sign Up Now And Get</p>
                            <p className={styles.formHeaderDiscount}>60% DISCOUNT</p>
                        </div>
                        <div className={styles.formSubheader}>
                            <p className={styles.formSubheaderText}>
                                Start your journey with expert support and unbeatable savings.
                            </p>
                        </div>
                        <div className={styles.formBody}>
                            <input
                                className={styles.formInput}
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <input
                                className={styles.formInput}
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <div className={styles.phoneWrap}>
                                <div className={styles.phoneFlag}>🇺🇸 ▾</div>
                                <input
                                    className={styles.phoneInput}
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <select
                                className={styles.formSelect}
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Services I Need</option>
                                {SERVICE_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                            <div className={styles.checkboxWrap}>
                                <input
                                    type="checkbox"
                                    id="consent"
                                    name="consent"
                                    checked={form.consent}
                                    onChange={handleChange}
                                />
                                <label htmlFor="consent" className={styles.checkboxLabel}>
                                    Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (
                                    <a href="#" className={styles.linkOrange}>Privacy &amp; Policy</a>
                                    {' '}&amp;{' '}
                                    <a href="#" className={styles.linkYellow}>Terms &amp; Conditions</a>
                                    ) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE
                                    to STOP to unsubscribe anytime.
                                </label>
                            </div>
                            <button className={styles.btnReserve} onClick={handleSubmit}>
                                Reserve This Discount
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* CHAT BUBBLE */}
            <button className={styles.chatBubble} aria-label="Open live chat">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
            </button>
        </>
    );
}