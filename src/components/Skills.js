import { skills } from "../lib/dataskills.js"

function Skills() {
	return (
		<section
			id="skills"
			className="overflow-hidden relative px-4 tablet:px-8 desktop:px-[70px] largedesktop:px-[165px]"
		>
			<div className="grid gap-6 py-8 text-center desktop:gap-y-[58px] tablet:grid-cols-2 tablet:pt-[52px] tablet:pb-[100px] border-y-[1px] desktop:grid-cols-3 desktop:pt-[72px] desktop:pb-[140px] tablet:text-start">
				{skills.map((item) => {
					return (
						<div key={item.skill} className="tablet:mb-[52px]">
							<p className="font-bold tablet:mb-3 text-[32px] leading-[40px] tablet:text-[48px] tablet:leading-[56px]">
								{item.skill}
							</p>
							<p className="font-medium">{item.experience}</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Skills
