import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";
import { cls } from "utils";
import { CustomComponentProps } from "interfaces";

interface ButtonProps extends CustomComponentProps {
  _href?: string;
}

export const Button = ({ _href, children, _className }: ButtonProps) => {
  if (!_href)
    return (
      <button className={cls(styles.button, _className as string)}>
        {!_href && children}
        {_href && <Link href={_href}>{children}</Link>}
      </button>
    );
  return (
    <Link href={_href}>
      <button className={cls(styles.button, _className as string)}>
        {children}
      </button>
    </Link>
  );
};

Button.Flex = ({ _href, children, _className }: ButtonProps) => {
  return (
    <Button _href={_href} _className={cls(styles.flex, _className as string)}>
      {children}
    </Button>
  );
};
