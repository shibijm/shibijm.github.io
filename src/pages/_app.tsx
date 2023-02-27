import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Fragment>
			<Head>
				<meta charSet="UTF-8" />
				<meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport" />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}
