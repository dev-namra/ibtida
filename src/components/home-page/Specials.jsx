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
                            <div class="text-xl font-medium">Beef Wellington</div>
                            <div class="text-xl font-medium">$39</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            A classic dish made with filet mignon, pâté, and mushrooms, wrapped in puff pastry and baked to a golden brown.
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="text-xl font-medium">Rack of Lamb</div>
                                <div class="text-xl font-medium">$29</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            A tender and juicy cut of lamb, seasoned and roasted to perfection, served with seasonal vegetables and a red wine reduction.
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                            <div class="text-xl font-medium">Seafood Paella</div>
                            <div class="text-xl font-medium">$29</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            A traditional Spanish dish made with saffron-infused rice, seafood such as shrimp, clams, and mussels, and an assortment of vegetables.
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 md:mb-20">
                        <h3 class="col-span-full text-2xl font-semibold font-fraunces text-center md:text-left">Popular Drinks</h3>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                            <div class="text-xl font-medium">Classic Martini</div>
                            <div class="text-xl font-medium">$16</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            with gin or vodka, vermouth, and olives
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                            <div class="text-xl font-medium">Negroni</div>
                            <div class="text-xl font-medium">$16</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            with gin, vermouth, and Campari
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                            <div class="text-xl font-medium">Old Fashioned</div>
                            <div class="text-xl font-medium">$16</div>
                            </div>
                            <div class="text-sm text-gray-600">
                            with whiskey, bitters, and sugar
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                    <Link to='/menu' className='inline-block bg-custom-orange text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition'>Full Menu</Link>

                    </div>
                </div>
            </div>
        </section>
    )
}



export default Specials;