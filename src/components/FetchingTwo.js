import React, { useReducer ,  useEffect} from 'react'
import axios from 'axios';

const reducer = (state , action)=>{
    switch(action.type){
        case 'SUCCESS' : return {
            loading : false,
            error : '',
            post : action.payload
        }

        case 'FAIL' : return {
            loading : false,
            error : action.payload,
            post : ''
        }
        default : return state;
    }
}

function FetchingTwo() {
    const [state , dispatch] = useReducer(reducer ,{loading : true , error : '' , post : ''});

    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response =>{
            dispatch({type : 'SUCCESS' , payload : response.data.title})
        }).catch(error =>{
            dispatch({type : 'FAIL' , payload : 'Error'})
        })
    },[])

  return (
    <div>
        {state.loading ? 'Loading...' : state.post}
        {state.error ? state.error : null}
    </div>
  )
}

export default FetchingTwo