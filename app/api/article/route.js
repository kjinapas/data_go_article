import axios from 'axios'
const headers = {
    'api-key': process.env.API_KEY
  };

export async function GET(){
    const get_Blog =
    await axios.get('https://opend.data.go.th/get-ckan/datastore_search_sql?sql=SELECT * from "f00d52f1-7c98-417b-9a70-5c64b6c46d9b" LIMIT 50',
    {
      headers:headers
    })

    return Response.json({blogs:get_Blog.data.result.records})
}