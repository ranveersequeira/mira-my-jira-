import "@/styles/global.css";
import Sidebar from "@/components/Sidebar";
import clsx from "clsx";
import GlassPane from "@/components/GlassPane";
import { ReactChildren } from '@/lib/types';


export default function DashboardRootLayout({ children }: ReactChildren) {
    return (
        <html lang="en" className={clsx("dark")}>
            <head />
            <body className="w-screen h-screen p-6 candy-mesh">
                <GlassPane className="container flex w-full h-full p-6 mx-auto align-center">
                    <Sidebar />
                    <main className="w-full h-full pl-6">{children}</main>
                </GlassPane>
                <div id="modal"></div>
            </body>
        </html>
    );
}