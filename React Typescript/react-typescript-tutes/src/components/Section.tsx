import { ReactNode } from "react";

type SectionProps = { children: ReactNode, title: string };

export const Section = ({ children, title }: SectionProps): ReactNode => (
    <>
        <h2>{title}</h2>
        <div>{children}</div>
    </>
)