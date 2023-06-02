import GithubIcon from "./icons/GitHubIcon"
import LinkedinIcon from "./icons/LinKedinIcon"
import FrontendMentorIcon from "./icons/FrontendMentorIcon"
import TwitterIcon from "./icons/TwitterIcon"
import Link from "next/link"

function Links() {
	return (
		<div className="flex bg-transparent">
			<Link href="/" className="bg-inherit">
				<GithubIcon className="mx-[12.8px] bg-inherit fill-white hover:fill-[#4ee1a0]" />
			</Link>
			<Link href="/" className="bg-inherit">
				<FrontendMentorIcon className="mx-[12.8px] bg-inherit fill-white hover:fill-[#4ee1a0]" />
			</Link>
			<Link href="/" className="bg-inherit">
				<LinkedinIcon className="mx-[12.8px] bg-inherit fill-white hover:fill-[#4ee1a0]" />
			</Link>
			<Link href="/" className="bg-inherit">
				<TwitterIcon className="mx-[12.8px] bg-inherit fill-white hover:fill-[#4ee1a0]" />
			</Link>
		</div>
	)
}

export default Links
