import Button from "./Button";

const HomePage = () => {
	return (
		<>
			<div className="h-[100%]-16 p-20 flex">
				<div className="leftSide w-[50%] p-10">
					<h1 className="text-5xl font-bold text-[#00246B] mb-[10]  ml-7">
						HomeMaid
					</h1>
					
					<p className="m-5 mt-12 text-3xl text-black leading-9 flex space-x">
						Your trusted platform to hire reliable maids and househelps for all
						your household chores. Book services easily and pay as per the rates
						mentioned, all from the comfort of your home.
					</p>

					<div className="flex gap-8 mt-25 ml-10">
						<Button content="Login" />
						<Button content="Sign Up"/>
					</div>
				</div>

				<div className="rightSide">
					<img src="output.png" alt="" />
				</div>
			</div>
		</>
	);
};


export default HomePage;