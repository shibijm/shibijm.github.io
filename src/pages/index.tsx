import { PageHeader } from "components";
import { Fragment } from "react";

export default function IndexPage(): JSX.Element {
	return (
		<Fragment>
			<PageHeader description="Home page" title="Home" />
			<div>Home</div>
		</Fragment>
	);
}
