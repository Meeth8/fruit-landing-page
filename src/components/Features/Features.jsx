import React from "react";
import PropTypes from "prop-types";

const features = [
	{
		title: "Fresh Fruits",
		description:
			"Fruit that’s fresher than your latest Insta post!",
		image: "https://img.freepik.com/free-photo/pile-fresh-fruits_144627-17253.jpg?t=st=1718433654~exp=1718437254~hmac=0fa3e3ec444b7f6c58b92c811bd5f027cc25ce18bca776c1f19bb94172695036&w=1060",
	},
	{
		title: "Fruits juice",
		description:
			"Our juice is a TikTok trend! Sip, share, and watch the likes pour in—pure refreshment!",
		image: "https://img.freepik.com/free-photo/side-view-organic-fresh-juices-bottles-served-with-tubes-fruits-wooden-cutting-board_140725-94665.jpg?t=st=1718433831~exp=1718437431~hmac=332ecf6ba357999ea0c078247e1367c785e4d025ce28d4580d908ec26ecb446c&w=1060",
	},
	{
		title: "Avacado Juice",
		description:
			"Green and clean—our avocado juice is the main character!",
		image: "https://img.freepik.com/free-photo/natural-smoothies-with-avocado_23-2148574134.jpg?t=st=1718433901~exp=1718437501~hmac=1df8890cb365214b54c274d535a024fd586514741911653c665d7a29799ee33f&w=1060",
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div data-aos='fade-up' 
		data-aos-delay='300' className="bg-green-50 text-black rounded-[20px] relative p-6 lg:p-12">
			<img
				src={feature.image}
				alt=""
				className="h-auto max-w-full rounded-xl mx-auto mb-6"
			/>
			<h4 className="text-2xl leading-6 font-bold mb-4 text-green-600">{feature.title}</h4>
			<p className="opacity-70">{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const Feature13 = () => {
	return (
		<section className="ezy__featured13 light py-14 md:py-24 bg-white text-black-600">
			<div className="container px-4">
				<div className="grid grid-cols-12 mb-12">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:px-14 text-center">
						<h2  className="text-[25px] md:text-[45px] leading-none font-bold mb-6">
						Don’t ghost good taste—our fruits are fresh and lit!
						</h2>
						{/* <p className="text-lg leading-6 mb-6">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
						</p> */}
					</div>
				</div>

				<div className="grid grid-cols-12 gap-6 text-center">
					{features.map((feature, i) => (
						<div className="col-span-12 md:col-span-4" key={i}>
							<FeatureItem feature={feature} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

// Default export for the main component
export default Feature13;

// Named exports for the sub-component and features data
export { FeatureItem, features };