import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Misael Esperanzate",
	description: "My portfolio website",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 0.85,
	maximumScale: 0.85,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
