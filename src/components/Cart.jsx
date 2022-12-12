import React, { useEffect } from 'react';
import './Cart.css';

const Cart = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [city, setCity] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [note, setNote] = React.useState('');

    const [quantity, setQuantity] = React.useState(0);
    function decrement() {
        if (quantity > 0) {
            setQuantity(quantity-1);
        }
    }

    function increment() {
        setQuantity(quantity+1);
    }

    useEffect(() => {
        
    }, []);

    return (
        <div className="Cart bg-gray-100 py-2">
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                            <h2 className="font-semibold text-2xl"></h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Tên sản phẩm</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Số lượng</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Giá</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Tổng cộng</h3>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">Tên sách</span>
                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5">
                                
                                <div className="flex flex-row h-10 w-1/2 rounded-lg relative bg-transparent mt-1">
                                    <button onClick={() => decrement()} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                        <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input 
                                        type="number" 
                                        className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" 
                                        name="custom-input-number" 
                                        value={quantity}></input>
                                    <button onClick={() => increment()} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">$400</span>
                            <span className="text-center w-1/5 font-semibold text-sm">${400 * quantity}</span>
                        </div>


                        <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Thông tin thanh toán</h1>
                        
                        <div className="py-1">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Họ và tên <span className="text-red-600">*</span></label>
                            <input type="text" className="p-2 text-sm w-full" onChange={event => setName(event.target.value)} />
                        </div>
                        <div className="py-1">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Email <span className="text-red-600">*</span></label>
                            <input type="email" className="p-2 text-sm w-full" onChange={event => setEmail(event.target.value)} />
                        </div>
                        <div className="py-1">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Số điện thoại <span className="text-red-600">*</span></label>
                            <input type="text" className="p-2 text-sm w-full" onChange={event => setPhone(event.target.value)} />
                        </div>
                        <div className="py-1">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Số nhà <span className="text-red-600">*</span></label>
                            <input type="text" className="p-2 text-sm w-full" onChange={event => setStreet(event.target.value)} />
                        </div>
                        <div className="py-1">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Quận/Huyện <span className="text-red-600">*</span></label>
                            <input type="text" className="p-2 text-sm w-full" onChange={event => setDistrict(event.target.value)} />
                        </div>
                        <div className="py-1">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Tỉnh/Thành phố <span className="text-red-600">*</span></label>
                            <input type="text" className="p-2 text-sm w-full" onChange={event => setCity(event.target.value)} />
                        </div>
                        <div className="py-1">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Ghi chú đơn hàng (tùy chọn)</label>
                            <input type="text" className="p-2 text-sm w-full" onChange={event => setNote(event.target.value)} />
                        </div>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Tổng giá</span>
                                <span>600.000Đ</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Đặt hàng</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
