function Services(props) {

	return (
		<>
			<div className='pb-10'>
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00246B] mb-6 sm:mb-8 mt-10 sm:mt-20 ml-5 sm:ml-40">
					Services
				</h1>
				<p className="w-full sm:w-[90%] md:w-[83%] text-base sm:text-lg md:text-xl text-black leading-6 md:leading-9 flex font-semibold mb-6 sm:mb-10 ml-5 sm:ml-40"> 
					We offer a wide range of services to meet your needs.
				</p>
				<div className='flex w-[80%] flex-wrap justify-center gap-15 mx-auto mt-10'>
					{props.services.map((service) => (
						<div key={service.id} className='Card bg-white rounded-lg  overflow-hidden flex flex-col h-64 w-68 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out'>
							<div className='h-[70%] w-full'>
								<img
									src={service.image}
									alt={service.title}
									className='object-cover w-full h-full'
								/>
							</div>
							<div className='h-[30%] px-3 bg-opacity-50 bg-[#00246B] flex flex-col items-center justify-center gap-3'>
								<span className='text-xl font-semibold text-white'>{service.title}</span>
							</div>
						</div>
					))
				}
				</div>
			</div>

		</>
	);
}

export default Services;