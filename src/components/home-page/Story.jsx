import { Link } from "react-router-dom";

const Story = () => {
    return (
        <section id='story' className="bg-background-col min-h-screen flex items-center justify-center">
            <div className="container max-w-screen-lg flex flex-col gap-8 md:gap-16 p-8">
                <div className="flex flex-col gap-8 md:gap-16">
                    <h2 className="text-[#fafafa] text-2xl md:text-5xl text-left md:leading-tight font-italiana">
                        Ibtida is a celebration of heritage, elegance, and exquisite flavors.
                    </h2>
                    <h2 className="text-[#fafafa] text-2xl md:text-5xl text-left md:leading-tight font-italiana">
                        At Ibtida, each dish tells a story of the Mughal era, where every bite is a journey through history, infused with aromatic spices and regal opulence.
                    </h2>
                </div>
                <Link to="/about" className="group flex items-center justify-center text-custom-orange font-work-sans mx-auto w-full md:w-auto text-center transition-all duration-300 ease-in-out py-8">
                    <span className="group-hover:text-2xl transition-transform duration-300">Our Story</span>
                    <span className="ml-2 inline-block transform transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:scale-x-150 group-hover:scale-y-100">
                        →
                    </span>
                </Link>
            </div>
        </section>
    )
}

export default Story;
