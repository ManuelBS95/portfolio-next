import Link from "next/link"

function Button({ content, link }) {
	return (
		<button className="h-[38px] text-[#d9d9d9] inline-block bg-inherit border-b-[2px] border-b-[#4ee1a0] hover:text-[#4ee1a0]">
			<Link
				href={link}
				className="font-bold uppercase text-[16px] leading-[26px] tracking-[2.29px] bg-inherit"
			>
				{content}
			</Link>
		</button>
	)
}

export default Button
