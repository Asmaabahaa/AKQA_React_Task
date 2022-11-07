import { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";

const menus = {
  Bedingungen: {},
  Behandlungen: {
    Adtralza: {
      Overview: {},
      "Mode of Action": {},
      Efficacy: {},
      "Quality of Life": {},
      Safety: {},
      Dosing: {},
      News: {},
      "Technical Information": {},
    },
    Diavonex: {},
    Diavobet: {},
    Enstilar: {},
    Fucidin: {},
    Kyntheum: {},
    Protopic: {},
    Skinoren: {},
    Tralokinumab: {},
    Xamiol: {},
  },
  Veranstaltungen: {},
  Werkzeuge: {},
  "Forschung und Erkenntnisse": {},
};

export default function NavBar() {
  const [activeMenus, setActiveMenus] = useState([]);

  const setMenu = (level, key) => {
    const copy = level === 0 ? [] : [...activeMenus];
    copy[level] = key;
    setActiveMenus([...copy]);
  };

  return (
    <>
      <div className={styles.header}>
        <img src="/images/DermaWorld.svg" alt="" />
        <div className={styles.header_right}>
          <div className={styles.input_icon}>
            <input
              className={styles.search_field}
              type="text"
              placeholder="Search"
            />
            <i className={styles.fa_search} aria-hidden="true"></i>
          </div>
        </div>
      </div>
      {/* Menu Level 1 */}
      <ul className={styles.menu_level_1}>
        {Object.keys(menus).map((key) => (
          <li key={key} onClick={(e) => setMenu(0, key)}>
            {key}
          </li>
        ))}
      </ul>
      {/* Menu Level 2 */}
      <ul className={styles.menu_level_2}>
        {activeMenus.length > 0 &&
          Object.keys(menus[activeMenus[0]]).map((key) => (
            <li key={key} onClick={(e) => setMenu(1, key)}>
              {key}
            </li>
          ))}
      </ul>
      {/* Menu Level 3 */}
      <ul className={styles.menu_level_3}>
        {activeMenus.length > 1 &&
          Object.keys(menus[activeMenus[0]][activeMenus[1]]).map((key) => (
            <li key={key} onClick={(e) => setMenu(2, key)}>
          
              <a href= {"/" + key.toLocaleLowerCase()} >
              {key}
              </a>
            </li>

          ))}
      </ul>
  
    </>
  );
}
