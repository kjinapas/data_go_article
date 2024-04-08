
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog({data}) {

  return (
    <>

<div className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<Image src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2021</span>
				<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
			</div>
		</a>

		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((datas,index)=>(
		<div key={index}>
          	<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={datas.img_link.split(',')[0]} />
            <div  className="p-6 space-y-2">
              <h3 className="text-md font-semibold group-hover:underline group-focus:underline ">{datas.title}</h3>
              <span className="text-xs dark:text-gray-600">January 21, 2021</span>
              <p className='md:text-md line-clamp-4'>{datas.detail}</p><Link href="">อ่านต่อ</Link>
            </div>
          </a>
		  </div>
      ))}
		
			
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
		</div>
	</div>
</div>
    
    </>
  )
}
