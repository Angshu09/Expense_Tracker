import React from 'react'

export default function Form() {
  return (
    <form className='flex flex-col gap-4'>
      <div className='flex flex-col  gap-1'>
        <label className='text-hColor' htmlFor="title">Title</label>
        <input className='border-none outline-none rounded-md p-2 bg-iColor' type="text" id='title' />
      </div>

      <div className='flex flex-col  gap-1'>
        <label className='text-hColor' htmlFor="category">Category</label>
        <input className='border-none outline-none rounded-md p-2 bg-iColor' type="text" id='category' />
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-hColor' htmlFor="amount">Amount</label>
        <input className='border-none outline-none rounded-md p-2 bg-iColor' type="text" id='amount' />
      </div>

      <button className='bg-[#06202B] text-hColor p-3 w-full md:w-1/3 rounded-md font-semibold'>Add</button>
    </form>
  )
}
