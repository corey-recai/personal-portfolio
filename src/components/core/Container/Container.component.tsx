import React from "react";
import styles from "./Container.module.scss";
import { cls } from "utils";
import { CustomComponentProps } from "interfaces";

const Container = ({ children, _className }: CustomComponentProps) => {
  return (
    <div className={cls(styles.container, _className as string)}>
      {children}
    </div>
  );
};

Container.Grid = ({ children, _className }: CustomComponentProps) => {
  return (
    <Container _className={cls(styles.grid, _className as string)}>
      {children}
    </Container>
  );
};

export default Container;
