function Button(props) {
  return (
    <>
      <button className="px-8 py-2 border rounded-full bg-[#00246B] text-white font-bold cursor-pointer shadow-md hover:scale-105 transition-transform duration-300 ease-in-out "> {props.content} </button>
    </>
  );
}

export default Button;
