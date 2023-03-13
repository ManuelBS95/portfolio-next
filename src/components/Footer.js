import Links from "./Links.js"

function Footer() {
	return (
		<footer className="bg-[#242424] px-4 tablet:px-8 desktop:px-[70px] largedesktop:px-[165px]">
			<div className="flex flex-col items-center bg-inherit pt-[30px] pb-[60px] tablet:pb-[40px] border-t-[1px] tablet:flex-row tablet:justify-between tablet:items-center">
				<div className="z-10 mb-5 font-bold text-white bg-inherit text-[24px] tracking-[-0.33px] tablet:mb-0 tablet:text-[32px]">
					adamkeyes
				</div>
				<Links />
			</div>
		</footer>
	)
}

export default Footer
