import Image from "next/image";

type Props = {};

const fecha = new Date().getFullYear()

const Footer = (props: Props) => {
  return (
    <footer id="contact" className="bg-[#050d11]">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 py-12 md:grid-cols-3">
        <div className="row-start-3 row-end-4 flex flex-col items-center gap-y-8 md:row-start-1 md:row-end-2 md:items-start">
          <div>
            <Image
              src="/logo-footer.svg"
              width={120}
              height={120}
              alt="logo"
              className="w-16 object-cover"
            />
          </div>
          <p className="text-center text-sm font-light text-white md:text-left">
            Get out there & discover your next
            <br className="hidden md:flex" /> slope, mountain & destination!
          </p>
          <p className="text-xs text-[#1f526b]">
            Copyright {fecha} The Hike, Inc.
          </p>
        </div>
        <div className="mb-10 flex justify-center md:mb-0">
          <ul className="space-y-4">
            <li className="cursor-pointer font-bold text-white hover:text-yellow-300">
              More on the Blog
            </li>
            <li className="cursor-pointer text-white hover:text-yellow-300">
              About Us
            </li>
            <li className="cursor-pointer text-white hover:text-yellow-300">
              Contributors
            </li>
            <li className="cursor-pointer text-white hover:text-yellow-300">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="mb-10 flex flex-col gap-y-5 items-center md:mb-0 md:items-end">
          {/* <ul className="space-y-4">
            <li className="cursor-pointer font-bold text-white hover:text-yellow-300">
              More on The Hike
            </li>
            <li className="cursor-pointer text-white hover:text-yellow-300">
              The team
            </li>
            <li className="cursor-pointer text-white hover:text-yellow-300">
              Job
            </li>
            <li className="cursor-pointer text-white hover:text-yellow-300">
              Press
            </li>
          </ul> */}
          <div className="flex flex-col gap-y-5">
            <p className="font-semibold md:self-start self-center text-yellow-300">Subscribe to our Newsletter</p>
            <div className="flex gap-x-3">
              <input type="text" placeholder="jonhdoe@mail.com" className="rounded-md border-2 px-4 h-10"/>
              <button className="rounded-md h-10 px-4 text-yellow-300 bg-[#1f526b] ">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
