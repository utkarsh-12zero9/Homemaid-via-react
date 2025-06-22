
function Card(props) {
  return(
    <div className="h-70 w-[25%] rounded-2xl overflow-hidden flex flex-col bg-[#0f285e] text-white cursor-pointer hover:scale-103 shadow-2xl">
        <div className="h-[70%]">
            <img className="w-full h-[100%] flex overflow-hidden" src="#" alt="" />
        
            <h2 className="text-2xl h-full py-7 font-bold text-center">
                Name
            </h2>
        </div>
    </div>
  )
}

export default Card;