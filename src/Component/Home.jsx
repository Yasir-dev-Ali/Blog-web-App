import React from 'react'

const Home = () => {
  return (
    // Complete Home page beautiful designe  with image in tailind css
   <>
    <div className="bg-gray-100">
        <div className="container mx-auto p-4">
            <div className="flex justify-center items-center">
            <div className="w-1/2">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to my Blog</h1>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quae.</p>
            </div>
            <div className="w-1/2">
                <img src="https://source.unsplash.com/random" alt="random" className="w-full h-64 object-cover rounded-lg" />
            </div>
            </div>
        </div>
    </div>

   
   </>

  )
}

export default Home