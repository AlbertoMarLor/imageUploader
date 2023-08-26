import './App.css'
import { Routing } from './routes/Routing'

function App() {


  return (
    <>
      <div className='layout'>
        <Routing />
      </div>
      <footer>
        <p>Made with React - Alberto Martín Lorencés - </p>
        <a href='https://albmarlor-web.onrender.com/' target='_blank' className='portfolio' > Portfolio</a>
      </footer>
    </>
  )
}

export default App
