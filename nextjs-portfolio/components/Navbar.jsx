import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full pb-2 2xl:px-16'>
                <Image src="/../public/assets/NR-removebg-preview.png" alt="" width="200" height="50" />
            </div>
        </div>
    )
}

export default Navbar