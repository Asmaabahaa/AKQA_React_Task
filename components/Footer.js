import styles from "./Footer.module.scss";

export default function Footer() {
  return <>
    <footer className={styles.footer}>
      <div>
        <img src="./images/leo-logo.svg" alt="" />
        <div className={`float_right`}>
          <div className={styles.footer_p}>
            <p>© Copyright LEO Pharma 2020 LEO and the LEO Lion Design are registered trademarks of LEO Pharma.</p>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
      <div className={`${styles.links} flex`}>
        <a href="">Contact
          <span>|</span>
        </a>
        <a href="">Imprint
          <span>|</span>
        </a>
        <a href="">Conditions
          <span>|</span>
        </a>
        <a href="">Terms of use
          <span>|</span>
        </a>
        <a href="">Privacy
          <span>|</span>
        </a>
        <a href="">Cookie content
        </a>
      </div>
    </footer>
  </>;
}
