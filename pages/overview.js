import styles from "./overview.module.scss";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
export default function Overview() {
    return (
        <>
            {/* Section 1 */}
            <section className={styles.section_1}>
                <div className={styles.img_container}>
                    <img src="images/section-1.svg" alt="section-1-img" />
                    <span className={styles.logo_text}>
                        <img src="images/Adtralza-global-logo.svg" alt="Adtralza-global-logo" />
                    </span>
                    <p className={styles.summary_p}>Adtralza® is a new treatment for adult patients with
                        moderate-to-severe atopic
                        dermatitis (eczema) who are candidates for systemic therapy.</p>
                </div>
            </section>

            {/* Section 2 */}
            <section className={styles.section_2}>
                <div className={`row`}>
                    <div className={`column_2`}>
                        <img src="/images/adtralza-packshot.svg" alt="adtralza-packshot" />
                    </div>
                    <div className={`column_2`}>
                        <div className={styles.product_description}>
                            <p className={styles.product_info}>
                                It is the first and only biologic developed to specifically neutralize IL-13, a key driver of
                                atopic dermatitis signs and symptoms(1,2)
                            </p>
                            <small className={styles.learn_more}>Learn more about how Adtralza® works and how to use it in
                                treatment.</small>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 3*/}
            <section className={styles.section_3}>
                <div className={`row`}>
                    <div className={`column_4`}>
                        <div className={`${styles.card} custom_font_style`}>
                            <div className={styles.content_group}>
                                <img src="/images/rate-logo.svg" alt="safety-logo" />
                                <span className={styles.card_title}>Long term sustained improvement</span>
                                <p className={styles.card_description}>9 out of 10 respondents experienced
                                    sustained
                                    disease control in
                                    clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡).
                                </p>
                                <small>
                                    <a href="">See efficacy and trial data</a>

                                </small>
                            </div>
                        </div>
                    </div>

                    <div className={`column_4`}>
                        <div className={`${styles.card} custom_font_style`}>
                            <div className={styles.content_group}>
                                <img src="/images/improvements-logo.svg" alt="improvemenets-logo" />
                                <span className={styles.card_title}>Improvements in the burden of disease </span>
                                <p className={styles.card_description}>Patients in clinical trials saw an
                                    improvement in
                                    Quality of Life with early symptom relief and sustained improvements in burden of disease
                                    from week 16 to 32(12,13).
                                </p>
                                <small>
                                    <a href=""> Learn more about quality of life improvements</a>
                                </small>

                            </div>
                        </div>
                    </div>


                    <div className={`column_4`}>
                        <div className={`${styles.card} custom_font_style`}>
                            <div className={styles.content_group}>
                                <img src="/images/safety-logo.svg" alt="safety-logo" />
                                <span className={styles.card_title}>Good safety profile</span>
                                <p className={styles.card_description}></p>
                                <small>
                                    <a href="">See safety profile</a>
                                </small>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* section 4 */}
            <section className={`${styles.section_4} custom_font_style`}>
                <div className={`row`}>
                    <span className={styles.title}>
                        Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.
                    </span>
                    <div className={`column_2`}>
                        <div className={styles.specificality_p}>
                            <p >
                                By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II
                                receptors and prevents IL-13-induced inflammatory responses in the skin(1,2).
                            </p>
                           <p> Adtralza® selectively modulates the dysregulated immune system by(1):</p>
                                <ul className={styles.dash_list}>
                                   
                                    <li>
                                        Reducing markers of skin inflammation
                                    </li>
                                    <li>
                                        Improving markers of skin barrier integrity
                                    </li>
                                    <li>
                                        Reducing epidermal thickness
                                    </li>

                                </ul>

                        </div>
                        <button type="button">Watch the video</button>
                        <small> Duration: 2:43</small>
                    </div>

                    <div className={`column_2`}>
                        <div className={styles.product_usages}>
                            <img className={styles.usage_img} src="/images/usage-section.svg" alt="usage-section" />
                        </div>
                    </div>
                </div>

            </section>
            {/* section 5 */}
            <section className={`${styles.section_5} custom_font_style`}>
                <div className={`row`}>
                    <p className={styles.section_title}>Clinical tools - at a glance</p>
                    <div className={`column_2`}>
                        <div className={styles.card_2}>
                            <img src="/images/dosing-guide.svg" alt="nurse-image" />
                            <div className={styles.container}>
                                <span className={styles.clinical_tools_title} >Dosing guide</span>
                                <p className={styles.card_description}>Adtralza® has a straightforward
                                    dosing regimen,
                                    with 150 mg prefilled syringes(1).
                                    This step by step video guide shows the patient how to self inject using the two syringes
                                    that come in the Adtralza® carton.
                                </p>
                                <small >
                                    <a href="">Learn more about application and dosing</a>
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className={`column_2`}>
                        <div className={`${styles.card_2} custom_font_style`}>
                            <img src="/images/patient-injection.svg" alt="patient-injection" />
                            <div className={styles.container}>
                                <span className={styles.clinical_tools_title} >Patient injection made simple</span>
                                <p className={styles.card_description}>Adtralza® has a straightforward
                                    dosing regimen,
                                    with 150 mg prefilled syringes(1).
                                    This step by step video guide shows the patient how to self inject using the two syringes
                                    that come in the Adtralza® carton.
                                </p>
                                <small >
                                    <a href=""> Watch the video</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 6 */}
            <section className={`${styles.section_6} custom_font_style`}>
                <p className={styles.section_title}>KOL Videos - get expert insights here</p>
                <small>See what Key opinion leaders have to say about their experiences with </small>
                <div className={`row`}>
                    <div className={`column_2`}>
                        <div className={`${styles.video_card} row`}>
                            <div className={`column_4`}>
                                <div className={styles.video_group}>
                                <img src="/images/video_img.svg" alt="video-img" />
                                </div>
                            </div>
                            <div className={`column_8`}>
                                <div className={styles.video_decription_group}>
                                    <span className={styles.video_title}>
                                        Video title
                                    </span>
                                    <p className={styles.video_decription}>
                                        Short description of the contents or subject of the video. You can upload a screen from the
                                        video as
                                        thumbnail image
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`column_2`}>
                        <div className={`${styles.video_card} row`}>
                            <div className={`column_4`}>
                                <div className={styles.video_group}>
                                    <img src="/images/video_img.svg" alt="video-img" />
                                </div>
                            </div>
                            <div className={`column_8`}>
                                <div className={styles.video_decription_group}>
                                    <span className={styles.video_title}>
                                        Video title
                                    </span>
                                    <p className={styles.video_decription}>
                                        Short description of the contents or subject of the video. You can upload a screen from the
                                        video as
                                        thumbnail image
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={`row`}>
                    <div className={`column_2`}>
                        <div className={`${styles.video_card} row`}>
                            <div className={`column_4`}>
                                <div className={styles.video_group}>
                                <img src="/images/video_img.svg" alt="video-img" />
                                </div>
                            </div>
                            <div className={`column_8`}>
                                <div className={styles.video_decription_group}>
                                    <span className={styles.video_title}>
                                        Video title
                                    </span>
                                    <p className={styles.video_decription}>
                                        Short description of the contents or subject of the video. You can upload a screen from the
                                        video as
                                        thumbnail image
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`column_2`}>
                        <div className={`${styles.video_card} row`}>
                            <div className={`column_4`}>
                                <div className={styles.video_group}>
                                <img src="/images/video_img.svg" alt="video-img" />
                                </div>
                            </div>
                            <div className={`column_8`}>
                                <div className={styles.video_decription_group}>
                                    <span className={styles.video_title}>
                                        Video title
                                    </span>
                                    <p className={styles.video_decription}>
                                        Short description of the contents or subject of the video. You can upload a screen from the
                                        video as
                                        thumbnail image
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 7 */}
            <section className={styles.section_7}>
                <Accordion allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={`${styles.accordion} flex`}>
                                    <img src="/images/refrence-dropdown-btn.svg" alt="dropdown-icon" />
                                    <p className={`custom_font_style`} >Refrence</p>
                                </div>

                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <span className={styles.content}>
                                <p className={styles.refrences_info}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </span>

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </section>


        </>
    );
}