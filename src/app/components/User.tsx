import Image from 'next/image'
import React from 'react'
import user from '@/icons/stack/ali.jpg'
import peru from '@/icons/flags/peru.png'
import github from '@/icons/contact/github.png'
import linkedin from '@/icons/contact/linkedin.png'
import gmail from '@/icons/contact/gmail.png'


function Data() {
    const data = { firstname: 'sharif', lastname: 'abuhadba', career: 'computer science', age: 23, jpgcountry: peru, country: 'Perú', city: 'Lima' }

    return (
        <div className='flex flex-col mt-16 mb-16  justify-between  font-bold border-gray-400 border-2 rounded-2xl px-3 py-3 text-lg'>

            <p>Name: {data.firstname} {data.lastname}</p>
            <p>Career: {data.career}</p>
            <p>Age: {data.age}</p>
            <p>Location: {data.country} - {data.city}</p>
            <Image src={peru} alt='peru' height={40} />

        </div>
    );
}

function Presentation() {
    return (
        <div className='flex flex-col mt-16 mb-16 ml-20 mr-32 gap-10 text-xl '>
            <p className='text-justify'>Soy un jóven programador, autodidacta, responsable e inclinado al trabajo y
                al desarrollo de mis capacidades. Me apasiona el desarrollo web y tengo
                conocimientos en front-end (HTML, CSS), back-end (PYTHON, FLASK) y
                bases de datos.</p>

            <div className='flex justify-evenly text-gray-500 '>
                <a href='https://www.linkedin.com/in/sh-abh-bts' target='_blank'>
                    <div className='flex items-center flex-col cursor-pointer hover:text-gray-800 hover:font-bold'>
                        <Image src={linkedin} alt='linkedin' height={30} />
                        <p>Linkedin</p>
                    </div>
                </a>
                <a href='https://www.google.com' target='_blank' >
                    <div className='flex items-center flex-col cursor-pointer hover:text-gray-800 hover:font-bold'>
                        <Image src={gmail} alt='gmail' height={30} />
                        <p>Gmail</p>

                    </div>
                </a>
                <a href='https://github.com/SharifAli645' target='_blank'>
                    <div className='flex items-center flex-col cursor-pointer hover:text-gray-800 hover:font-bold'>
                        <Image src={github} alt='github' height={30} />
                        <p>Github</p>

                    </div>
                </a>
            </div>
            <hr className='border-gray-600 border-2' />
        </div>
    );
}

function User() {
    const data = { firstname: 'sharif', lastname: 'abuhadba', career: 'computer science', age: 23, country: peru }
    return (
        <div className=' flex flex-[9]'>

            <div className='flex flex-[3]  justify-center '>
                <div className='mt-16 mb-16' >
                    <Image src={user} alt='user' height={300} className='rounded-2xl border-blue-400' />

                </div>
            </div>
            <div className='flex flex-[2]  capitalize justify-center'>
                <Data />
            </div>
            <div className='flex-[6] '>
                <Presentation />
            </div>

        </div>
    )
}

export default User