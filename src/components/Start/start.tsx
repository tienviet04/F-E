export default function Start() {
  return (
    <>
      <div className="pb-12 pt-12 max-md:hidden max-xl:mx-4">
        <div
          className="relative bg-cover bg-center h-[236px] border-[#262626] border-2 rounded-lg bg-black bg-opacity-50"
          style={{
            backgroundImage: "url('../../src/images/BackgroundImages.png')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-between mx-12">
            <div className="text-white">
              <p className="text-2xl font-medium pb-2">
                Bắt đầu dùng thử miễn phí ngay hôm nay!!!
              </p>
              <p>
                This is a clear and concise call to action that encourages users to
                sign up for a free trial of StreamVibe.
              </p>
            </div>
            <div>
              <a
                className="inline-block rounded border md:flex md:justify-center border-red-600 bg-red-600 lg:px-12 md:text-xs md:w-[200px] py-3 lg:w-full lg:text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                <p className="ml-4">Dùng thử miễn phí</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="pb-24 pt-12 w-auto md:hidden mx-4">
        <div
          className="relative bg-cover bg-center h-[236px]  border-[#262626] border-2 rounded-lg bg-black bg-opacity-50"
          style={{
            backgroundImage: "url('../../src/images/BackgroundImages.png')",
          }}
        >
          <div className="absolute inset-0 text-center pt-1 mx-12 w-auto">
            <div className="text-white ">
              <p className="text-2xl font-medium pb-1 max-sm:pb-2 max-sm:text-xl">
                Bắt đầu dùng thử miễn phí ngay hôm nay!!!
              </p>
              <p className="text-sm text-[#999999]">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
              </p>
            </div>
            <div className="mt-6 max-sm:mt-2">
              <a
                className="inline-block rounded border border-red-600 bg-red-600 px-8 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                Dùng thử miễn phí
              </a>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
