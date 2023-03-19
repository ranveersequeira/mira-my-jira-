import Card from "./Card";
import Image from "next/image";
import logo from "../public/logo.png";
import SidebarLink from "./SidebarLink";
import { LinkType } from '@/lib/types';

const links: LinkType = [
    { label: "Home", icon: "Grid", link: "/home" },
    {
        label: "Calendar",
        icon: "Calendar",
        link: "/calendar",
    },
    { label: "Profile", icon: "User", link: "/profile" },
    {
        label: "Settings",
        icon: "Settings",
        link: "/settings",
    },
];

const Sidebar = () => {
    return (
        <Card className="flex flex-wrap items-center justify-between w-40 h-full">
            <div className="flex items-center justify-center w-full">
                <Image src={logo} alt="Able logo" priority className="w-14" />
            </div>
            {links.map((link) => (
                <SidebarLink link={link} key={link.label} />
            ))}
        </Card>
    );
};

export default Sidebar;
