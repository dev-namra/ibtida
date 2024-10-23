const Footer = () => {
    return (
        <footer className="bg-background-col text-white py-8">
            <div className="container mx-auto my-8 md:mt-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    {/* Logo and Social Links */}
                    <div className="flex flex-col justify-center">
                        <a href="https://www.linkedin.com/in/namra-mahak/" className="mb-4">
                            <h3 className="text-xl md:text-7xl 5font-bold font-fraunces text-custom-orange">Ibtida</h3>
                        </a>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-4xl font-semibold mb-4 font-fraunces text-custom-orange">Contact</h2>
                        <a href="mailto:hello@coco.io" className="text-sm block mb-2 hover:underline">hello@ibtida.io</a>
                        <a href="tel:(123)456-7890" className="text-sm block hover:underline">(123) 456-7890</a>
                    </div>

                    {/* Hours */}
                    <div>
                        <div className="text-4xl font-semibold mb-4 font-fraunces text-custom-orange">Hours</div>
                        <div className="text-sm">
                            Tuesday - Sunday<br />
                            4:00 pm - 11:00 pm
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                    {/* Legal Links */}
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="https://www.linkedin.com/in/namra-mahak/" className="text-xs hover:underline">Namra Mahak</a>
                        <a href="https://github.com/dev-namra" className="text-xs hover:underline">Github</a>
                    </div>

                    {/* Copyright */}
                    <div className="text-xs text-center md:text-right">
                        © 2024 Ibtida - all rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
