import Card from "./Card.js"
import Button from "./Button.js"
import { projects } from "../lib/dataprojects.js"

function Projects() {
	return (
		<section
			id="projects"
			className="px-4 tablet:px-8 desktop:px-[70px] largedesktop:px-[165px]"
		>
			<div className="flex justify-between mt-[80px] mb-[40px]">
				<p className="font-bold leading-[40px] text-[40px]">Projects</p>
				<Button content="contact me" link="#contact" />
			</div>
			<div className="grid gap-6 tablet:grid-cols-2 mb-[80px]">
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
			</div>
		</section>
	)
}

export default Projects
