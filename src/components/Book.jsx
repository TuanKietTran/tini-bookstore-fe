import { useState } from 'react';
import React from 'react';
import './Book.css';


const Book = () => {
    const [quantity, setQuantity] = React.useState(0);
    function decrement() {
        if (quantity > 0) {
            setQuantity(quantity-1);
        }
    }

    function increment() {
        setQuantity(quantity+1);
    }
    
    return (
        <div className="pb-">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-shrink-0 place-items-center my-20 lg:pr-6">
                        <div className="carousel max-w-[400px] rounded-box">
                            <div id="slide1" className="carousel-item relative">
                                <img
                                    src={`https://cdn0.fahasa.com/media/catalog/product/9/7/9786043561272.jpg`}
                                    className="w-[400px] h-[500px] object-cover"
                                    alt=""
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide2" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal" />
                    <div className="grid flex-shrink my-20">
                        <div className="flex flex-col space-y-6 lg:pl-4">
                            <h2 className="text-2xl text-black font-bold">
                                Tên sách<div className="badge badge-secondary text-xs">Romance</div>
                            </h2>

                            <h3 className="text-black text-2xl font-semibold">
                                $29.95 - 59.95
                            </h3>
                            <p>
                                <span className="text-black font-medium">Công ty phát hành: </span> TNHH
                            </p>
                            <p>
                                <span className="text-black font-medium">Tác giả: </span> ai đó
                            </p>
                            <p>
                                <span className="text-black font-medium">Năm xuất bản: </span> 2022
                            </p>
                            <p>
                                <span className="text-black font-medium">Số lượng sản phẩm trong kho: </span> 1
                            </p>

                            <div className="custom-number-input h-10 w-32">
                                <label for="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">Chọn số lượng
                                </label>
                                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={() => decrement()} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                        <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity}></input>
                                    <button onClick={() => increment()} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>


                        </div>
                        <button type="button" className=" btn btn-primary w-[200px] my-10">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;