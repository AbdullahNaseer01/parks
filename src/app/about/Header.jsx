import React from 'react'

function Header() {
  return (
    <div className="px-2 py-20 w-full flex justify-center">
    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
      <div className="lg:w-1/2">
        <div
          className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D")'
          }}
        ></div>
      </div>
      <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
        <h2 className="text-3xl text-gray-800 font-bold">
        A mystical world of peace & 
          <span className="text-indigo-600">relaxation</span>
        </h2>
        <p className="mt-4 text-gray-600">
        Napar Mountain National Park’s 215 square miles  encompasses a spectacular range of mountain environments. From meadows found in the montane life zone to glistening alpine lakes and up to the towering mountain peaks, there is something for everyone to discover.    
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="bg-[#389b87] text-gray-100 px-5 py-3 font-semibold rounded"
          >
            Start Now
          </a>
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

export default Header