import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import propertyImg from '../public/assets/projects/property.jpg'; //use this of didnt want to include width and height
import ProjectItem from './ProjectItem';
import property from '../pages/property'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>

            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='Property Finder' 
                    backgroundImg={propertyImg} 
                    projectUrl='/property' 
                />

                <ProjectItem 
                    title='Property Finder' 
                    backgroundImg={propertyImg} 
                    projectUrl='/property' 
                />
            </div>
        </div>
    </div>
  )
}

export default Projects