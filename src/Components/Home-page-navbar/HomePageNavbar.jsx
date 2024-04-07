import HomePageAuthButtons from "./HomePageAuthButtons"

const HomePageNavbar = () => {
  return (
    <div className=" h-14  flex items-center justify-between px-6">
        <div className="">
            <h1 className=" font-bold text-4xl text-[#00046A]">zipper</h1>
        </div>
        <div className="flex gap-10">
            <HomePageAuthButtons text={"Login"}/>
            <HomePageAuthButtons text={"Sign Up"}/>
        </div>
    </div>
  )
}

export default HomePageNavbar