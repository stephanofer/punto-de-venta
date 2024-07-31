import { ReactNode } from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


type PropsLayout ={
  children?: ReactNode,  
}

function LayoutContainer({ children }: PropsLayout) {
  console.log("C: Layout");
  
  return (
    <>
    <div className='areas'>
    <NavBar/>
    {children ?? <Outlet/>}
    <Footer/>
    </div>
    </>
  )
}
export default LayoutContainer