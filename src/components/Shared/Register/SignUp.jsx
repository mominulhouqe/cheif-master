import React from 'react';

const SignUp = () => {
    return (
        <div>
            <div class="w-full max-w-md mx-auto">
                <form class="bg-white rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="daisy-input w-full" id="name" type="text" placeholder="Enter your name" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="email">
                            Email Address
                        </label>
                        <input class="daisy-input w-full" id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="daisy-input w-full" id="password" type="password" placeholder="************" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-bold mb-2" for="confirm-password">
                            Confirm Password
                        </label>
                        <input class="daisy-input w-full" id="confirm-password" type="password" placeholder="************" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="daisy-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SignUp;