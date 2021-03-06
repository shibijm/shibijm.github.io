import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class ExtendedDocument extends Document {
	public render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
