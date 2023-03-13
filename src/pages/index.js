import GithubIcon from "../components/GithubIcon.js"
import LinkedinIcon from "../components/LinkedinIcon.js"
import FrontendMentorIcon from "../components/FrontendMentorIcon.js"
import TwitterIcon from "../components/TwitterIcon.js"
import Image from "next/image"
import { skills } from "../lib/dataskills.js"
import { projects } from "../lib/dataprojects.js"
import Button from "../components/Button.js"
import Card from "../components/Card.js"

export default function Home() {
	return (
		<div className="px-4 tablet:px-8 desktop:px-[70px] largedesktop:px-[165px]">
			<header className="px-8 desktop:px-[70px] largedesktop:px-[165px] absolute bg-transparent left-[50%] translate-x-[-50%] flex flex-col items-center w-full tablet:flex-row tablet:justify-between">
				<h1 className="z-10 mt-5 mb-5 font-bold text-white text-[24px] tracking-[-0.33px] tablet:text-[32px]">
					adamkeyes
				</h1>
				<div className="flex z-10 bg-transparent">
					<a href="#" className="bg-inherit">
						<GithubIcon className="mx-[12.8px] bg-inherit" fill="#ffffff" />
					</a>
					<a href="#" className="bg-inherit">
						<FrontendMentorIcon
							className="mx-[12.8px] bg-inherit"
							fill="#ffffff"
						/>
					</a>
					<a href="#" className="bg-inherit">
						<LinkedinIcon className="mx-[12.8px] bg-inherit" fill="#ffffff" />
					</a>
					<a href="#" className="bg-inherit">
						<TwitterIcon className="mx-[12.8px] bg-inherit" fill="#ffffff" />
					</a>
				</div>
			</header>
			<section className="flex flex-col items-center mb-[80px] tablet:mb-0 tablet:flex-row-reverse">
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
						<div className="mb-6 text-[16px] tablet:text-[18px] desktop:w-[445px] bg-inherit leading-[26px] tablet:leading-[28px] tablet:mb-[46px]">
							Based in the UK, I&apos;m a front-end developer passionate about
							building accesible web apps that users love.
						</div>
						<Button className="" content="contact me" link="#" />
					</div>
				</div>
			</section>
			<section className="grid gap-6 py-8 text-center desktop:gap-y-[58px] tablet:grid-cols-2 tablet:pt-[52px] tablet:pb-[100px] border-y-[1px] desktop:grid-cols-3 desktop:pt-[72px] desktop:pb-[140px] tablet:text-start">
				{skills.map((item) => {
					return (
						<div key={item.skill}>
							<p className="font-bold text-[32px] leading-[-1px]">
								{item.skill}
							</p>
							<p>{item.experience}</p>
						</div>
					)
				})}
			</section>
			<div className="flex justify-between mt-[80px] mb-[40px]">
				<p className="font-bold leading-[40px] text-[40px]">Projects</p>
				<Button content="contact me" />
			</div>
			<section className="grid gap-6 tablet:grid-cols-2 mb-[80px]">
				{projects.map((project) => {
					return (
						<Card
							imgpath={project.imgpath}
							key={project.title}
							title={project.title}
							tech={project.tech}
							viewlink={project.viewlink}
							codelink={project.codelink}
						/>
					)
				})}
			</section>
			<section className="flex justify-center">
				<div className="max-w-[445px]">
					<h1 className="font-bold text-center text-[40px] mb-[20px] leading-[-1.14px] tablet:text-[72px] tablet:leading-[-2.05px]">
						Contact
					</h1>
					<p className="text-center leading-[26px] mb-[50px] tablet:text-[18px] tablet:leading-[28px28px] text-[#d9d9d9]">
						I would love to hear about your project and how i could help. Please
						Please fill in the form, and I&apos;ll get back to you as soon as
						possible.
					</p>
					<form className="mb-[87px]">
						<div className="border-b-[1px] mb-[11px]">
							<input
								className="py-2 px-4 w-full uppercase outline-none placeholder:uppercase"
								placeholder="name"
							/>
						</div>
						<div className="border-b-[1px] mb-[11px]">
							<input
								className="py-2 px-4 w-full uppercase outline-none placeholder:uppercase"
								placeholder="email"
							/>
						</div>
						<div className="border-b-[1px] mb-[32px]">
							<textarea
								rows="4"
								className="overflow-hidden py-2 px-4 w-full uppercase outline-none placeholder:uppercase"
								placeholder="message"
							/>
						</div>
						<div className="flex justify-end">
							<Button content="send message" link="#" />
						</div>
					</form>
				</div>
			</section>
			<footer className="flex flex-col items-center pt-[30px] pb-[60px] tablet:pb-[40px] border-t-[1px] tablet:flex-row tablet:justify-between tablet:items-center">
				<div className="z-10 mb-5 font-bold text-white text-[24px] tracking-[-0.33px] tablet:mb-0 tablet:text-[32px]">
					adamkeyes
				</div>
				<div className="flex z-10">
					<a href="#">
						<GithubIcon className="mx-[12.8px]" fill="#ffffff" />
					</a>
					<a href="#">
						<FrontendMentorIcon className="mx-[12.8px]" fill="#ffffff" />
					</a>
					<a href="#">
						<LinkedinIcon className="mx-[12.8px]" fill="#ffffff" />
					</a>
					<a href="#">
						<TwitterIcon className="mx-[12.8px]" fill="#ffffff" />
					</a>
				</div>
			</footer>
		</div>
	)
}
