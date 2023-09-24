import React, {FC} from "react";

const FooterSection: FC = () => {
    return (
        <footer>
            <div className="p-10 bg-opal text-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                        <h3>Company</h3>
                        <br/>
                        <h5 className="text-black font-bold text-lg">DecoFurni</h5>
                        </div>
                        <div className="mb-5">
                        A123 Lost Street <br/>
                        I like cats, 928-283 <br/>
                        Mars <br/>
                        <strong className="text-black">Phone:</strong> +69 672 982 928
                        </div>
                        <div className="mb-5">
                            <h4 className="text-black font-bold pb-1">Useful Links</h4>
                            
                            <ul>
                                <li>Products</li>
                                <li>Contact</li>
                                <li>Bag</li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-black font-bold pb-1">Our Products</h4>
                            
                            <ul>
                                <li>Sofas</li>
                                <li>Lamps</li>
                                <li>Chairs</li>
                                <li>Wardrobes</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
};
export default FooterSection