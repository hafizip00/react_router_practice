import axios from 'axios';
import {React , useState , useEffect} from 'react'

function Fetching() {

    const [loading , setLoading] = useState(true);
    const [error , setError] = useState('');
    const [post , setPost] = useState('');


    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response =>{
            setLoading(false)
            setPost(response.data.title);
            setError('');
        }).catch(error =>{
            setLoading(false)
            setPost({})
            setError('Something Wrong...')
        })
    },[])
  return (  
    <>
    {loading ? 'Loading...' : post}
    {error ? error : null}
    </>
  )
}

export default Fetching