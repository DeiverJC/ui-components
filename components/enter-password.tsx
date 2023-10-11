import Image from "next/image";
import Link from "next/link";

export default function EnterPassword() {
  return (
    <>
      <div className="h-[700px] w-full bg-[#f6f7f9] flex justify-center items-center relative">
        <div className="absolute right-5 bottom-5 flex flex-col gap-0 items-end">
          <h3 className="font-medium text-sm">1/100</h3>
          <Link
            href="https://twitter.com/DeiverJC"
            className="text-sm text-gray-500 hover:text-[#132B50]"
          >
            @DeiverJC
          </Link>
        </div>
        <div className="h-[577px] w-[577px] bg-white rounded-2xl shadow-sm">
          <div className="p-20 text-[#132B50] flex flex-col gap-8">
            {/* TITLE */}
            <h1 className="font-bold text-3xl">Enter your password</h1>
            {/* AVATAR */}
            <div className="flex justify-start items-center gap-4">
              <Image
                src="/images/enter_password/avatar.svg"
                alt="Sarah Bills"
                width="78"
                height="78"
              />
              <div>
                <p className="text-sm font-medium">Business Account</p>
                <h2 className="text-lg font-bold">Sarah Bills</h2>
              </div>
            </div>
            {/* FORM CONTROL */}
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <div className="flex gap-4 w-full">
                <div className="relative w-full">
                  <input
                    id="password"
                    type="password"
                    placeholder="**************"
                    className="border border-[#132B50] p-4 pl-11 rounded-lg w-full"
                  />
                  <Image
                    src="/images/enter_password/lock.svg"
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    alt="lock"
                    width={27}
                    height={27}
                  />
                </div>
                <Image
                  src="/images/enter_password/eye.svg"
                  className="cursor-pointer"
                  alt="lock"
                  width={27}
                  height={27}
                />
              </div>
            </div>
            {/* CHECKBOX & BUTTON */}
            <div className="flex justify-between items-center gap-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-14 h-8 bg-white border border-[#132B50] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[8px] after:bg-[#132B50] after:border-[#132B50] after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-50"></div>
                <span className="ml-3 text-base font-semibold">
                  Stay signed in
                </span>
              </label>
              <button className="bg-[#132B50] p-4 rounded-lg text-white font-semibold">
                Continue
              </button>
            </div>
            {/* LINK */}
            <Link
              href="#"
              className="font-semibold mt-2 underline underline-offset-2"
            >
              Reset password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
