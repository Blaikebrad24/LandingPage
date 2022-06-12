import Head from 'next/head'
import Image from 'next/image'
import React, {Fragment} from 'react'
import Navbar from '../components/NavBar'

export default function Home() {
  return (
    <div id ='scroll'>
      <Fragment>
        <div className="frontPage">
          <Navbar/>
        </div>
      </Fragment>
    </div>
  )
}
