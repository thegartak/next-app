export const dynamic = 'force-static'
 
export async function POST() {
 /* const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    headers: {
      'Content-Type': 'application/json',
     // 'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()*/
  const data = {
    status: 550,
    message: 'some message'
  }

 
  return Response.json( data )
}