"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Loading from '../Loading'

export default function Main() {

  const [isArticle, setIsarticle] = useState([])
  const [loading, setisloading] = useState(true)
  const uniqueType = [...new Set(isArticle.map(item => item.category))]
  const [selectedType, setSelectedType] = useState('');


  useEffect(() => {
    const fetch_data = async () => {
      try {
        const Article = await axios.get('api/article')
        setIsarticle(Article.data.blogs)
        setisloading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetch_data()
  }, [])



  return (
    <>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex-col justify-center items-center px-4">
          <p className="text-white text-md font-bold text-center mb-1 md:text-sm">รายการองค์ความรู้ด้านวิทยาศาสตร์และเทคโนโลยี</p>

          <p className="text-white text-xs font-semibold text-center">(Api) จาก สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) </p>


        </div>
      </nav>

      <div>
        <h2 className="flex flex-row flex-nowrap items-center mt-2">
          <span className="flex-grow block border-t border-black" />
          <span className="flex-none block mx-4 px-4 py-2.5 text-md rounded leading-none font-medium bg-black text-white">
            บทความทั้งหมด
          </span>
          <span className="flex-grow block border-t border-black" />
        </h2>
      </div>



      {loading ? <div className="flex justify-center items-center mt-5 mb-5 ">
        <Loading />

      </div>
        :
        <div className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container max-w-6xl p-6 mx-auto space-y-4 sm:space-y-12">
            <div className="flex justify-center flex-wrap gap-2 p-2 max-w-full mx-auto my-4 text-sm">
              <button
                key="all" // Add a key for React
                className={`px-2 py-1 rounded  ${selectedType === '' ? 'bg-gray-300' : 'bg-gray-200/50'} text-gray-700`} // Conditional styling for 'All'
                onClick={() => setSelectedType('')}
              >
                All
              </button>
              {uniqueType.map((type, index) => (
                <button key={index}
                  className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300"
                  onClick={() => setSelectedType(type)}>
                  {type}
                </button>
              ))}

            </div>



            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">


              {isArticle.filter(blog => selectedType === '' || blog.category === selectedType).map((datas, index) => (
                <div key={index} className="max-w-sm mx-auto dark:bg-gray-50  shadow-xl  rounded-lg">

                  <img width={500} height={500} role="presentation" alt='image' className="object-contain w-full rounded h-44 dark:bg-gray-500" src={datas.img_link.split(',')[0]} />
                  <div className="p-6 space-y-2">
                    <h3 className="text-md font-semibold ">{datas.title}</h3>
                    <span className="text-xs dark:text-gray-600">{Date(datas.date)}</span>
                    <p className='md:text-md line-clamp-3 text-sm '>{datas.detail}....</p>
                    <Link href={`/content/${datas._id}`} target='_blank'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"> อ่านต่อ</button></Link>
                  </div>

                </div>
              ))}


            </div>

          </div>

        </div>
      }

    </>
  )
}
