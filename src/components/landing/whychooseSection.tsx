import React from 'react';
import styles from '../styles/whychoose.module.css';

const FEATURES = [
    {
        title: 'Cost-Effective Publishing',
        desc: 'We provide customized solutions that align with your budget—without ever compromising on quality.',
    },
    {
        title: 'Guaranteed Confidentiality',
        desc: 'At Crescent Book Publishers, your personal details and project information remain fully protected.',
    },
    {
        title: 'Reliable Research',
        desc: 'Our experts carry out in-depth, verified research to ensure your content is accurate, unique, and valuable.',
    },
    {
        title: 'Full Creative Control',
        desc: 'You maintain complete authority over your book and royalties, with no hidden fees or commissions.',
    },
    {
        title: 'Experienced Publishing Professionals',
        desc: 'Our qualified team brings years of industry expertise, delivering work that matches the highest publishing standards.',
    },
    {
        title: 'On-Time Delivery',
        desc: 'We respect deadlines and ensure timely completion while maintaining top-notch quality for your book.',
    },
];

export default function WhyChooseSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Heading */}
                <div className={styles.headingWrap}>
                    <h2 className={styles.heading}>
                        Why Partner With Crescent Book Publishers?
                    </h2>
                    <p className={styles.subDesc}>
                        Our expert team specializes in turning simple ideas into powerful, captivating<br />
                        stories that connect with readers on every level.
                    </p>
                </div>

                {/* Body — left image + right grid */}
                <div className={styles.body}>

                    {/* Left — side image card */}
                    <div className={styles.sideCard}>
                        {/* Top photo */}
                        <div className={styles.sidePhoto}>
                            <img
                                src="/images/why-choose-side-img.jpg"
                                alt="Expert writer"
                                className={styles.sidePhotoImg}
                            />
                        </div>

                        {/* Bottom dark panel */}
                        <div className={styles.sideDark}>
                            {/* Red ribbon banner */}
                            {/* <div className={styles.ribbonWrap}>
                                <div className={styles.ribbonArrowLeft} />
                                <div className={styles.ribbon}>
                                    <span className={styles.ribbonLogo}>
                                        Ama<span className={styles.ribbonZ}>Z</span>on
                                        <span className={styles.ribbonSub}>digital pro</span>
                                    </span>
                                </div>
                                <div className={styles.ribbonArrowRight} />
                            </div> */}

                            {/* Text */}
                            <div className={styles.sideText}>
                                <p className={styles.sideTextTop}>Confused About</p>
                                <p className={styles.sideTextMid}>Book Writing?</p>
                                <p className={styles.sideTextHire}>Hire</p>
                                <p className={styles.sideTextExperts}>Expert Writers</p>
                            </div>

                            {/* Live Chat btn */}
                            <div className={styles.liveChatWrap}>
                                <div className={styles.liveChatArrowLeft} />
                                <button className={styles.liveChatBtn}>Live Chat</button>
                                <div className={styles.liveChatArrowRight} />
                            </div>
                        </div>
                    </div>

                    {/* Right — features grid */}
                    <div className={styles.featuresGrid}>
                        {FEATURES.map((f) => (
                            <div key={f.title} className={styles.featureCard}>
                                <h3 className={styles.featureTitle}>{f.title}</h3>
                                <p className={styles.featureDesc}>{f.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}