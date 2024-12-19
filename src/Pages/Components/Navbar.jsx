

function Navbar(){
    return(
        <>
        <navbar>
      <div className='w-full py-3 border-b'>

        <div className='flex justify-between px-20 items-center font-semibold'>
          <div>
            <h1 className="text-2xl">BLOGNEST</h1>
          </div>
          <div className='flex xl:gap-10 md:gap-8  gap-2'>
            <a href="/">Home</a>
            <a href="">Work</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Testimonial</a>
          </div>
          <div>
           <a href="/login"><button className='py-2 px-6 bg-black text-white rounded-3xl font-semibold mr-5'>Login</button></a>
           <a href="/signup"><button className='py-2 px-6 bg-black text-white rounded-3xl font-semibold'>Signup</button></a>
          </div>
        <div className="w-7 h-7">
          <a href="/profile"><img src="public/profile.png"/></a>
        </div>
        </div>
        
      </div>
    </navbar>
        </>
    )
}
export default Navbar