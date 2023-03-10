import React from 'react'
import Image  from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>A few that I can do</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/_Html.png' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>html</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/css.png' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>css</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/javascript.png' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>javascript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/tailwind.png' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>tailwind css</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/github1.png' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>Github</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/nextjs.png' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>Next js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/python.png' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>python</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto pt-4'>
                <Image src='/../public/assets/skills/php.png' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>php</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/sql.png' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>sql</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills