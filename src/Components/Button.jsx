function Button(props) {
  return (
    <>
      <button className="px-8 py-2 border rounded-full bg-[#00246B] text-white font-bold cursor-pointer hover:scale-110 "> {props.content} </button>
    </>
  );
}

export default Button;
