import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";
import { ReactChildren } from '@/lib/types';



export default function AuthRootLayout({ children }: ReactChildren) {
    return (
        <html lang="en">
            <head />
            <body className="h-screen w-screen rainbow-mesh p-6">
                <GlassPane className="w-full h-full flex items-center justify-center">
                    {children}
                </GlassPane>
            </body>
        </html>
    );
}