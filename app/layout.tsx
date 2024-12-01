import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import "xellanix-react/style.css";
import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/page.css";
import "@/styles/text.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="light-theme">
                <NextTopLoader color="var(--accent-color)" easing="ease-out" showSpinner={false} />
                <div
                    className="body-wrapper"
                    style={{
                        maxWidth: "100dvw",
                        boxSizing: "border-box",
                        padding: "0px !important",
                    }}>
                    {children}
                </div>
            </body>
        </html>
    );
}