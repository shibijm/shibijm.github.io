import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center text-center gap-4">
			<span className="font-semibold text-red-400">HTTP 404 - Not Found</span>
			<span className="text-white">The requested page could not be found on this site.</span>
			<Link className="text-blue-500 hover:text-blue-400 transition mt-8" href="/">
				Home
			</Link>
		</div>
	);
}
