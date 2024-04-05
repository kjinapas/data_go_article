import axios from 'axios'
import React from 'react'
import Image from 'next/image'



export default async function Page({params}) {
	const id = params.slug
		const headers = {
			'api-key': process.env.API_KEY 
		  };

		const data_details = await axios.get(`https://opend.data.go.th/get-ckan/datastore_search?resource_id=f00d52f1-7c98-417b-9a70-5c64b6c46d9b&q=${id}`,
		{ headers: headers })
		
		const Results = data_details.data.result.records[0]
		const img_result = Results.img_link.split(',')
		
  return (
    <>


	<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
	<div className="text-xl text-center mt-3">รายการองค์ความรู้ด้านวิทยาศาสตร์และเทคโนโลยี</div>
  
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-2">{Results.title}</h1>
        <p className="text-gray-500 text-sm">
          Published on <time >{Date(Results.date)}</time>
        </p>
      </div>
	  {img_result.length>0?
	  Results.img_link.split(',').map((img_url,keys) => (
		
		<Image key={keys}
		src={img_url}
		alt="Featured image"
		width={500}
		height={500}
		
		className="  mb-8 mx-auto "
	  />
	  ))
	  :
	  <Image
		src={Results.img_link}
		alt="Featured image"
		width={500}
		height={500}
		
		className="mb-8 mx-auto "
	  />
	  
	  }
		
      
     
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto mb-5">
        <text className="mb-2" style={{ whiteSpace: "pre-line" }}>
		{Results.detail}
        </text>
      </div>
    </div>
  </div>




    </>
  )
}
