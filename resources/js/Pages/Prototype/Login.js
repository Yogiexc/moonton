export default function Login(){
    return <div class="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div class="fixed top-[-50px] hidden lg:block">
            <img src="public/images/signup-image.png"
                class="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
        </div>
        <div class="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
                <img src="public/images/moonton-white.svg" alt="" />
                <div class="my-[70px]">
                    <div class="font-semibold text-[26px] mb-3">
                        Welcome Back
                    </div>
                    <p class="text-base text-[#767676] leading-7">
                        Explore our new movies and get <br />
                        the better insight for your life
                    </p>
                </div>
                <form class="w-[370px]">
                    <div class="flex flex-col gap-6">
                        <div>
                            <label class="text-base block mb-2">Email Address</label>
                            <input type="email" name="email"
                                class="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                placeholder="Email Address" />
                        </div>
                        <div>
                            <label class="text-base block mb-2">Password</label>
                            <input type="password" name="password"
                                class="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                placeholder="Password" />
                        </div>
                    </div>
                    <div class="grid space-y-[14px] mt-[30px]">
                        <a href="/" class="rounded-2xl bg-alerange py-[13px] text-center">
                            <span class="text-base font-semibold">
                                Start Watching
                            </span>
                        </a>
                        <a href="sign_up.html" class="rounded-2xl border border-white py-[13px] text-center">
                            <span class="text-base text-white">
                                Create New Account
                            </span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
}