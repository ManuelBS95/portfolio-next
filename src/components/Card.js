import Button from "../components/Button.js"

function Card({ imgpath, title, tech, viewlink, codelink }) {
	return (
		<article className="relative bg-transparent mb-[40px]">
			<div className="relative">
				<img src={imgpath} className="mb-5 w-full" alt={"img " + title} />
				<div className="hidden absolute top-0 w-full h-full bg-transparent opacity-0 hover:bg-black hover:opacity-75 desktop:block">
					<div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-transparent gap-[30px] desktop:flex desktop:flex-col">
						<Button content="view project" link={viewlink} />
						<Button content="view code" link={codelink} />
					</div>
				</div>
			</div>
			<h1 className="font-bold uppercase text-[24px] mb-[7px]">{title}</h1>
			<div className="mb-5">
				{tech.map((item) => {
					return (
						<label
							key={item}
							className="uppercase font-medium text-[#d9d9d9] mr-[18px]"
						>
							{item}
						</label>
					)
				})}
			</div>
			<div className="flex bg-transparent gap-[30px] desktop:hidden">
				<Button content="view project" link={viewlink} />
				<Button content="view code" link={codelink} />
			</div>
		</article>
	)
}

export default Card
