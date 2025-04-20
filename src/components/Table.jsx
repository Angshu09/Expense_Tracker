import React from 'react'

export default function Table() {
  return (
    <table className='w-full'>
        <thead className=''>
            <tr className='grid grid-cols-3 gap-2 text-[#06202B]'>
                <th className='text-left p-1'>Title</th>
                <th className='text-left p-1'>
                    <select className='w-full bg-transparent outline-none' name="" id="">
                        <option value="">All</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Bills">Bills</option>
                        <option value="Education">Education</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Food">Food</option>
                        <option value="Other">Other</option>
                    </select>
                </th>
                <th className='text-left p-1 flex items-center justify-between'>
                    <span>Amount</span>
                    <div className='flex gap-1'>
                        <i className="fa-solid fa-arrow-up"></i>
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody className='text-hColor'>
            <tr className='grid grid-cols-3 gap-3'>
                <td className='p-1'>cake</td>
                <td className='p-1'>Food</td>
                <td className='p-1'>456</td>
            </tr>

            <hr className='my-3' />

            <tr className='grid grid-cols-3 gap-3 text-[#06202B] font-bold '>
                <td className='p-1'>Total</td>
                <td className='p-1'></td>
                <td className='p-1'>5677</td>
            </tr>
        </tbody>
    </table>
  )
}
