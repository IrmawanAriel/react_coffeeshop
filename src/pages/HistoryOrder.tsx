
// Importing images
import calendarIcon from '../icons/calendar.png';
import noOrderIcon from '../icons/noOrder.png';
import totalIcon from '../icons/total.png';
import statusIcon from '../icons/status2.png';
import arrowRightIcon from '../icons/Arrowkanan.png';
import blackMessageIcon from '../icons/blackMessage.png';
import p2Image from '../images/p2.png';

const HistoryOrder = () => {
    return (
        <main className="flex flex-col p-4 md:px-16 md:py-8 gap-4">

            <section className="flex flex-row gap-4 items-center">
                <p className="text-header text-wrap text-3xl font-medium">History Order</p>
                <div className="bg-gray-200 px-4 py-2 items-center">
                    2
                </div>
            </section>

            <section className="flex flex-col md:flex-row w-full gap-4">

                <div className="flex flex-col gap-2 md:gap-8 basis-3/5">

                    <div className="flex flex-row gap-2 md:gap-8 justify-between pb-4">
                        <div className="flex flex-row bg-gray-100 items-center">
                            <button className="py-2 px-4 items-center hover:bg-white">
                                On Progress
                            </button>
                            <button className="py-2 px-4 items-center hover:bg-white">Sending Goods</button>
                            <button className="py-2 px-4 items-center hover:bg-white">Finish Order</button>
                        </div>
                        <div className="flex flex-row gap-2 items-center bg-gray-100 px-4">
                            <img className="h-4 w-auto" src={calendarIcon} alt="" />
                            <p>January 2023</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-col gap-4">
                        
                        <div className="flex flex-row gap-2 md:gap-4 items-start bg-gray-100">
                            <div className="foto basis-1/5 p-4 hidden md:block">
                                <img className="w-auto h-fit" src={p2Image} alt="Sunset in the mountains" />
                            </div>

                            <div className="basis-1/5 p-4 flex flex-col gap-2 justify-center">
                                <div className="text-lg text-gray-400 flex flex-row gap-2 items-center">
                                    <img className="h-4 md:h-6" src={noOrderIcon} alt="" />
                                    <p>No Order</p>
                                </div>
                                <div className="font-bold text-lg">#12354-09893</div>
                                <a className="underline text-oren text-base">View Order Details</a>
                            </div>

                            <div className="basis-1/5 p-4 flex flex-col gap-2 justify-center">
                                <div className="text-lg text-gray-400 flex flex-row gap-2 items-center">
                                    <img className="h-4 md:h-6" src={calendarIcon} alt="" />
                                    <p>Date</p>
                                </div>
                                <div className="font-bold text-lg">23 January</div>
                            </div>

                            <div className="basis-1/5 p-4 flex flex-col gap-2 justify-center">
                                <div className="text-lg text-gray-400 flex flex-row gap-2 items-center">
                                    <img className="h-4 md:h-6" src={totalIcon} alt="" />
                                    <p>Total</p>
                                </div>
                                <div className="font-bold text-lg">Idr 40.0000</div>
                            </div>

                            <div className="basis-1/5 p-4 flex flex-col gap-2 justify-center">
                                <div className="text-lg text-gray-400 flex flex-row gap-2 items-center">
                                    <img className="h-4 md:h-6" src={statusIcon} alt="" />
                                    <p>Status</p>
                                </div>
                                <div className="font-semibold bg-orange-300 w-fit rounded-xl md:rounded-3xl p-4 text-base">On Progress</div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 md:gap-4 items-start bg-gray-100">
                            <div className="foto basis-1/5 p-4 hidden md:block">
                                <img className="w-auto h-fit" src={p2Image} alt="Sunset in the mountains" />
                            </div>

                            <div className="basis-1/5 p-4 flex flex-col gap-2 justify-center">
                                <div className="text-lg text-gray-400 flex flex-row gap-2 items-center">
                                    <img className="h-4 md:h-6" src={noOrderIcon} alt="" />
                                    <p>No Order</p>
                                </div>
                                <div className="font-bold text-lg">#12354-09893</div>
                                <a className="underline text-oren text-base">View Order Details</a>
                            </div>

                            <div className="basis-1/5 p-4 flex flex-col gap-2 justify-center">
                                <div className="text-lg text-gray-400 flex flex-row gap-2 items-center">
                                    <img className="h-4 md:h-6" src={calendarIcon} alt="" />
                                    <p>Date</p>
                                </div>
                                <div className="font-bold text-lg">23 January</div>
                            </div>

                            <div className="basis-1/5 p-4 flex flex-col gap-2 justify-center">
                                <div className="text-lg text-gray-400 flex flex-row gap-2 items-center">
                                    <img className="h-4 md:h-6" src={totalIcon} alt="" />
                                    <p>Total</p>
                                </div>
                                <div className="font-bold text-lg">Idr 40.0000</div>
                            </div>

                            <div className="basis-1/5 p-4 flex flex-col gap-2 justify-center">
                                <div className="text-lg text-gray-400 flex flex-row gap-2 items-center">
                                    <img className="h-4 md:h-6" src={statusIcon} alt="" />
                                    <p>Status</p>
                                </div>
                                <div className="font-semibold bg-orange-300 w-fit rounded-xl md:rounded-3xl p-4 text-base">On Progress</div>
                            </div>
                        </div>
                        

                    </div>

                    <div className="flex flex-row gap-4 items-center justify-center">
                        <div className="bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">1</div>
                        <div className="bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">2</div>
                        <div className="bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">3</div>
                        <div className="bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">4</div>
                        <div className="bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
                            <img className="h-6 w-4" src={arrowRightIcon} alt="" />
                        </div>
                    </div>

                </div>

                <div className="flex-col flex basis-2/5 gap-4 p-4 border-2 h-fit">
                    <img className="h-6 w-fit" src={blackMessageIcon} alt="" />
                    <p className="text-lg font-semibold">Send Us message</p>
                    <textarea name="" id="">If you're unable to find answers or your product quickly, please describe your problem and tell us. We will provide you with a solution.</textarea>
                    <button className="w-full py-4 text-md bg-oren rounded-xl">Send Message</button>
                </div>

            </section>

        </main>
    );
}

export default HistoryOrder;
