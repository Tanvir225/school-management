import Image from "next/image";
import logo from "@/assests/logo.svg"

const Navbar = () => {
    return (
        <section className="flex items-center justify-between container mx-auto border-green-100 border-b-2 p-2 ">
            <div>
                <Image src={logo} alt="logo" height="" width=""></Image>
            </div>
            <div>
                <button className="btn btn-sm btn-outline btn-primary  hover:btn-primary ">Demo</button>
            </div>
        </section>
    );
};

export default Navbar;