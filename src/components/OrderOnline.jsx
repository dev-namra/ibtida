import deliverooLogo from '../assets/Deliveroo-logo-2048x1000.png'; 
import uberEatsLogo from '../assets/uber-eats-logo.png'; 

const OrderOnline = () => {
    return (
        <section id='order-online' className="bg-white min-h-[calc(100vh-24rem)] flex items-center justify-center">
            <div className="container max-w-screen-lg flex flex-col items-center gap-8 md:gap-16 p-8 text-center">
                <h1 className="text-4xl font-bold text-primary mb-4 font-lobster-two">Order Online</h1>
                <p className="text-lg mb-8">Choose your favorite platform to order from:</p>
                
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Deliveroo */}
                    <a 
                        href="https://deliveroo.co.uk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center transition-transform transform hover:scale-105"
                    >
                        <img 
                            src={deliverooLogo} 
                            alt="Deliveroo" 
                            className="h-32 mb-4" 
                        />
                        <span className="text-xl font-medium">Order on Deliveroo</span>
                    </a>

                    {/* Uber Eats */}
                    <a 
                        href="https://ubereats.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center transition-transform transform hover:scale-105"
                    >
                        <img 
                            src={uberEatsLogo} 
                            alt="Uber Eats" 
                            className="h-32 mb-4" 
                        />
                        <span className="text-xl font-medium">Order on Uber Eats</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default OrderOnline;
