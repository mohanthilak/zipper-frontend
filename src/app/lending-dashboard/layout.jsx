const Heading = () => {
    return (
        <div className="explore_text text-3xl font-semibold">
            <h2 className='text-[#002379]'>Lending Dashboard</h2>
        </div>
    )
}

const Layout = ({children}) => {
    return (
        <div className='mt-28 md:mt-10 px-10 w-[80%]'>
        <Heading></Heading>
        <div className='h-[88%] mt-10  w-full '>
            {children}
        </div>
      </div>
    )
}

export default Layout;