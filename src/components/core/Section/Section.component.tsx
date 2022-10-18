import React from "react";
import styles from "./Section.module.scss";
import { cls } from "utils";
import { CustomComponentProps } from "interfaces";

export const Section = ({
  _id,
  _className,
  children,
}: CustomComponentProps) => {
  return (
    <section className={cls(styles.section, _className as string)} id={_id}>
      {children}
    </section>
  );
};

Section.Title = ({ _id, _className, children }: CustomComponentProps) => {
  return (
    <h1 className={cls(styles.title, _className as string)} id={_id}>
      {children}
    </h1>
  );
};

Section.Subtitle = ({ _id, _className, children }: CustomComponentProps) => {
  return (
    <h2 className={cls(styles.subtitle, _className as string)} id={_id}>
      {children}
    </h2>
  );
};
