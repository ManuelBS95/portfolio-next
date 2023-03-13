import Button from "./Button.js"

function Contact() {
	return (
		<section
			id="contact"
			className="bg-[#242424] px-4 tablet:px-8 desktop:px-[70px] largedesktop:px-[165px]"
		>
			<div className="flex relative justify-center bg-inherit pt-[60px] tablet:pt-[60px] desktop:pt-[80px]">
				<div className="z-20 bg-transparent max-w-[445px] desktop:grid desktop:grid-cols-2 desktop:gap-[110px] desktop:max-w-full largedesktop:gap-[220px]">
					<div className="bg-inherit">
						<h1 className="font-bold text-center bg-inherit desktop:text-left text-[40px] mb-[20px] leading-[-1.14px] tablet:text-[72px] tablet:leading-[-2.05px]">
							Contact
						</h1>
						<p className="text-center font-medium bg-inherit desktop:text-left leading-[26px] mb-[50px] tablet:text-[18px] tablet:leading-[28px28px] text-[#d9d9d9]">
							I would love to hear about your project and how i could help.
							Please Please fill in the form, and I&apos;ll get back to you as
							soon as possible.
						</p>
					</div>
					<form className="font-medium mb-[87px] bg-inherit">
						<div className="border-b-[1px] mb-[11px] bg-inherit">
							<input
								className="py-2 px-4 w-full uppercase outline-none bg-inherit placeholder:uppercase"
								placeholder="name"
							/>
						</div>
						<div className="border-b-[1px] mb-[11px] bg-inherit">
							<input
								className="py-2 px-4 w-full uppercase outline-none bg-inherit placeholder:uppercase"
								placeholder="email"
							/>
						</div>
						<div className="border-b-[1px] mb-[32px] bg-inherit">
							<textarea
								rows="4"
								className="overflow-hidden py-2 px-4 w-full uppercase outline-none bg-inherit placeholder:uppercase"
								placeholder="message"
							/>
						</div>
						<div className="flex justify-end bg-transparent">
							<Button content="send message" link="/" />
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
