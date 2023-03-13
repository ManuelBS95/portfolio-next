import GithubIcon from "./GithubIcon.js"
import LinkedinIcon from "./LinkedinIcon.js"
import FrontendMentorIcon from "./FrontendMentorIcon.js"
import TwitterIcon from "./TwitterIcon.js"
import Link from "next/link"

function Links() {
	return (
		<div className="flex z-10 bg-transparent">
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
