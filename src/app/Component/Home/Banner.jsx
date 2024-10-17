import Image from "next/image";
import bannerImage from "./../../../assests/students.svg";
const Banner = () => {
  return (
    <section className="flex flex-col gap-10 justify-center items-center lg:flex-row ">
      <div className="w-full h-full">
        <Image
          src={bannerImage}
          height={800}
          width={800}
          alt="Picture of the author"
        ></Image>
      </div>

      <div className="space-y-5">
        <header className="leading-normal text-2xl md:text-5xl md:leading-tight lg:text-5xl font-extrabold lg:leading-normal">
          Welcome to <br /> School Management <br /> System
        </header>
        <p className="leading-7 font-semibold text-justify">
          Streamline school management, class organization, and add students and
          faculty. Seamlessly track attendance, assess performance, and provide
          feedback. Access records, view marks, and communicate effortlessly.
        </p>
        <div className="">
          <button className="btn btn-outline btn-primary  w-48 hover:btn-primary">Login</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;


