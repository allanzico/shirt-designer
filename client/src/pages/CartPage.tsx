import React, { useMemo } from 'react'
import useCartStore from 'store/cartStore'

const CartPage = () => {
    const cart = useCartStore(state => state.cart)

    const cartTotalPrice = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.totalPrice, 0)
    }, [cart])

    console.log(cartTotalPrice)

    return (
        <section className="mt-5">
            <h1 className="sr-only">Checkout</h1>
            <div className="relative mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="py-3 bg-gray-50">
                        <div className="max-w-lg px-2 mx-auto">
                            <div className="mt-12">
                                {cart && cart.map((item) => (
                                    <ul className="-my-4 divide-y divide-gray-200">
                                        <li className="py-4 flex justify-between items-center">
                                            <div className="flex flex-row items-center gap-4">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src="https://via.placeholder.com/150"
                                                        alt="product"
                                                        className="w-20 h-20 rounded-md object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col  gap-1">
                                                    <h3 className="text-sm font-semibold text-gray-900">
                                                        {item.shirtType}
                                                    </h3>
                                                    <div>
                                                        <ul className="flex flex-col items-center">
                                                            {
                                                                item.players.map((player) => (
                                                                    <li className='text-xs'>
                                                                        #{player.number} - {player.name} ({player.size})
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-row items-center gap-2">
                                                    <button className="text-gray-900 font-semibold">
                                                        {item.cartItems}
                                                    </button>
                                                    <button className="text-gray-900 font-semibold">
                                                        $ {item.totalPrice}
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className="py-3 bg-white">
                        <div className="max-w-lg px-2 mx-auto">
                            <div className="flex flex-col gap-4">
                                <div className="w-full h-64">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                                        Order Summary
                                    </h2>
                                    <hr className="my-2 text-gray-500" />
                               
                                        <div>
                                            <div className="flex flex-row justify-between">
                                                <p className="text-xs uppercase font-semibold text-gray-600">
                                                    Sub total
                                                </p>
                                                <p>
                                                    ${cartTotalPrice}
                                                </p>
                                            </div>

                                        </div>
                                        <hr className="my-2 text-gray-500" />
                                 
                                <div className="flex flex-row justify-between mb-5">
                                    <p className="text-xl uppercase font-semibold text-gray-600">
                                        Total
                                    </p>
                                    <p className="text-xl uppercase font-semibold text-gray-600">
                                        ${cartTotalPrice}
                                    </p>
                                </div>
                                <button className="w-full bg-gray-900 text-white font-semibold py-2 rounded-sm">
                                    Checkout
                                </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage