import React from "react";
import PropTypes from "prop-types";

const cards = [
	{
		count: "832",
		title: "Completed Orders",
	},
	{
		count: "510",
		title: "Community Outreach",
	},
	{
		count: "441",
		title: "Eco-Warrior Awards",
	},
	{
		count: "313",
		title: "Food Donation Drive",
	},
];

const CardItem = ({ item }) => (
	<>
		<h3 data-aos='fade-up' 
		data-aos-delay='300' className="text-[45px] text-green-600 font-black mb-2">{item.count}</h3>
		<h5 data-aos='fade-up' 
		data-aos-delay='300' className="text-lg font-medium opacity-80">{item.title}</h5>
	</>
);

CardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Numbers7 = () => {
	return (
		<section id="numberscroll" className="ezy__numbers7 light py-14 md:py-24 bg-white dark:bg-[white] text-zinc-900 dark:text-black">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col justify-center text-center max-w-6xl mx-auto">
					<h1 className="text-3xl md:text-[45px] font-bold mb-6">
						Lets reveal something!
					</h1>
					<p className="text-lg opacity-80 max-w-4xl mx-auto">
					From efficient order fulfillment to community engagement, sustainability awards, and meal donations, we're making a positive impact in every aspect of our grocery store operations.
					</p>
				</div>
				<div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto text-center mt-12">
					{cards.map((item, i) => (
						<div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
							<CardItem item={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Numbers7