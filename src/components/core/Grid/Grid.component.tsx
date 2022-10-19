import { CustomComponentProps } from "interfaces";
import React from "react";
import { cls } from "utils";
import styles from "./Grid.module.scss";

const Grid = ({ children, _className }: CustomComponentProps) => {
  return (
    <div className={cls(styles.grid, _className as string)}>{children}</div>
  );
};

export default Grid;
