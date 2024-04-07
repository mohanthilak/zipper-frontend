import HomePageHowItWorksBoxes from '@/Components/HomePageHowItWorksBoxes/HomePageHowItWorksBoxes'
import React from 'react'

const HomePageHowItWorks = () => {
  return (
    <div className="px-6 ">
        <div>
            <h1 className="font-bold text-2xl py-4">How It Works</h1>
        </div>
        <div className="py-4 flex flex-wrap justify-center   gap-20">
            <HomePageHowItWorksBoxes section={"L 1/3"} heading={"Set up a library from where you will catalog your books."} body={"Login & visit the lending dashboard. Become a lender with a small fee of rupees 50(INR) every month. Add a library by mentioning the location from where you’ll be dispatching your books."} />
            <HomePageHowItWorksBoxes section={"L 2/3"} heading={"Add your books to your library."} body={"In the lending dashboard page, click on the `Add Book` button to add a book to your library. Quote your price you want to charge on a per-week basis and also the refundable deposit required for that book."} />
            <HomePageHowItWorksBoxes section={"L 3/3"} heading={"Configure your library and check your analytics."} body={"The lending dashboard allows you to configure your books and libraries. You also get a sweet analytical display of your performance."} />
            <HomePageHowItWorksBoxes section={"B 1/3"} heading={"Borrow the book you want from a library near you."} body={"Want to explore a genre or just don’t feel like buying the book, but want to read it? Login & check out the range of books available in your neighborhood. "} />
            <HomePageHowItWorksBoxes section={"B 2/3"} heading={"Maintain the required deposit."} body={"Just to protect the lender from the very few unfortunate incidents making having a deposit was mandatory. We do realize how cumbersome this would be, but do not fret, this deposit is completely refundable. Also recurring customers will have discounts on the deposit. "} />
            <HomePageHowItWorksBoxes section={"B 1/3"} heading={"Pay per week basis."} body={"You can either pay while returning or on a weekly basis during your borrowing period. Make sure your borrowing due doesn’t cross the amount of deposit for the book. if you still want to continue, its good to let the lender know about it."} />
        </div>
    </div>
  )
}

export default HomePageHowItWorks