import { Link } from "react-router-dom";
function ResetPassword() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Reset Your Password</h2>
                
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="otp"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Enter OTP
                        </label>
                        <input
                            type="text"
                            id="otp"
                            placeholder="Enter the OTP"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="new-password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            New Password
                        </label>
                        <input
                            type="password"
                            id="new-password"
                            placeholder="Enter your new password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="confirm-password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Re-enter your new password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <Link to="/login">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Reset Password
                    </button>
                    </Link>
                </form>

                <p className="text-center text-gray-600 text-sm mt-4">
                    Didn’t receive the OTP?{" "}
                    <a
                        href="#"
                        className="text-indigo-500 hover:underline"
                    >
                        Resend OTP
                    </a>
                </p>
            </div>
        </div>
    );
}

export default ResetPassword;
