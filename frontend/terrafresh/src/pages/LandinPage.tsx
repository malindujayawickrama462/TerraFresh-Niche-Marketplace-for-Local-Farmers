import React from 'react'
import Cards from '../components/Cards'


function LandinPage() {
  return (
    <>
    <div className=' flex flex-col justify-center items-center min-h m-10 shadow-xl/30 rounded-lg'>
        <div className=' my-[5px] text-center text-4xl p-6 font-semibold text-white text-shadow-lg'>
            <h1>Revolutionizing How You Buy Fresh Food</h1>
        </div> 
    <div className='p-6 text-xl text-white text-center'>
        <p>“TerraFresh is making it easy to discover fresh, high-quality produce at fair prices. By removing middlemen, we help farmers earn more while giving customers access to healthier, farm-fresh food. Whether you are a home cook, restaurant, 
            or grocery store, TerraFresh brings the best of local farming straight to your doorstep.”</p>
    </div>
    <div className='flex justify-center items-center gap-6 my-[10px]'>
        <button className='bg-green-600 text-white hover:text-green-700 px-6 py-4 rounded-md'>Join as a Farmer</button>
        <button className='bg-green-600 text-white hover:text-green-700 px-6 py-4 rounded-md'>Join as a Customer</button>
    </div>
    </div>
    <div className='flex flex-col justify-center items-center'>
        <div className='text-white text-center text-2xl'>
            <h1>Our Features</h1>
        </div>
        <div className='flex justify-center items-center'>
            <Cards title="Fresh Produce" description="Get fresh farm produce delivered to your doorstep."/>
            <Cards title="Fair Prices" description="Supporting farmers and giving you better prices."/>
        </div>
    </div>
    </>
  )
}

export default LandinPage