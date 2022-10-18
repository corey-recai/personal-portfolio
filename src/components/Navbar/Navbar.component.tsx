import React, { ReactElement, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from "./Navbar.module.scss";
import { cls } from "utils";
import {
  CustomComponentProps,
  CustomComponentWithRefProps,
  HTMLElementRef,
} from "interfaces";

interface NavbarProps extends CustomComponentWithRefProps<HTMLDivElement> {
  toggleFn: () => void;
}

export const Navbar = () => {
  const menuRef: HTMLElementRef<HTMLDivElement> = useRef(null);
  function toggleMenu() {
    menuRef?.current?.classList.toggle(styles.show);
  }
  return (
    <Navbar.Nav _className='something'>
      <a href='/' className={styles.logo}></a>
      <Navbar.Menu _ref={menuRef} toggleFn={toggleMenu}>
        <NavList toggleFn={toggleMenu} />
      </Navbar.Menu>
      <Navbar.Buttons toggleFn={toggleMenu} />
    </Navbar.Nav>
  );
};

Navbar.Nav = ({ _id, _className, children }: CustomComponentProps) => {
  return (
    <nav className={cls(styles.nav, _className as string)} id={_id}>
      {children}
    </nav>
  );
};

Navbar.Menu = ({ _id, _className, children, _ref, toggleFn }: NavbarProps) => {
  return (
    <div ref={_ref} className={styles.menu} id='nav-menu'>
      {children}
      <FontAwesomeIcon
        className={styles.close}
        onClick={toggleFn}
        icon={solid("xmark")}
      />
    </div>
  );
};

const NavList = ({ toggleFn }: NavbarProps): ReactElement => {
  const navLinksRef: HTMLElementRef<HTMLUListElement> = useRef(null);

  const navItems = [
    { name: "home", icon: solid("circle-notch") },
    { name: "about", icon: solid("user-astronaut") },
    { name: "skills", icon: solid("terminal") },
    { name: "services", icon: solid("hat-wizard") },
    { name: "portfolio", icon: solid("signature") },
    { name: "contact", icon: solid("qrcode") },
  ];

  function visitLink(e: React.SyntheticEvent) {
    toggleFn();
    navLinksRef?.current?.querySelectorAll("a").forEach(link => {
      if (link.href !== (e.target as HTMLAnchorElement).href) {
        link.classList.remove(styles.active);
      } else {
        link.classList.add(styles.active);
      }
    });
  }
  return (
    <ul ref={navLinksRef} className={styles.list}>
      {navItems.map(({ name, icon }) => (
        <li key={name} className={styles.item}>
          <a href={`#${name}`} onClick={visitLink} className={styles.link}>
            <FontAwesomeIcon icon={icon} /> {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

Navbar.Buttons = ({ toggleFn }: NavbarProps) => {
  return (
    <div className='nav__btns' onClick={toggleFn}>
      {/* Theme change button */}

      <div className={styles.toggle} id='nav-toggle'>
        <FontAwesomeIcon icon={solid("cubes")} />
      </div>
    </div>
  );
};
