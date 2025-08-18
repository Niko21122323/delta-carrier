import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import BannerComponent from "@/components/BannerComponent";
import TitleComponent from "@/components/TitleComponent";
import { articles, blogs } from "@/ts/data";
import type { ArticleProps, BlogProps } from "@/ts/types";

const page = () => {
	return (
		<main>
			<BannerComponent
				title="Blog Posts"
				text="Stay informed with industry insights, driver stories, and logistics trends that matter. At Delta Carrier Group, we share what moves the road ahead—because knowledge drives success."
			/>
			<section className="py-12 md:py-20 lg:py-24">
				<div className="container mx-auto px-4 lg:px-6">
					<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-10 pb-6 sm:pb-8 lg:pb-12">
						<div className="lg:flex lg:flex-shrink-0">
							<TitleComponent title="Our Blog Posts" subtitle="Blogs" />
						</div>
						<p className="text-body lg:max-w-[632px]">
							Explore insights from the road, expert tips for owner-operators,
							and stories that drive our industry forward. Whether you're behind
							the wheel or behind the scenes, there's something here for you.
						</p>
					</div>

					<div className="grid max-[550px]:grid-cols-1 grid-cols-2 xl:grid-cols-3 xl:grid-rows-3 gap-4 2xl:gap-6">
						{blogs.map((blog: BlogProps) => (
							<Link
								href={blog.link}
								key={blog.id}
								className={`relative overflow-hidden bg-light hover:bg-light/0 transition-colors duration-300 ease-in-out xl:first:row-span-3 xl:nth-[2]:row-span-3 group ${blog.id === 1 || blog.id === 2 ? "flex flex-col p-3 md:p-4 rounded-lg sm:rounded-xl xl:rounded-2xl" : "flex flex-col p-3 md:p-4 rounded-lg sm:rounded-xl xl:grid xl:grid-cols-12 xl:items-center xl:gap-4 xl:rounded-lg xl:p-3"}`}
							>
								<div
									className={`relative z-10 overflow-hidden max-md:max-h-[172px] ${blog.id === 1 || blog.id === 2 ? "rounded-lg sm:rounded-xl h-full w-full" : "rounded-lg sm:rounded-xl xl:rounded-lg h-full w-full xl:col-span-4"}`}
								>
									<Image
										src={blog.image}
										alt={blog.title}
										className={`h-full w-full object-cover object-center`}
									/>
								</div>
								<div
									className={`relative z-10 ${blog.id === 1 || blog.id === 2 ? "pt-6" : "pt-6 xl:pt-0 xl:col-span-8"}`}
								>
									<div className="flex items-center gap-2">
										<span className="text-dark text-sm group-hover:text-white/90 transition-colors duration-300 ease-in-out">
											{blog.name}
										</span>
										<div className="size-1 bg-accent-light rounded-full group-hover:bg-white transition-colors duration-300 ease-in-out"></div>
										<span className="text-body text-sm group-hover:text-white/70 transition-colors duration-300 ease-in-out">
											{blog.read}
										</span>
									</div>
									<h4 className="text-dark text-lg sm:text-xl font-semibold pt-2 group-hover:text-white transition-colors duration-300 ease-in-out">
										{blog.title}
									</h4>
									{blog.text && (
										<p className="text-body pt-3 group-hover:text-white transition-colors duration-300 ease-in-out">
											{blog.text}
										</p>
									)}
									<div className="flex items-center gap-2 mt-4 md:mt-7">
										<span className="text-accent-light text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
											Read More
										</span>
										<FaChevronRight className="text-accent-light group-hover:text-white transition-colors duration-300 ease-in-out" />
									</div>
								</div>

								<div className="absolute bottom-0 left-0 w-full h-0 blog-hover-gradient group-hover:h-full transition-all duration-300 ease-in-out"></div>
							</Link>
						))}
					</div>
				</div>
			</section>
			<section className="pb-12 md:pb-20 lg:pb-24">
				<div className="container mx-auto px-4 lg:px-6">
					<div className="flex flex-col items-center justify-center pb-6 sm:pb-8 lg:pb-12">
						<TitleComponent
							title="Rest of Our Articles"
							subtitle="Articles"
							position="center"
						/>
						<p className="text-body text-center max-w-[632px] pt-4 lg:pt-6">
							At Delta Carrier Group, we value independence, integrity, and hard
							work. Join a team that supports your goals and rewards your
							performance.
						</p>
					</div>
					<div className="grid max-[550px]:grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 2xl:gap-6">
						{articles.map((article: ArticleProps) => (
							<div
								key={article.id}
								className="flex flex-col rounded-lg md:rounded-xl bg-light p-3 md:p-4"
							>
								<div className="rounded-lg md:rounded-xl overflow-hidden">
									<Image
										src={article.image}
										alt={article.title}
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="flex items-center gap-2 pt-5">
									<span className="text-dark text-sm">{article.name}</span>
									<div className="size-1 bg-accent-light rounded-full"></div>
									<span className="text-body text-sm">{article.read}</span>
								</div>
								<h4 className="text-lg md:text-xl text-dark font-semibold pt-2 pb-3">
									{article.title}
								</h4>
								<p className="text-body">{article.text}</p>
								<Link
									href={article.link}
									className="flex items-center gap-2 mt-4 md:mt-5"
								>
									<span className="text-accent-light text-lg font-semibold">
										Read More
									</span>
									<FaChevronRight className="text-accent-light" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default page;
