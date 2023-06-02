import Links from "./Links.js"

function Header() {
	return (
		<header className="relative z-50 px-4 tablet:px-8 desktop:px-[70px] largedesktop:px-[165px]">
			<div className="px-8 desktop:px-[70px] largedesktop:px-[165px] absolute bg-transparent left-[50%] translate-x-[-50%] flex flex-col items-center w-full tablet:flex-row tablet:justify-between">
				<h1 className="z-10 mt-5 mb-5 font-bold text-white text-[24px] tracking-[-0.33px] tablet:text-[32px]">
					adamkeyes
				</h1>
				<Links />
			</div>
		</header>
	)
}

export default Header
