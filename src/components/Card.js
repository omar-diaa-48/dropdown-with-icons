import React from "react";

export default function Card(props) {
	const {
		title, description, sizesPrices, images
	} = props;

	const imageObj = images?.find(image => {
		const { target } = image;
		return target === "item" || target === "en_item" || target === "ar_item";
	})

	const sizePrice = sizesPrices?.sort((a, b) => a.total_price - b.total_price)[0]

	return (
		<div className="overflow-hidden shadow rounded p-4 cursor-pointer hover:shadow-xl hover:translate-y-2 transition ease-in-out">
			<img className="w-full h-48 sm:h-60 mb-2 object-cover" src={imageObj?.s3_link} alt={imageObj?.image_alt} />
			<h4 className="font-bold uppercase">{title}</h4>
			<h6 className="text-gray-600">{description}</h6>
			<div className="flex items-end">
				<span className="font-bold flex-grow">EGP {sizePrice?.total_price}</span>
				<div className="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider bg-white text-red-400 hover:bg-red-400 hover:text-white" href="/">Add</div>
			</div>
		</div>
	)
}

Card.defaultProps = {
	title: "Product",
	description: "A very recommended product",
	images: [],
	sizesPrices: []
}