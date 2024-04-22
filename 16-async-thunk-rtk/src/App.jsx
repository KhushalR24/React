import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from './slice/gitUserSlice'

function App() {

  const dispatch = useDispatch()
  const  data = useSelector((state) => state.app.users)
  return (
    <>
      <h1>Reducers</h1>
      <button onClick={() => dispatch(getAllData())} >Get Github Users</button>
      {data?.map((user) => (
        
        <div className='user' key={user.id}>
          <img src={user.avatar_url} alt={user.login} />
          <h1>{user.login}</h1>
        </div>
      ))}
    </>
  )
}

export default App
