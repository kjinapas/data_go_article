"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'

export default function Main({datat}) {

    const [Data,setData] = useState([])

    useEffect(()=>{

        setData(datat)
    },[])
   
  return (
    <>
    	<div className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-4 sm:space-y-12">
    
		
		<div className="text-xl text-center m-1">รายการองค์ความรู้ด้านวิทยาศาสตร์และเทคโนโลยี</div>

		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
		
      {Data.map((datas,index)=>(
		<div  key ={index} className="max-w-sm mx-auto dark:bg-gray-50  shadow-xl  rounded-lg">  
         
            <Image width={500} height={500} role="presentation" className="object-contain w-full rounded h-44 dark:bg-gray-500" src={datas.img_link.split(',')[0]} />
            <div  className="p-6 space-y-2">
              <h3 className="text-md font-semibold ">{datas.title}</h3>
              <span className="text-xs dark:text-gray-600">{Date(datas.date)}</span>
              <p className='md:text-md line-clamp-3 text-sm '>{datas.detail}....</p>
              <Link href={`/content/${datas.Nid}`} target='_blank'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"> อ่านต่อ</button></Link>
            </div>
          
		  </div>
      ))}
		
   
	</div>

		</div>
  
</div>

    </>
  )
}
