import { useState } from "react";


function App() {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen((prevValue) => !prevValue);

	return (
		<nav>
			<div className="flex flex-col gap-y-4 justify-start  items-center">
				<div
					onClick={handleClick}
					className={`${isOpen ? "rotate-45" : "-rotate-45 bg-white"} z-30 ease-in-out duration-500`}
				>
					<img src="/images/main.png" className="cursor-pointer w-16" alt="main" />
				</div>

				<a
					href="#account"
					className={`absolute ${isOpen ? "top-24" : "top-0"} cursor-pointer w-16 ease-in-out duration-500 z-20`}
					onClick={handleClick}
				>
					<img src="/images/sec-1.png" alt="sec-1" />
				</a>
				<a
					href="#orders"
					className={`absolute ${isOpen ? "top-44" : "top-0"} cursor-pointer w-16 ease-in-out duration-500 z-10`}
					onClick={handleClick}
				>
					<img src="/images/sec-2.png" alt="sec-2" />
				</a>
			</div>
		</nav>
	);
}

export default App;
