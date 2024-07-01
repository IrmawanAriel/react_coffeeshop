// import kopidetail from '../images/kopidetail.png';
import arrowKanan from '../icons/Arrowkanan.png'
import ProductDetail from '../components/ProductDetail';
import Cards from '../components/Cards';

export default function DetailProduct () {
    return (

        <main className="px-16 py-8 flex gap-16 flex-col">
            {/* detail product */}

            <ProductDetail/>

            {/* Cards Product */}
            <section className="flex flex-col gap-8">
                <div className='px-8'>
                    <p className="md:text-5xl text-3xl font-semibold md:font-medium">Recommendation <span className='text-[#8E6447]'>For You</span> </p>
                </div>
                <Cards props={undefined}/>
                <div className="flex flex-row gap-4 items-center justify-center">
                    <div className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">1</div>
                    <div  className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">2</div>
                    <div  className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">3</div>
                    <div  className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">4</div>
                    <div  className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
                        <img className="h-6 w-4"  src={arrowKanan} alt="" />
                    </div>
                </div>
            </section>
        </main>

    )
}