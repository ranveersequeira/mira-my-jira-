export type ReactChildren = {
    children?: JSX.Element | JSX.Element[];
    className?: string
};

export type LinkType = Array<{

    label: string,
    icon: string,
    link: string

}>

export interface SidebarLinkProps {
    link: {
        label: string;
        icon: string,
        link: string

    };
}
