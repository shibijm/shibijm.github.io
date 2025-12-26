interface Data {
	metadata: {
		title: string;
		description: string;
		siteName: string;
		siteUrl: string;
		logoUrl: string;
	};
	bio: {
		shortName: string;
	};
	github: {
		username: string;
	};
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const data = JSON.parse(process.env.DATA!) as Data;
