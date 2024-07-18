// "use client"


// import React, { useState } from 'react'
// import loginsvg from "@/app/assets/login.svg"
// import Image from 'next/image'
// import { addTask } from '../services/taskservice'
// import { toast } from 'react-toastify'




// const addtask = () => {


//   const [task, setTask] = useState({
//     title: "",
//     content: "",
//     status: "none",
//     userid: "65ca5d4494903240eddbbbf2",
//   });

//   // const [loading, setLoading] = useState(false);

//   const handleaddTask = async (event) => {
//     event.preventDefault();
//     console.log(task);

//     try {
//       const resultgiven = await addTask(task);
//       console.log(resultgiven);
//       toast.success("your task was added !!", {
//         position: 'top-center'
//       });

//       setTask({
//         title: "",
//         content: "",
//         status: "none",
//       });

//     } catch (error) {
//       console.log(error)
//       toast.error("task not added", {
//         position: 'top-center'
//       });
//     } 
//     // finally {
//     //   setLoading(false);
//     // }

//   };
//   return (
//     <div className='grid grid-cols-12 justify-center '>
//       <div className=' col-span-4 col-start-5 p-5 shadow-sm'>
//         <div className='flex justify-center items-center mt-2'>
//           <Image src={loginsvg} alt="Login Icon" style={{ height: "auto", width: "50%" }} />
//         </div>
//         <h1 className='text-3xl text-center mt-2'>Add your Task here </h1>
//         <form action='#!' onSubmit={handleaddTask}>
//           {/* Title block */}
//           <div className='mt-4'>
//             <label
//               htmlFor='task_title'
//               className='block text-sm font-medium mb-2'>
//               Title
//             </label>
//             <input
//               type='text'
//               className=' w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-white-300'
//               id='task_title'
//               name='task_title'
//               onChange={(event) => {
//                 setTask({
//                   ...task,
//                   title: event.target.value,
//                 });
//               }}
//               value={task.title}

//             />
//           </div>
//           {/* content block */}

//           <div className='mt-4'>
//             <label
//               htmlFor='task_content'
//               className='block text-sm font-medium mb-2'>
//               Content
//             </label>
//             <textarea
//               className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-white-300'
//               id='task_content'
//               name='task_content'
//               onChange={(event) => {
//                 setTask({
//                   ...task,
//                   content: event.target.value,
//                 });
//               }}
//               value={task.content}
//               rows="6"
//             />
//           </div>

//           {/* task status */}
//           <div className='mt-4'>
//             <label
//               htmlFor='task_status'
//               className='block text-sm font-medium mb-2'>
//               Status
//             </label>
//             <select id='task_status'
//               className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-white-300'
//               name='task_status'
//               onChange={(event) => {
//                 setTask({
//                   ...task,
//                   status: event.target.value,
//                 })
//               }}
//               value={task.status}
//             >
//               <option value="none" disabled>--SELECT STATUS--</option>
//               <option value="todo"> To do </option>
//               <option value="inprogress"> Inprogress</option>
//               <option value="completed"> Completed</option>
//             </select>
//           </div>
//           <div className='flex mt-4 justify-center'>
//           <button className='bg-blue-800 hover:bg-blue-400 py-2 px-3 rounded-xl' disabled={loading}>
//               {loading ? 'Adding Task...' : 'Add Task'}
//             </button>
//             <button className='bg-red-800 hover:bg-red-400 py-2 px-3 rounded-xl ms-3'> Clear </button>

//           </div>
//           {JSON.stringify(task)}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default addtask


"use client"


import React, { useState } from 'react'
import loginsvg from "@/app/assets/login.svg"
import Image from 'next/image'
import { addTask } from '../services/taskservice'
import { toast } from 'react-toastify'




const addtask = () => {

  const [isLoading, setIsLoading] = useState(false)


  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    // userid: "65ca5d4494903240eddbbbf2",
    userid: " ",
  });

  const handleaddTask = async (event) => {
    event.preventDefault();
    console.log(task);
    setIsLoading(true);

    if (!task.title.trim()) {
      toast.warning("Title is required", {
        position: "top-center",
      });
      setIsLoading(false); // Reset isLoading state
      console.log("title not have uu ");
      return;
    }



    if (task.content.trim() === "" || task.content == null) {
      toast.warning("Content is required", {
        position: "top-center",
      });
      setIsLoading(false); // Reset isLoading state
      return;
    }

    try {
      // setIsLoading(true);


      const resultgiven = await addTask(task);
      console.log(resultgiven);
      toast.success("your task was added !!", {
        position: 'top-center'
      });

      setTask({
        title: "",
        content: "",
        status: "none",
        userid: "65ca5d4494903240eddbbbf2",
      });



    } catch (error) {
      console.log(error)
      toast.error("task not added", {
        position: 'top-center'
      });

    }

    setTimeout(() => {
      setIsLoading(false); // Set loading state back to false after a delay
    }, 2000); // 2000 milliseconds = 2 seconds

  }
    return (
      <div className='grid grid-cols-12 justify-center '>
        <div className=' col-span-4 col-start-5 p-5 shadow-sm'>
          <div className='flex justify-center items-center mt-2'>
            <Image src={loginsvg} alt="Login Icon" style={{ height: "auto", width: "50%" }} />
          </div>
          <h1 className='text-3xl text-center mt-2'>Add your Task here </h1> 
          <form action='#!' onSubmit={handleaddTask}>
            {/* Title block */}
            <div className='mt-4'>
              <label
                htmlFor='task_title'
                className='block text-sm font-medium mb-2'>
                Title
              </label>
              <input
                type='text'
                className=' w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-white-300 text-white'
                id='task_title'
                name='task_title'
                onChange={(event) => {
                  setTask({
                    ...task,
                    title: event.target.value,
                  });
                }}
                value={task.title}

              />
            </div>
            {/* content block */}

            <div className='mt-4'>
              <label
                htmlFor='task_content'
                className='block text-sm font-medium mb-2'>
                Content
              </label>
              <textarea
                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-white-300 text-white'
                id='task_content'
                name='task_content'
                onChange={(event) => {
                  setTask({
                    ...task,
                    content: event.target.value,
                  });
                }}
                value={task.content}
                rows="6"
              />
            </div>

            {/* task status */}
            <div className='mt-4'>
              <label
                htmlFor='task_status'
                className='block text-sm font-medium mb-2'>
                Status
              </label>
              <select id='task_status'
                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-white-300 text-white'
                name='task_status'
                onChange={(event) => {
                  setTask({
                    ...task,
                    status: event.target.value,
                  })
                }}
                value={task.status}
              >
                <option value="none" disabled>--SELECT STATUS--</option>
                <option value="todo"> To do </option>
                <option value="inprogress"> Inprogress</option>
                <option value="completed"> Completed</option>
              </select>
            </div>
            <div className='flex mt-4 justify-center'>
              <button className='bg-blue-800 hover:bg-blue-400 py-2 px-3 rounded-xl'
                type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Submit'}
              </button>

              {/* //  Add Task  </button> */}
              <button className='bg-red-800 hover:bg-red-400 py-2 px-3 rounded-xl ms-3'> Clear </button>

            </div>
            {/* {JSON.stringify(task)} */}
          </form>
        </div>
      </div>
    )
}

export default addtask



// return (
  //   <div className="flex justify-center p-5 bg-gray-100">
  //     <div className="w-full max-w-lg p-5 shadow-lg bg-white rounded-lg">
  //       <div className="flex justify-center items-center mb-4">
  //         <Image src={loginsvg} alt="Login Icon" className="w-32 h-auto" />
  //       </div>
  //       <h1 className="text-2xl text-center mb-4 sm:hidden bg-black">Add Task</h1>
  //       <h1 className="text-2xl text-center mb-4 hidden sm:block bg-black">Add your Task here</h1>
  //       <form action="#!" onSubmit={handleaddTask}>
  //         {/* Title block */}
  //         <div className="mb-4">
  //           <label htmlFor="task_title" className="block text-sm font-medium mb-1">
  //             Title
  //           </label>
  //           <input
  //             type="text"
  //             className="w-full p-2 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             id="task_title"
  //             name="task_title"
  //             onChange={(event) => {
  //               setTask({
  //                 ...task,
  //                 title: event.target.value,
  //               });
  //             }}
  //             value={task.title}
  //           />
  //         </div>
  //         {/* Content block */}
  //         <div className="mb-4">
  //           <label htmlFor="task_content" className="block text-sm font-medium mb-1">
  //             Content
  //           </label>
  //           <textarea
  //             className="w-full p-2 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             id="task_content"
  //             name="task_content"
  //             onChange={(event) => {
  //               setTask({
  //                 ...task,
  //                 content: event.target.value,
  //               });
  //             }}
  //             value={task.content}
  //             rows="4"
  //           />
  //         </div>
  //         {/* Task status */}
  //         <div className="mb-4">
  //           <label htmlFor="task_status" className="block text-sm font-medium mb-1">
  //             Status
  //           </label>
  //           <select
  //             id="task_status"
  //             className="w-full p-2 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             name="task_status"
  //             onChange={(event) => {
  //               setTask({
  //                 ...task,
  //                 status: event.target.value,
  //               });
  //             }}
  //             value={task.status}
  //           >
  //             <option value="none" disabled>
  //               --SELECT STATUS--
  //             </option>
  //             <option value="todo">To do</option>
  //             <option value="inprogress">Inprogress</option>
  //             <option value="completed">Completed</option>
  //           </select>
  //         </div>
  //         <div className="flex justify-between items-center">
  //           <button
  //             className="w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200"
  //             type="submit"
  //             disabled={isLoading}
  //           >
  //             {isLoading ? "Loading..." : "Submit"}
  //           </button>
  //           <button
  //             className="w-full md:w-auto bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-200 ml-0 md:ml-3 mt-3 md:mt-0"
  //             type="button"
  //             onClick={() =>
  //               setTask({ title: "", content: "", status: "none" })
  //             }
  //           >
  //             Clear
  //           </button>
  //         </div>
  //         <div className="mt-4">
  //           {/* {JSON.stringify(task)} */}
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
  
