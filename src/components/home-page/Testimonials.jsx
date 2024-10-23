import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            text: "A truly royal experience with flavors that transport you to Mughal times!",
            name: "Yasira Gautam",
            image: require("../../assets/testimonials/OIP.jpg"),
            rating: 5
        },
        {
            text: "The ambiance and the food are both exceptional. Highly recommend Ibtida!",
            name: "Kapil Sharma",
            image: require("../../assets/testimonials/OIP (1).jpg"),
            rating: 4
        },
        {
            text: "An authentic Mughal dining experience that you won't find anywhere else.",
            name: "Rachel Green",
            image: require("../../assets/testimonials/360_F_368890785_yPhrRtWYi0eRQkTaehpyAxytx0yX8Arx.jpg"),
            rating: 5
        },
        {
            text: "Every dish was a masterpiece, full of rich and vibrant flavors.",
            name: "Gautam Singh",
            image: require("../../assets/testimonials/OIP (2).jpg"),
            rating: 5
        },
        {
            text: "Ibtida offers a dining experience that's both luxurious and delicious.",
            name: "Linda Davis",
            image: require("../../assets/testimonials/360_F_368890785_yPhrRtWYi0eRQkTaehpyAxytx0yX8Arx.jpg"),
            rating: 4
        },
    ];

    return (
        <section className="bg-[#fff]">
            <h1 className='text-custom-orange text-2xl text-center font-italiana mx-auto pt-8 md:pt-32 pb-4 font-bold'>TESTIMONIALS</h1>
            <h1 className='font-italiana text-xl md:text-2xl text-center mx-auto text-background-col pb-8 md:pb-14 font-semibold'>We care about our customer experience</h1>
            <div className="overflow-hidden relative">
                <div className="ticker flex pb-8 md:pb-40">
                    {testimonials.concat(testimonials).map((testimonial, index) => (
                        <div key={index} className="inline-block mx-4 text-lg md:text-2xl text-gray-700 font-work-sans flex-shrink-0 w-full max-w-sm">
                            <div className="relative p-8 bg-background-beige h-96 flex rounded-3xl flex-col items-center justify-center text-center">
                                {/* Circular Picture */}
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    className="w-24 h-24 rounded-full border-2 mb-4 md:mb-8"
                                />
                                {/* Horizontal Line */}
                                <hr className="w-full border-t border-[#aaa] mb-2" />
                                {/* Name */}
                                <h2 className="text-xl font-bold mb-2">{testimonial.name}</h2>
                                {/* Star Rating */}
                                <div className="flex justify-center mb-2 gap-2 md:gap-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-[#F0D53B] size-4">★</span>
                                    ))}
                                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-gray-300 size-4">★</span>
                                    ))}
                                </div>
                                {/* Testimonial Text */}
                                <p className="relative z-10 text-center font-work-sans italic pt-2 md:pt-6 text-base md:text-lg">
                                    {testimonial.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
