import React from 'react'

import { AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { LiaShoppingBagSolid } from 'react-icons/lia'
function HeaderMain() {
    return (
        <div className='border-b border-gray-200 py-4'>
            <div className='container  sm:flex justify-between items-center'>
                <div >
                    <b className='flex font-bold text-4xl text-center pb-4 sm:pb-0  text-blackish'>Logo</b>
                </div>
                <div className='w-full sm:w-[300px] md:w-[70%] relative flex items-center'>
                    <input
                        type='text'
                        placeholder='Enter any product name...'
                        className='w-full border rounded-md px-4 py-2 border-gray-400'
                    />
                    <AiOutlineSearch size={20} className='text-gray-400 absolute right-3' />
                </div>
                <div className='hidden lg:flex gap-4 items-center text-[30px] text-gray-500'>
                    <div >
                        <AiOutlineUser />
                    </div>
                    <div className='relative'>
                        <AiOutlineHeart />
                        <div className='absolute text-[16px] text-white items-center rounded-full justify-center top-[-5px] right-0 z-10 bg-red-700 w-5 h-5 '>
                            <p className='text-center'>5</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <LiaShoppingBagSolid />
                        <div className='absolute text-[16px] text-white items-center rounded-full justify-center top-[-5px] right-0 z-10 bg-red-700 w-5 h-5 '>
                            <p className='text-center'>5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain