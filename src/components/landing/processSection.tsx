import styles from '../styles/process.module.css';

const STEPS = [
    {
        num: '01',
        title: 'Sign Up',
        desc: "Once you share your project details, we assign a dedicated project manager who will oversee and streamline your book's development.",
        align: 'top',
    },
    {
        num: '02',
        title: 'Outline Development',
        desc: "Our editors conduct in-depth research on your book's subject and refine the outline, adding valuable insights and content where necessary.",
        align: 'bottom',
    },
    {
        num: '03',
        title: 'First Draft',
        desc: 'We create and polish the first chapter, then send it to you for review and approval before moving forward with the rest of the manuscript.',
        align: 'top',
    },
    {
        num: '04',
        title: 'Final Revisions & Publishing',
        desc: 'After completing your manuscript, we incorporate revisions if required and then proceed with book writing and publishing, guiding you through the entire process until your book is ready for release.',
        align: 'bottom',
    },
];

export default function ProcessSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Heading */}
                <div className={styles.headingWrap}>
                    <h2 className={styles.heading}>Our Process</h2>
                    <p className={styles.subDesc}>
                        Unlike many other book publication companies, we combine literary expertise
                        with personalized guidance to help you create and publish your own book.
                        Our language specialists are fluent in English literature and hold degrees
                        from leading universities, ensuring quality at every step of the journey.
                    </p>
                </div>

                {/* Steps */}
                <div className={styles.stepsWrap}>

                    {/* Line image behind cards */}
                    <div className={styles.lineImgWrap}>
                        <img
                            src="/images/process-line-img.png"
                            alt=""
                            className={styles.lineImg}
                            aria-hidden="true"
                        />
                    </div>

                    <div className={styles.stepsGrid}>
                        {STEPS.map((step) => (
                            <div
                                key={step.num}
                                className={`${styles.stepCol} ${step.align === 'bottom' ? styles.stepColBottom : styles.stepColTop}`}
                            >
                                <div className={styles.stepNum}>{step.num}</div>
                                <div className={styles.stepTitle}>{step.title}</div>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}