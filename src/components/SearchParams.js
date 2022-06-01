import React from 'react'
import { useSearchParams, useParams } from 'react-router-dom'

function SearchParams() {
    const params = useParams()
    const [SearchParams, setSearchParams] = useSearchParams();
    const isFilterActive = SearchParams.get('filter') === 'active'
  return (
    <div>
        <h1>Search Params {params.userID}</h1>
        <button onClick={() => setSearchParams({filter : 'active'})}>Show Active</button>
        <button onClick={() => setSearchParams({filter : 'reset'})}>Reset Searches</button>
        <div>
            {isFilterActive ? (<h1>Active List</h1>) : (<h1>Nothing to show</h1>)}
        </div>

    </div>
  )
}

export default SearchParams