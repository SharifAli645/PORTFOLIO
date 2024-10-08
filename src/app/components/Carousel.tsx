"use client";

import React, { useState } from 'react'
import "./Carousel.css"
import Image from 'next/image';
import leftArrow from '@/icons/react/arrow-left.png'
import rightArrow from '@/icons/react/arrow-right.png'
import foto from '@/images/foto-prueba.jpg'
import peru from '@/icons/flags/peru.png'
import argentina from '@/icons/flags/argentina.png'
import linkedin from '@/icons/contact/linkedin.png'
import logo_lv from '@/images/logo-proyecto1.png'
import logo_pg from '@/images/proyects/prolingo/logo_prolingo.jpg'
import logo_gl from '@/images/proyects/galery/logo_galery.jpg'
import react from '@/icons/stack/react.png'
import python from '@/icons/stack/python.png'
import django from '@/icons/stack/django.png'
import sql from '@/icons/stack/sql.png'
import docker from '@/icons/stack/docker.png'

import nest from '@/icons/stack/nest.png'

import tailwind from '@/icons/stack/tailwind.png'

import lv_1 from '@/images/proyects/leveling/interactivo.png'
import lv_2 from '@/images/proyects/leveling/intuitivo.png'
import lv_3 from '@/images/proyects/leveling/teoria.png'
import gy_1 from '@/images/proyects/galery/sc1.jpg'
import gy_2 from '@/images/proyects/galery/sc2.jpg'
import gy_3 from '@/images/proyects/galery/sc3.jpg'
import pg_1 from '@/images/proyects/prolingo/prolingo_1.png'
import pg_2 from '@/images/proyects/prolingo/prolingo_2.png'
import ToolTip from './ToolTip';






export default function Carousel({ data,
  proyects,
  stacks,
  funcionalities,
  members,
  roles,
  p_stacks,
  p_m_roles,
  number }: {
    data: any;
    proyects: any;
    stacks: any;
    funcionalities: any;
    members: any;
    roles: any;
    p_stacks: any;
    p_m_roles: any;
    number: number
  }) {

  const [slide, setSlide] = useState(0);

  const nextSlide = () => { setSlide(slide == data.length - 1 ? 0 : slide + 1); }
  const prevSlide = () => { setSlide(slide == 0 ? data.length - 1 : slide - 1); }

  const proyect = proyects.find((obj: any) => obj.id === number + 1);
  const p_stack = p_stacks.filter((obj: any) => obj.proyecto_id === number + 1);
  const stack = stacks.filter((obj: any) =>
    p_stack.some((item: any) => item.stack_id === obj.id)
  );
  const p_m_rol = p_m_roles.filter((obj: any) => obj.proyecto_id === number + 1);
  const member = members.filter((obj: any) =>
    p_m_rol.some((item: any) => item.miembro_id === obj.id)
  );
  const rol = roles.filter((obj: any) =>
    p_m_rol.some((item: any) => item.rol_id === obj.id)
  )
  const funcionality = funcionalities.filter((obj: any) => obj.proyecto_id === number + 1);

  console.log("array de member\n", member)
  console.log("array de rol\n", rol)
  console.log("array de p_m_rol\n", p_m_rol)




  return (
    <div className='main'>
      <Image
        src={leftArrow}
        alt='arrow' width={50} height={50}
        className='arrow arrow-left'
        onClick={prevSlide}
      />

      {data.slides.map((item: any, index: number) => (
        
        <div className={slide === index ? "slide" : "slide slide-hidden"} key={index}>
          
          {index === 0 && (
            <div className='flex flex-col gap-4  items-center h-full'>
              <h2 className='text-center bg-green-400 w-min px-4 py-2 text-2xl my-9 rounded-2xl  '>Proyecto</h2>
              <div className='flex flex-row  justify-evenly '>

                <div className='mx-10'>
                  <h3 className='text-center text-xl font-bold border-4 rounded-xl py-1 border-black my-4'>
                    {proyect.nombre}
                  </h3>
                  <Image
                    src={number +1  === 1 ? logo_lv : number +1  === 2 ? logo_gl
                      : number +1 === 3 ? logo_pg
                        : django}
                    alt='arrow' width={300} height={850}
                    onClick={prevSlide}
                  />
                </div>
                <div className='mx-10'>
                  <h3 className='text-center text-xl font-bold border-4 rounded-xl py-1 border-black my-4'>Descripción</h3>
                  <p className='justify-center w-96'>
                    {proyect.descripcion}
                  </p>
                </div>
                <div className='mx-10 w-60'>
                  <h3 className='text-center text-xl font-bold border-4 rounded-xl py-1 border-black my-4'>Stack</h3>
                  {stack.map((item: any, index: number) => (
                    <div className='flex justify-center items-center font-bold text-lg' key={index}>
                      <Image
                        src={item.id === 1 || item.id === 7 ? react
                          : item.id === 2 ? nest
                            : item.id === 6 ? sql
                              : item.id === 4 ? tailwind
                                : item.id === 3 ? docker

                                  : django}
                        alt='arrow' width={40} height={40}
                      />
                      <h3>{item.name}</h3>
                    </div>
                  ))}



                </div>
              </div>
            </div>
          )}
          {index && index === 1 && (
            <div className='flex flex-col gap-4  items-center h-full'>
              <h2 className='text-center bg-green-400 w-min px-4 py-2 text-2xl my-9 rounded-2xl  '>Funcionalidades</h2>
              <div className='flex flex-row  justify-evenly '>
                {funcionality.map((item: any, index: number) => (
                  <>
                    <div className='mx-10'>
                      <h3 className='text-center text-xl font-bold'>{"Funcionalidad " + (index + 1) }</h3>
                      <ToolTip tooltip={item.description}>
                      <Image
                        src={item.id === 1 ? lv_3
                          : item.id === 2 ? lv_1
                            : item.id === 3 ? lv_2
                              : item.id === 4 ? gy_2
                                : item.id === 5 ? gy_3
                                  : item.id === 6 ? gy_1
                                    : item.id === 7 ? pg_2
                                      : item.id === 8 ? pg_1
                                        : foto}
                        alt='arrow' width={250} height={700}
                        onClick={prevSlide}
                        />
                      </ToolTip>
                    </div>

                  </>
                ))}

              </div>
            </div>
          )}
          {index && index === 2 && (
            <div className='flex flex-col gap-4  items-center h-full'>
              <h2 className='text-center bg-green-400 w-min px-8 py-2 text-2xl my-9 rounded-2xl  '>Team</h2>
              <div className='flex flex-row  justify-evenly text-lg'>
                {rol.map((item: any, index: number) => (
                  <div className='mx-10' key={index}>
                    <h3 className='text-center text-xl font-bold border-4 rounded-xl py-1 px-3 border-black my-4'>{item.rol}</h3>
                    <p>{member.find((obj: any) => obj.id === p_m_rol.find((obj: any) => obj.rol_id === item.id).miembro_id).firstname}</p>
                    <div className='flex flex-row items-center justify-evenly'>
                      <Image
                        src={item.country === 'peru' ? peru : item.country === 'argentina' ? argentina : argentina}
                        alt='arrow' height={40}
                        />
                      <Image src={linkedin} alt='linkedin' width={35} />
                    </div>
                  </div>
                ))}


              </div>
            </div>
          )}
        </div>
      ))}

      <Image
        src={rightArrow}
        alt="python" width={50} height={50}
        className='arrow arrow-right'
        onClick={nextSlide}
      />
      <span className='indicators'>
        {data.slides.map((_: any, index: number) => {
          return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
        })}
      </span>
    </div>
  )
}
