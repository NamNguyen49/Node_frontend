import React from 'react'
import Routers from '../../router/Routers'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'



const Layout = () => {
    return <>
        <Header></Header>
        <Routers></Routers>
        <Footer></Footer>
    </>
}

export default Layout