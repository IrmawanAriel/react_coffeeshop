
import nullSign from "../assets/nullSign.png"

 function chooseYourProduct() {
  return (
    <div className='w-fit h-[300px] flex flex-col gap-4 bg-red-300 rounded rounded-xl p-8 justify-center items-center'>
        <img className='w-[170px] h-[170px] object-cover' src={nullSign} alt="" />
        <p className="text-3xl font-semibold">Let's get your product first!</p>
    </div>
  )
}

export default chooseYourProduct;