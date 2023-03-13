import Button from "./Button.js"

function About() {
	return (
		<section
			id="about"
			className="px-4 tablet:px-8 desktop:px-[70px] largedesktop:px-[165px]"
		>
			<div className="flex flex-col items-center mb-[80px] tablet:mb-0 tablet:flex-row-reverse">
				<img
					className="h-auto mb-[40px] w-[174px] tablet:hidden"
					src="/image-profile-mobile.webp"
					alt="profile"
				/>
				<img
					className="hidden h-auto w-[332px] mr-[-32px] mb-[60px] tablet:block desktop:hidden"
					src="/image-profile-tablet.webp"
					alt="profile"
				/>
				<img
					className="hidden w-[445px] mb-[60px] desktop:block"
					src="/image-profile-desktop.webp"
					alt="profile"
				/>
				<div className="">
					<div className="z-20 text-center bg-transparent tablet:pl-8 desktop:top-[198px] desktop:pl-[70px] largedesktop:pl-[165px] tablet:absolute tablet:h-[600px] tablet:top-[151px] tablet:left-0 tablet:w-[480px] tablet:text-start">
						<div className="mb-6 font-bold largedesktop:mb-[43px] text-[40px] tablet:hidden desktop:text-[88px] desktop:leading-[88px] desktop:block bg-inherit tracking-[-1.14px] leading-[40px] desktop:w-[730px]">
							Nice to meet you! I&apos;m{" "}
							<span className="border-b-[4px] inline-block bg-inherit border-b-[#4ee1a0]">
								Adam Keyes
							</span>
							.
						</div>
						<div className="hidden font-bold bg-transparent desktop:hidden tablet:block mb-[60px] text-[72px] h-min leading-[72px] tracking-[-2.05px]">
							<h1 className="bg-inherit">Nice to</h1>
							<h1 className="bg-inherit">meet you! I&apos;m</h1>
							<h1 className="bg-inherit inline-block border-b-[4px] border-b-[#4ee1a0]">
								Adam Keyes
							</h1>
							<span className="bg-inherit">.</span>
						</div>
						<div className="mb-6 font-medium text-[16px] tablet:text-[18px] desktop:w-[445px] bg-inherit leading-[26px] tablet:leading-[28px] tablet:mb-[46px]">
							Based in the UK, I&apos;m a front-end developer passionate about
							building accesible web apps that users love.
						</div>
						<Button className="" content="contact me" link="#contact" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
