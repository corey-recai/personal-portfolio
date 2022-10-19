import React from "react";
import Section from "components/core/Section";
import Container from "components/core/Container";
import Grid from "components/core/Grid";
import styles from "./Home.module.scss";
import { CustomComponentProps } from "interfaces";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/core/Button";
import { cls } from "utils";

const Home = () => {
  return (
    <Section _className={styles.home} _id='home'>
      <Container.Grid _className={styles.container}>
        <Grid _className={styles.content}>
          <Home.Social />
          <Home.Image />
          <Home.Data />
        </Grid>
        <Home.ScrollAnimation />
      </Container.Grid>
    </Section>
  );
};

type SocialLink = {
  title: string;
  url: string;
  icon: IconDefinition;
};

Home.Social = () => {
  const socialLinks = [
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/corey-recai/",
      icon: brands("linkedin-in"),
    },
    {
      title: "github",
      url: "https://github.com/Corey-Recai",
      icon: brands("github-alt"),
    },
  ];
  return (
    <div className={styles.social}>
      {socialLinks.map(link => (
        <Home.SocialLink key={link.title} {...link} />
      ))}
    </div>
  );
};

Home.SocialLink = ({ title, url, icon }: SocialLink) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className={styles.icon}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

Home.Image = () => {
  const image = "/assets/img/user-profile.png";
  return (
    <div className={styles.img}>
      <svg className={styles.blob} viewBox='0 0 200 187'>
        <mask id='mask0' mask-type='alpha'>
          <path
            d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
          />
        </mask>
        <g mask='url(#mask0)'>
          <path
            d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
          />

          <image x='-130' y='-70' href={image} />
        </g>
      </svg>
    </div>
  );
};

Home.Data = () => {
  return (
    <div className={styles.data}>
      <h1 className={styles.title}>Hi, I&apos;m Corey</h1>
      <h3 className={styles.subtitle}>Fullstack Developer</h3>
      <p className={styles.description}>
        Quality driven individual with expertise in fullstack web development
        and design.
      </p>
      <Button.Flex _href='#contact'>
        Contact Me <FontAwesomeIcon icon={solid("qrcode")} />
      </Button.Flex>
    </div>
  );
};

Home.ScrollAnimation = () => {
  return (
    <svg viewBox='-1 -1 600 600'>
      <g>
        <rect width='24' height='42' rx='14' fill='transparent' stroke='#000' />

        <circle cx='12' cy='12' r='2' />
      </g>
      <g>
        <polyline points='2,50 12,60 12,60 22,50' fill='none' stroke='#000' />
      </g>
    </svg>
  );
};

// <div className={styles.scroll}>
//   <div className={styles.mouse}>
//     <div className={styles.wheel}></div>
//   </div>
//   <div>
//     <span className={cls(styles.arrows, styles.one)}></span>
//     <span className={cls(styles.arrows, styles.two)}></span>
//     <span className={cls(styles.arrows, styles.three)}></span>
//   </div>
{
  /* <a href='#about' className='home__scroll-button button--flex'>
    <i className='uil uil-mouse-alt home__scroll-mouse'></i>
    <span className='home__scroll-name'>Scroll down</span>
    <i className='uil uil-arrow-down home__scroll-arrow'></i>
  </a> */
}
{
  /* </div> */
}
export default Home;
