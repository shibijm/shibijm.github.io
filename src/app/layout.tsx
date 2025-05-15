import "@/styles/globals.css";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="bg-zinc-950" lang="en">
			<body className={`${font.className} text-2xl p-4 pt-24`}>{children}</body>
		</html>
	);
}
