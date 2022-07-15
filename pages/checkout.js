import { React, useRef } from 'react'
import Link from "next/link";
import {  AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
function checkout({ cart, clearCart, subTotal, addToCart, removeFromCart }) {
  const ref = useRef()
  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>CheckOut</h1>

      <h2 className='font-bold text-xl px-2'>1. Delivery Details </h2>

      <div className='flex flex-col'>
        <div className="flex w-full my-2 ">
          <div className='w-1/2 mx-2'>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Name' className='border p-2 h-8 rounded-sm focus:outline-none focus:border-b-2 focus:border-t-0 focus:shadow-sm w-full' />
          </div>
          <div className='w-1/2 mx-2'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Email' name='email' className='border p-2 h-8 rounded-sm focus:outline-none focus:border-b-2 focus:border-t-0 focus:shadow-sm w-full' />
          </div>
        </div>


        <div className="flex w-full my-2 ">
          <div className=' w-full mx-2'>
            <label htmlFor="address">Address</label>
            <textarea type="text" name='address' placeholder='address' className='border p-2 rounded-sm focus:outline-none focus:border-b-2 focus:border-t-0 focus:shadow-sm w-full' />
          </div>
        </div>

        <div className="flex w-full my-2 ">
          <div className='w-1/2 mx-2'>
            <label htmlFor="phone">Phone</label>
            <input type="number" name='phone' placeholder='Phone No.' className='border p-2 h-8 rounded-sm focus:outline-none focus:border-b-2 focus:border-t-0 focus:shadow-sm w-full' />
          </div>
          <div className='w-1/2 mx-2'>
            <label htmlFor="text">City</label>
            <input type="text" placeholder='City' name='city' className='border p-2 h-8 rounded-sm focus:outline-none focus:border-b-2 focus:border-t-0 focus:shadow-sm w-full' />
          </div>
        </div>

        <div className="flex w-full my-2 ">
          <div className='w-1/2 mx-2'>
            <label htmlFor="name">State</label>
            <input type="text" name='state' placeholder='State' className='border p-2 h-8 rounded-sm focus:outline-none focus:border-b-2 focus:border-t-0 focus:shadow-sm w-full' />
          </div>
          <div className='w-1/2 mx-2'>
            <label htmlFor="email">Pin Code</label>
            <input type="number" placeholder='Pincode' name='pin' className='border p-2 h-8 rounded-sm focus:outline-none focus:border-b-2 focus:border-t-0 focus:shadow-sm w-full' />
          </div>
        </div>
      </div>

      <h2 className='font-bold text-xl px-2 mt-2'>2. Review cart & Pay </h2>

      <div ref={ref} className="cartitem  bg-orange-200  px-8 py-2 my-2   ">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && <div className="my-3 font-semibold ">Your Cart is empty</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">
                <div className=" font-semibold">{cart[k].name}</div>
                <div className=" w-1/3 flex font-semibold items-center justify-center"><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].name, cart[k].name, cart[k].size, cart[k].variant) }} className="cursor-pointer text-orange-500" /><span className="mx-2">{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].name, cart[k].name, cart[k].size, cart[k].variant) }} className="cursor-pointer text-orange-500" /></div>
              </div>
            </li>
          })}
          <div className='font-bold my-2'>SubTotal : ₹{subTotal} </div>
        </ol>
        </div>
        <div className="flex ml-2">

          <Link href='/checkout'>
            <button className="flex mr-2 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none text-sm hover:bg-orange-600 rounded" ><span className="pt-1 px-2"><BsFillBagCheckFill /></span>Pay ₹{subTotal}</button>
          </Link>

      </div>


    </div>
  )
}

export default checkout