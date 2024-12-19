function Banner(){
    return(
        <>
        <div className="relative w-full h-[320px]" id="home">
    <div className="absolute inset-0 opacity-70">
        <img src="public/ai-pic.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />

    </div>
    <div className="absolute inset-9 text-white flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Collect moments, not things</h1>
            <p className="font-regular text-xl mb-8 mt-4">Writing is the painting of the voice</p>
            <a href="/blogform"
                className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Add Me</a>
        </div>
    </div>
</div>

        </>
    )
}
export default Banner