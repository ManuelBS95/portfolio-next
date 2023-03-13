import Link from "next/link"

function Button({ content, link }) {
	return (
		<div className="h-[38px] text-[#d9d9d9] inline-block border-b-[2px] border-b-[#4ee1a0]">
			<Link
				href="https://github.com/"
				className="text-[16px] font-bold leading-[26px] tracking-[2.29px] uppercase"
			>
				{content}
			</Link>
		</div>
	)
}

export default Button
