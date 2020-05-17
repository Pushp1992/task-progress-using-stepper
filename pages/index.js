import Router from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  useEffect(()=> {
    const {pathname} = Router
    if(pathname === '/') Router.push('/timeline')
  }, [])

  return null
}

export default Home