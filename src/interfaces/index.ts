export interface CustomComponentProps {
  _id?: string;
  _className?: string;
  children?: React.ReactNode;
}

export interface CustomComponentWithRefProps<T> extends CustomComponentProps {
  _ref?: React.ForwardedRef<T>;
}

export type HTMLElementRef<T> = React.RefObject<T> | null;
