import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className=''>
          <nav>
            <input type="text"
            placeholder="Search for second hand mobile"></input>
          </nav>
          <nav>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 focus:outline-none">Login</button><br></br>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-blue-600 focus:outline-none">SignUp</button>
          </nav>

        </div>




        </div>
    </>
  )
}

export default App
