import Image from "next/image";
import img3 from "../public/assets/pohots/home/07.jpg";
import img2 from "../public/assets/pohots/home/08.jpg";
import img1 from "../public/assets/pohots/home/09.jpg";
import TitleComponent from "./TitleComponent";

const RequirementsSection = () => {
	return (
		<section className="bg-dark py-[72px]">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid grid-cols-2 items-center gap-7 lg:gap-6 xl:gap-10 2xl:gap-20">
					<div className="grid grid-cols-2 gap-6">
						<div className="h-full w-full rounded-2xl overflow-hidden">
							<Image
								src={img1}
								alt="requirements image"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="h-full w-full rounded-2xl overflow-hidden">
							<Image
								src={img2}
								alt="requirements image"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="h-full w-full rounded-2xl overflow-hidden col-span-2">
							<Image
								src={img3}
								alt="requirements image"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>

					<div className="">
						<TitleComponent
							title="Requirements to Join"
							subtitle="Want to join?"
							variant="dark"
						/>
						<p className="text-white/70 pt-4 lg:pt-8">
							At Delta Carrier Group, we partner with experienced, independent
							professionals who are ready to run on their own terms. To maintain
							our high standards and strong reputation, we require the
							following:
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RequirementsSection;
