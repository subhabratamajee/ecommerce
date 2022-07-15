import { React, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
function Navbar({ cart, addToCart, removeFromCart, clearCart, subTotal }) {
  // console.log(cart,addToCart, removeFromCart, clearCart,subTotal)
  const ref = useRef()
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }
  return (
    <div className="flex flex-col md:flex-row md:justify-start   justify-between items-center mb-1 py-1 shadow-xl sticky top-0 bg-white z-10">
      <div className="logo mx-4 rounded">
        <Image src="/longlogo.png" alt="" height={50} width={180} />
      </div>
      <div className="nav">
        <ul className="flex space-x-6 font-bold md:text-md">
          <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
          <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className="cart flex flex-row absolute right-0 top-4 mx-5 cursor-pointer" >
        <Link href={'/login'} passHref>
      <MdAccountCircle className="text-4xl mr-2"/></Link>
        <AiOutlineShoppingCart onClick={toggleCart} className=" text-4xl" />
      </div>
      <div ref={ref} className={`cartitem w-72 top-0 right-0 bg-orange-200 absolute px-8 py-10 z-10 transform transition-transform ${Object.keys(cart).length!==0?'translate-x-0':'translate-x-full'} h-[100vh]`}>
        <h2 className="font-bold text-xl text-center">Shopping Item</h2>
        <span className=" absolute right-5 top-5 text-2xl text-orange-500 cursor-pointer" onClick={toggleCart}><AiOutlineCloseCircle /></span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && <div className="my-3 font-semibold ">Your Cart is empty</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">{cart[k].name}</div>
                <div className=" w-1/3 flex font-semibold items-center justify-center"><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].name, cart[k].name, cart[k].size, cart[k].variant) }} className="cursor-pointer text-orange-500" /><span className="mx-2">{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].name, cart[k].name, cart[k].size, cart[k].variant) }} className="cursor-pointer text-orange-500" /></div>
              </div>
            </li>
          })}

        </ol>
        <div className="flex">

          <Link href='/checkout'>
            <button className="flex mr-2 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none text-sm hover:bg-orange-600 rounded" ><span className="pt-2"><BsFillBagCheckFill /></span>Check out</button>
          </Link>
          <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none text-sm hover:bg-orange-600 rounded" onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
