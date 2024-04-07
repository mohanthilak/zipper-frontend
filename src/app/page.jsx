import HomePageNavbar from "@/Components/Home-page-navbar/HomePageNavbar"
import HomePageMainHero from "./HomePageMainHero"
import HomePageHowItWorks from "./HomePageHowItWorks"

const Page = () => {

  return (
    <div className="">
      <HomePageNavbar />
      <main>
        <HomePageMainHero />
        <HomePageHowItWorks />
      </main>
    </div>
  )
}

export default Page