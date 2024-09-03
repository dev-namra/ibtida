import React from 'react';

const Testimonials = () => {
    const testimonials = [
        "A truly royal experience with flavors that transport you to Mughal times!",
        "The ambiance and the food are both exceptional. Highly recommend Ibtida!",
        "An authentic Mughal dining experience that you won't find anywhere else.",
        "Every dish was a masterpiece, full of rich and vibrant flavors.",
        "Ibtida offers a dining experience that's both luxurious and delicious.",
    ];

    return (
        <section className="bg-background-beige">
            <h1 className='font-italiana text-2xl md:text-5xl text-center mx-auto py-8 md:py-16 text-background-col'>Hear it from our customers</h1>
            <div className="overflow-hidden relative ">
                <div className="animate-ticker flex pb-8 md:pb-24">
                    {testimonials.concat(testimonials).map((testimonial, index) => (
                        <div key={index} className="inline-block mx-8 text-lg md:text-2xl text-gray-700 font-work-sans flex-shrink-0 w-full max-w-lg">
                            <div className="relative p-8 bg-white shadow-lg rounded-lg h-64 flex items-center">
                                <span className="absolute top-0 left-0 text-6xl text-custom-orange font-bold -translate-x-6 -translate-y-2">“</span>
                                <p className="relative z-10 text-center font-work-sans italic">
                                    {testimonial}
                                </p>
                                <span className="absolute bottom-0 right-0 text-6xl text-custom-orange font-bold translate-x-6 translate-y-6">”</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
