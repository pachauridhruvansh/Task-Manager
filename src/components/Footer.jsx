"use client";

import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='flex bg-blue-500 justify-around mt-4 h-40 items-center'>
//       <div>
//         <h2 className="text-3xl font-bold text-center mt-3"> Welcome to Work Manager </h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea quia nam

//         </p>

//       </div>
//       <div className='text-center'>
//         <h1>Important Links </h1>
//         <ul>

//           <li className='hover:text-blue-200'>
//             <a href='#!'>Youtube </a></li>
//             <li className='hover:text-blue-200'>
//             <a href='#!'>Twitter</a></li>
//             <li className='hover:text-blue-200'>
//             <a href='#!'>Instagram </a></li>
//         </ul>

//       </div>
//     </footer>
//   )
// }

// export default Footer

const Footer = () => {
  return (
    <footer className='bg-blue-500 mt-4 py-6 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-around items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <h2 className="text-3xl font-bold">Welcome to Work Manager</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea quia nam</p>
          </div>
          <div className='text-center'>
            <h1 className="font-semibold text-xl mb-2">Important Links</h1>
            <ul>
              <li className='hover:text-blue-200 mb-1'>
                <a href='#!'>YouTube</a>
              </li>
              <li className='hover:text-blue-200 mb-1'>
                <a href='#!'>Twitter</a>
              </li>
              <li className='hover:text-blue-200'>
                <a href='#!'>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
