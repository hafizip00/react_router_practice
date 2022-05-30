import {React , useReducer} from 'react'

const reducer = (state , action)=>{
    switch(action.type){
        case 'increament': return {count : state.count + 1};
        case 'decreament' : return {count : state.count - 1};
        case 'reset' : return {count :state.count = 0};
        default  : return {count : state.count} ;
    }
}

function Reducer() {
    const [state , dispatch] = useReducer(reducer , {count: 0});
  return (
    <div>
        count : {state.count}
        <button onClick={()=> dispatch({type:'increament'})}>Increament</button>
        <button onClick={()=> dispatch({type:'decreament'})}>Decreament</button>
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Reducer