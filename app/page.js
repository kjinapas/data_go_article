
import React from "react";

import axios from 'axios'
import Main from "./Components/Main";
export  default  async function Home() 
{
	const headers = {
		'api-key': process.env.API_KEY 
	  };
	
		const datad = await axios.get("https://opend.data.go.th/get-ckan/datastore_search?resource_id=f00d52f1-7c98-417b-9a70-5c64b6c46d9b&limit=60",
		{ headers: headers })
	
	  const datat = datad.data.result.records
	
	return (
		<>
	<Main datat={datat}/>
	
		</>
	);
}
