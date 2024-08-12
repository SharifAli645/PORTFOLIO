import React from 'react'
import Carousel from '../components/Carousel'
import { promises as fs } from 'fs';

export default async function Proyects() {

  const file = await fs.readFile(process.cwd() + '/src/data/carouselData.json', 'utf-8');

  const file_proyects = await fs.readFile(process.cwd() + '/src/data/proyects.json', 'utf-8');
  const data_proyects = JSON.parse(file_proyects);
  // console.log("PROYECTOS \n", data_proyects)

  const file_stacks = await fs.readFile(process.cwd() + '/src/data/stacks.json', 'utf-8');
  const data_stacks = JSON.parse(file_stacks);
  // console.log("PROYECTOS \n", data_stacks)

  const file_funcionalities = await fs.readFile(process.cwd() + '/src/data/funcionalities.json', 'utf-8');
  const data_funcionalities = JSON.parse(file_funcionalities);
  // console.log("PROYECTOS \n", data_funcionalities)

  const file_members = await fs.readFile(process.cwd() + '/src/data/members.json', 'utf-8');
  const data_members = JSON.parse(file_members);
  // console.log("PROYECTOS \n", data_members)

  const file_roles = await fs.readFile(process.cwd() + '/src/data/roles.json', 'utf-8');
  const data_roles = JSON.parse(file_roles);
  // console.log("PROYECTOS \n", data_roles)

  const file_proyects_stacks = await fs.readFile(process.cwd() + '/src/data/proyects_stacks.json', 'utf-8');
  const data_proyects_stacks = JSON.parse(file_proyects_stacks);
  // console.log("PROYECTOS \n", data_proyects_stacks)

  const file_proyects_members_roles = await fs.readFile(process.cwd() + '/src/data/proyects_members_roles.json', 'utf-8');
  const data_proyects_members_roles = JSON.parse(file_proyects_members_roles);
  // console.log("PROYECTOS \n", data_proyects_members_roles)

  const data = JSON.parse(file);


  return (
    <div className=" h-screen font-mono">
      {data.proyects.map((item: any, index: number) => {
        return <Carousel data={item} key={index}
          proyects={data_proyects}
          stacks={data_stacks}
          funcionalities={data_funcionalities}
          members={data_members}
          roles={data_roles}
          p_stacks={data_proyects_stacks}
          p_m_roles={data_proyects_members_roles}
          number={index}
        />
      })}
    </div>
  )
}
