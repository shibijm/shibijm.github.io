import { data } from "@/config";
import type { Metadata } from "next";

export function generateMetadata() {
	const metadata: Metadata = {
		title: data.metadata.title,
		description: data.metadata.description,
		metadataBase: new URL(data.metadata.siteUrl),
		alternates: {
			canonical: data.metadata.siteUrl,
		},
		openGraph: {
			title: data.metadata.title,
			description: data.metadata.description,
			siteName: data.metadata.siteName,
			url: data.metadata.siteUrl,
			type: "website",
			images: {
				url: data.metadata.logoUrl,
				alt: "Logo",
			},
		},
		twitter: {
			card: "summary",
		},
	};
	return metadata;
}
