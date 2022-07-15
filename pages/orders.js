import React from 'react'

function orders() {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden" >
                <div className="container px-5 py-24 mx-auto" >
                    <div className="lg:w-4/5 mx-auto flex flex-wrap" >
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" >
                            <h2 className="text-sm title-font text-gray-500 tracking-widest" >ECOMMERCE</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4" >Order id: #6789</h1>
                            <p className="leading-relaxed mb-4 text-lime-600" >Order is sucessfully placed</p>
                            <div className="flex mb-4" >
                                <a className="flex-grow  border-gray-300 border-b-2 py-2 text-lg px-1" >Description</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1" >Quantity</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1" >Item Total</a>
                            </div>
                            <div className="flex   py-2" >
                                <span className="text-gray-500" >Wear the code (BLUE/XL)</span>
                                <span className="ml-auto text-gray-900" >1</span>
                                <span className="mx-auto text-gray-900" >₹555</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2" >
                                <span className="text-gray-500" >Wear the code (BLUE/XL)</span>
                                <span className="ml-auto text-gray-900" >1</span>
                                <span className="mx-auto text-gray-900" >₹555</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2" >
                                <span className="text-gray-500" >Wear the code (RED/S)</span>
                                <span className="ml-auto text-gray-900" >1</span>
                                <span className="mx-auto text-gray-900" >₹555</span>
                            </div>
                            <div className="flex flex-col" >
                                <span className="title-font font-medium text-2xl text-gray-900" >SubTotal: ₹5558.00</span>
                                <button className="flex mx-0 w-auto max-w-[10rem] text-white bg-orange-500 border-0 py-2 mt-4 px-8 focus:outline-none hover:bg-orange-600 rounded" >Track Order</button>

                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default orders