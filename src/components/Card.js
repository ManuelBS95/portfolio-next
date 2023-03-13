import Button from "../components/Button.js"

function Card({ imgpath, title, tech, viewlink, codelink }) {
	return (
		<article className="mb-[40px]">
			<img src={imgpath} className="mb-5 w-full" alt={"img " + title} />
			<h1 className="uppercase text-[24px] font-bold mb-[7px]">{title}</h1>
			<div className="mb-5">
				{tech.map((item) => {
					return (
						<label key={item} className="uppercase text-[#d9d9d9] mr-[18px]">
							{item}
						</label>
					)
				})}
			</div>
			<div className="flex gap-[30px]">
				<Button content="view project" link={viewlink} />
				<Button content="view code" link={codelink} />
			</div>
		</article>
	)
}

export default Card
