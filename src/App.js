import axios from "axios";
import { useEffect, useState } from "react";

import Card from "./components/Card";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:1337/menu-items')
			.then(response => response.data.data)
			.then(menuItems => setData(menuItems))
	}, [])

	return (
		<div className="flex">
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 bg-gray-100">
				{data.map(item => (
					<Card key={item.id} title={item.en_title} description={item.en_description} sizesPrices={item.sizes_prices} images={item.images} />
				))}
			</div>
		</div>
	);
}

export default App;
