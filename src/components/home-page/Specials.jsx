import { Link } from 'react-router-dom';

const Specials = () => {

    return (
        <section className="bg-background-beige">
            <div class="container mx-auto px-4">
                <div class="py-12 md:py-20">
                    <div class="mb-16 text-center">
                        <h2 class="text-5xl md:text-7xl font-bold font-fraunces text-custom-orange">Our Menu</h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 md:mb-20">
                        <h3 class="col-span-full text-2xl font-semibold font-fraunces text-center md:text-left">Best Sellers</h3>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                            <div class="text-xl font-medium">Murgh Malai Kebab</div>
                            <div class="text-xl font-medium">₹380</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            Tender chicken marinated in cream, yogurt, and mild spices
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="text-xl font-medium">Dum Biryani</div>
                                <div class="text-xl font-medium">₹500</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            Fragrant rice dish with meat or vegetables, cooked on dum
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                            <div class="text-xl font-medium">Shahi Tukda</div>
                            <div class="text-xl font-medium">₹220</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            Bread pudding with saffron and nuts
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 md:mb-20">
                        <h3 class="col-span-full text-2xl font-semibold font-fraunces text-center md:text-left">Popular Drinks</h3>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                            <div class="text-xl font-medium">Mango Lassi</div>
                            <div class="text-xl font-medium">₹150</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            Yogurt-based mango drink
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                            <div class="text-xl font-medium">Thandai</div>
                            <div class="text-xl font-medium">₹140</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            Cooling spiced milk drink with nuts
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                            <div class="text-xl font-medium">Badshahi Bahar</div>
                            <div class="text-xl font-medium">₹190</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            Refreshing mix of mint and lime with a twist
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                    <Link to='/menu' className='inline-block bg-custom-orange text-white font-semibold py-2 px-4 md:px-20 rounded-full hover:bg-orange-600 transition'>View Full Menu</Link>

                    </div>
                </div>
            </div>
        </section>
    )
}



export default Specials;