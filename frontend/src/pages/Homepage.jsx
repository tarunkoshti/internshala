
import React from 'react'
import Internshiocard from '../components/Internshiocard'
import Jobcard from '../components/Jobcard'
import Footer from '../components/footer'

const Homepage = () => {
  return (
    <>
                {/* Main div */}
      <div className=' w-full overflow-hidden'>

              {/* Heading div */}
        <div className='text-5xl text-center '>
          <h3 className='font-bold py-10'>Make your dream career a reality</h3>
          <h4 className='text-3xl font-semibold pb-5'>Trending on Internshala 🔥</h4>
        </div>
              {/* ScrollBar-div */}
        <div id='job' className='h-96 w-full mt-12 flex items-center gap-12 px-5 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory '>

            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png)] bg-cover bg-no-repeat'></div>

            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl  bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/eoss_fh_jan24-student.png.webp)] bg-cover bg-no-repeat'></div>

            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp)] bg-cover bg-no-repeat'></div>

            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/aditya_birla_capital-student.png.webp)] bg-cover bg-no-repeat'></div>

            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/is_jobs-student.png.webp)] bg-cover bg-no-repeat'></div>

            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/int_opps-student.png.webp)] bg-cover bg-no-repeat'></div>


        </div>
          {/* Heading-Internship-card */}
        <div className='py-10 w-full mt-5 text-center'>
            <h3 className='text-3xl font-semibold'>Latest internships on Internshala</h3>
        </div>

        {/* Internship-card */}
        <div className='h-4/5 w-full '>
          <Internshiocard/>
        </div>

         {/* Heading-Job-card */}
         <div className='py-10 w-full mt-5 text-center'>
            <h3 className='text-3xl font-semibold'>Latest jobs on Internshala</h3>
        </div>

         {/* Job-card */}
         <div className='h-4/5 w-full '>
          <Jobcard/>
        </div>

        {/* Scroller-div */}
        <div className='h-[40vh] w-full mt-16 border-b border-inherit'>
           <div className='h-[20vh] w-full'>
           <h3 className='pt-12 text-center text-3xl font-semibold '>Top companies trust us</h3>
           </div>
            {/* scroller */}
            <div id='scroller' className='h-[20vh] w-full  flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory'>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Boat_Logo.webp/1200px-Boat_Logo.webp.png)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://car-logos.b-cdn.net/wp-content/uploads/2023/04/ceat-logo-present-scaled.webp)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Xiaomi_Logo_Design_History_Evolution_3_1024x1024.jpg?v=1692902440)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqZuyjakV-orJE5KIoaxcytK0DSkgbrAKMA&usqp=CAU)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://images.hindustantimes.com/img/2021/06/11/550x309/1609147522_O1aw88_BMS_1623383036467_1623383052836.jpg)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://www.shutterstock.com/image-vector/west-sumatra-indonesia-january-10-260nw-2410799015.jpg)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://logos-world.net/wp-content/uploads/2022/07/HCL-Technologies-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5Fyk7ry7Ee1SCJ2U8w2DTLuvC9bN_qHAxA&usqp=CAU)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://seeklogo.com/images/I/indigo-airlines-logo-EA9977FF45-seeklogo.com.png)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AtbCYAzwLRkKGE8UxgSrmhgAXDSuIN5yJzTtsf8h4BPFVIDA8qXrWj3djnSMLbA6RCs&usqp=CAU)] bg-center bg-cover bg-no-repeat shrink-0'></div>

                <div className='h-[8vh] w-36 bg-zinc-900 bg-[url(https://media.licdn.com/dms/image/C4E12AQFjVRGvzXfQ7w/article-cover_image-shrink_600_2000/0/1595858364695?e=2147483647&v=beta&t=M1cz81QOyrkr1ZhC_bz3M3ARiBx-F12kXbZLl4fWJQU)] bg-center bg-cover bg-no-repeat shrink-0'></div>
            </div>
        </div>

        {/* Status-div */}
        
        <div className='h-[40vh] w-full mt-10 flex items-center justify-evenly'>
            <div className='h-[20vh] w-64 flex flex-col justify-center items-center '>
              <h1 className='text-4xl font-bold'>300K+</h1>
              <h4 className='text-xl'>companies hiring</h4>
            </div>
            <div className='h-[20vh] w-64  flex flex-col justify-center items-center border-l-2'>
              <h1 className='text-4xl font-bold'>10K+</h1>
              <h4 className='text-xl text-center'>new openings <br /> everyday</h4>
            </div>
            <div className='h-[20vh] w-64  flex flex-col justify-center items-center border-l-2'>
              <h1 className='text-4xl font-bold'>21Mn+</h1>
              <h4 className='text-xl'>active students</h4>
            </div>
            <div className='h-[20vh] w-64 flex flex-col justify-center items-center border-l-2'>
              <h1 className='text-4xl font-bold'>600K+</h1>
              <h4 className='text-xl'>learners</h4>
            </div>
        </div>

        {/* Social-div */}

        <div className='h-[40vh] w-full bg-[#0565C8] mt-10 flex items-center justify-around'>
           <div className='h-[35vh] w-2/5 flex items-center justify-center'>
            <h1 className='text-center text-4xl font-bold text-white'>Empower your career with <br /> Internshala today</h1>
           </div>
           <div className='h-[35vh] w-2/4  flex items-center justify-center gap-10'>
            <button className='px-12 py-3 font-semibold bg-white text-black rounded-lg'>Continue with Gogle</button>
            <button className='px-12 py-3 font-semibold bg-blue-900 text-white rounded-lg'>Register Now</button>
           </div>
        </div>

        {/* Footer-div */}

        <div className='h-[95vh] w-full  mt-10 flex items-center'>
          <Footer/>
        </div>

      </div>
    </>
  )
}

export default Homepage

