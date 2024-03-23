import { ReactNode } from "react";

type HeaderProps = { title: string };

export const Header = ({ title }: HeaderProps): ReactNode => <h1>{title}</h1>