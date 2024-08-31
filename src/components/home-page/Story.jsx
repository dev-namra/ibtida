import { Link } from "react-router-dom";

const Story = () => {
    return (
        <section id='story' className="bg-background-col min-h-screen flex items-center justify-center">
            <div className="container max-w-screen-md flex flex-col gap-8 md:gap-16 p-8">
                <div className="flex flex-col gap-8 md:gap-16">
                    <h2 className="text-custom-orange text-2xl md:text-5xl text-left md:leading-tight font-fraunces">Ibtida is a celebration of heritage, elegance, and exquisite flavors.</h2>
                    <h2 className="text-custom-orange text-2xl md:text-5xl text-left md:leading-tight font-fraunces">At Ibtida, each dish tells a story of the Mughal era, where every bite is a journey through history, infused with aromatic spices and regal opulence.</h2>
                </div>
                <Link href="/about" className="bg-transparent hover:bg-custom-orange text-custom-orange font-semibold hover:text-background-col py-2 px-4 border border-custom-orange hover:border-transparent rounded-md mx-auto w-full text-center font-roboto">Our Story</Link>
            </div>
        </section>
    )
}

export default Story;