import React, { useEffect } from 'react'
import PostContainer from './Components/PostContainer'
import { useAppDispatch } from './Hooks/useAppDispatch'
import { useAppSelector } from './Hooks/useAppSelector'
import { fetchUsersAsync } from './Store/reducers/user/user.actions'

const App = () => {
   const dispatch = useAppDispatch()
   const { users, isLoading, error} = useAppSelector(state => state.userState)
   useEffect(() => {
      dispatch(fetchUsersAsync())
   }, [])
  return (
    <div>
      <PostContainer/>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  )
}

export default App