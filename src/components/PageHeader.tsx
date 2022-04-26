import Head from "next/head";

interface PageHeaderProps {
	title?: string;
	description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps): JSX.Element {
	return (
		<Head>
			<meta content={title} name="title" />
			<meta content={description} name="description" />
			<title>{title}</title>
		</Head>
	);
}
