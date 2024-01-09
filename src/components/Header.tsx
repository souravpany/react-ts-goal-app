import { type ReactNode } from "react";

type ImageProps = {
  src: string;
  alt: string;
};

interface HeaderProps {
  image: ImageProps;
  children: ReactNode;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <img src={props.image.src} alt={props.image.alt} />
      {props.children}
    </header>
  );
}
