const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="container text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h1 className="font-bold text-black font-lexend text-[3rem] mb-5 pr-5">
              SHOP.CO
            </h1>
            <p className="font-lexend">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-lexend font-bold">
              Resources
            </div>
            <a className="my-3 block font-lexend" href="/#">
              Documentation <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block font-lexend" href="/#">
              Tutorials <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block font-lexend" href="/#">
              Support <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-lexend font-bold">
              Support
            </div>
            <a className="my-3 block font-lexend" href="/#">
              Help Center <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block font-lexend" href="/#">
              Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block font-lexend" href="/#">
              Conditions <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-lexend font-bold">
              Contact us
            </div>
            <a className="my-3 block font-lexend" href="/#">
              XXX XXXX, Floor 4 San Francisco, CA
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block font-lexend" href="/#">
              contact@company.com
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
        >
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
          </div>
          <div className="my-5 font-lexend">
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
