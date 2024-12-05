import React from 'react'
function history() {
  return (
    <div class="p-4 mt-4">
    <h1 class="text-4xl text-center font-semibold mb-6">Our History</h1>
    <div class="container">
      <div class="flex flex-col md:grid grid-cols-12 text-gray-50">

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
              <i class="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1">2012</h3>
            <p class="leading-tight text-justify w-full">
            Inspired by Shree Narendra Modi, Puushkar an ISB Alum became the Founding Member of Citizens for Accountable Governance, the official team of Shree Narendra Modi’s Prime Ministerial campaign.
            </p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
              <i class="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div class="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1">2012-2014</h3>
            <p class="leading-tight text-justify">
            Ideated and executed multiple projects like the collection of iron from 6lac villages, Chai pe Charcha, Modi in 3D, NaMo for India, Onground research, and campaign. Ideated the NaMo App with providing consultancy.
            </p>
          </div>
        </div>
        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-blue-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center">
              <i class="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div class="bg-blue-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1">2014-2019</h3>
            <p class="leading-tight text-justify">
            Chief consultant to the CM War Room and ideated and provided blue print for a unique first time ground influencer outreach project, Mukhyamantri Mitra.</p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-orange-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 shadow text-center">
              <i class="fas fa-times-circle text-white"></i>
            </div>
          </div>
          <div class="bg-orange-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1 text-gray-50"> 2019-2021</h3>
            <p class="leading-tight text-justify">
            Consulting to various national and international government bodies, political leaders and tech platforms for ground outreach.
            </p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-yellow-300 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-300 shadow text-center">
              <i class="fas fa-exclamation-circle text-yellow-400"></i>
            </div>
          </div>
          <div class="bg-yellow-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1 text-black">2021- Present</h3>
            <p class="leading-tight text-justify">
            Founded a tech platform for assistive governance and outreach to citizens. Like Gramya, SHAKKTII, Grath. Worked with Chattisgarh, Madhya Padresh The principal coordinator for P20. With the use of AI and Gramya conducted 1000 roundatbles at Gram Panchayat.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default history