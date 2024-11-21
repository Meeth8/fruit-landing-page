import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	faEnvelopeOpenText,
	faHdd,
	faPhoneAlt,
	
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactInfoList = [
	{
		icon: faEnvelopeOpenText,
		label: "leafylane@gmail.com",
		href: "mailto:leafylane@gmail.com",
	},
	{
		icon: faPhoneAlt,
		label: "+91 1234567890",
		href: "callto:+91 1234567890",
	},
	{ icon: faHdd, label: "leafylane.com", href: "leafylane.com" },
];

const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form className="" noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="4"
				></textarea>
			</div>
			<div className="text-start">
            <button className="mybtn">
  <a>Submit</a>
</button>

			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div className="bg-white dark:bg-[#71a68a] shadow-xl rounded-2xl p-6 md:p-12">
		<h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
			Contact Us
		</h2>
		<p className="text-lg mb-12">
			We list your menu online, help you process orders.
		</p>

		<ContactForm />
	</div>
);

const ContactInfo = ({ contactInfoList }) => (
	<div className="flex flex-col h-full mt-12 md:pt-6">
		{contactInfoList.map((info, i) => (
			<div
				className={classNames(
					"bg-gray-100 shadow dark:bg-[#71a68a] max-w-[350px] flex items-center rounded-xl p-5",
					{ " mt-6": i }
				)}
				key={i}
			>
				<FontAwesomeIcon icon={info.icon} className="text-3xl px-2" />
				<a className="text-lg font-medium ml-4" href={info.href || "#!"}>
					{info.label}
				</a>
			</div>
		))}
	</div>
);

ContactInfo.propTypes = {
	contactInfoList: PropTypes.array.isRequired,
};

const ContactUs12 = () => {
	return (
		<section className="ezy__contact12 light py-14 md:py-24 bg-white dark:bg-[#71a68a] text-zinc-900 dark:text-white relative overflow-hidden">
			<div
				className="absolute right-0 left-0 bottom-0 top-64 py-14 bg-cover bg-center bg-no-repeat block md:block"
				style={{
					backgroundImage:
						"url(https://cdn.easyfrontend.com/pictures/contact/contact_12.svg)",
				}}
			></div>
			<div className="container px-4 relative">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-7 xl:col-span-5 mb-12 lg:mb-0">
						<h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">
							How can we help you?
						</h2>
						<p className="text-lg">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>

						<ContactInfo contactInfoList={contactInfoList} />
					</div>
					<div className="col-span-12 lg:col-span-5 lg:col-start-8">
						<ContactFormCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs12;

