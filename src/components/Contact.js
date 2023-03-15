import { useState } from "react"

function Contact() {
	const [email, setEmail] = useState()
	const [error, setError] = useState("")

	const handleChange = (e) => {
		e.preventDefault()
		setEmail(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!email || email.length === 0) {
			setError("Email cannot be empty")
		} else if (!/@/.test(email)) {
			setError("Sorry, invalid format here")
		}
	}

	return (
		<section
			id="contact"
			className="bg-[#242424] px-4 tablet:px-8 desktop:px-[70px] largedesktop:px-[165px]"
		>
			<div className="flex relative justify-center bg-inherit pt-[60px] tablet:pt-[60px] desktop:pt-[80px]">
				<div className="z-20 bg-transparent max-w-[445px] desktop:grid desktop:grid-cols-2 desktop:gap-[110px] desktop:max-w-full largedesktop:gap-[220px]">
					<div className="bg-inherit">
						<h1 className="font-bold text-center bg-inherit desktop:text-left text-[40px] mb-[20px] leading-[-1.14px] tablet:text-[72px] tablet:leading-[72px] desktop:text-[88px] desktop:leading-[88px]">
							Contact
						</h1>
						<p className="text-center font-medium bg-inherit desktop:text-left leading-[26px] mb-[50px] tablet:text-[18px] tablet:leading-[28px28px] text-[#d9d9d9]">
							I would love to hear about your project and how i could help.
							Please Please fill in the form, and I&apos;ll get back to you as
							soon as possible.
						</p>
					</div>
					<form
						className="font-medium mb-[87px] bg-inherit"
						onSubmit={handleSubmit}
					>
						<div className="relative h-[63px] bg-inherit">
							<input
								className="py-2 px-4 w-full uppercase outline-none border-b-[1px] bg-inherit placeholder:uppercase"
								placeholder="name"
								name="name"
							/>
						</div>
						<div className="relative h-[63px] bg-inherit">
							<input
								className="py-2 px-4 w-full uppercase outline-none border-b-[1px] bg-inherit placeholder:uppercase"
								placeholder="email"
								name="email"
								onChange={handleChange}
							/>
							<label className="absolute right-0 bottom-0 font-bold text-[#FF6F5B] text-[12px]">
								{error}
							</label>
						</div>
						<div className="relative border-b-[1px] mb-[32px] bg-inherit">
							<textarea
								rows="4"
								className="overflow-hidden py-2 px-4 w-full uppercase outline-none bg-inherit placeholder:uppercase"
								placeholder="message"
								name="message"
							/>
						</div>
						<div className="flex justify-end bg-transparent">
							<button className="h-[38px] text-[#d9d9d9] inline-block bg-inherit border-b-[2px] border-b-[#4ee1a0] hover:text-[#4ee1a0]">
								<p className="font-bold uppercase text-[16px] leading-[26px] tracking-[2.29px] bg-inherit">
									send message
								</p>
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
