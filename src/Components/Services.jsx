function Services(props) {

  return (
    <>
        <div className='pb-10'>
            <h1 className='text-5xl text-[#00246B] font-bold ml-42 mb-2 mt-8'>Services</h1>
            <p className=" text-xl font-bold ml-40 text-black">
                We offer a wide range of services to meet your needs.
            </p>
            <div className='flex w-[80%] flex-wrap justify-center gap-15 mx-auto mt-10'>
                {props.services.map((service, index) => (
                    <div key={service.id} className='Card bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-64 w-68 hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <div className='h-[70%] w-full'>
                            <img
                                src={service.image}
                                alt={service.title}
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <div className='h-[30%] px-3 bg-opacity-50 bg-[#00246B] flex items-center justify-center'>
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