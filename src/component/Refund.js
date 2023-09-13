import React from 'react'
import DpMenu from './DpMenu'
import Header from './Header'
// import AllRequest from './AllRquest'
// import Pending from './Pending'
import ManageScreenProvider from './ManageScreenProvider'



export default function Refund() {
  return (
    
<div className="h-screen flex w-screen bg-[#E5E5E5]">
            <DpMenu />
            <div className="h-screen w-screen  overflow-hidden  bg-[#F2F2F2]" >
                <Header/>
               
               <ManageScreenProvider/>
            </div>
            {/* <div >
            <Refun/>
            
            </div> */}
            
    </div>
  )
  }
