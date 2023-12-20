
function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm space-y-6 bg-white border border-gray-200 rounded-lg shadow-lg p-6  w-1/2 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              id="email"
              placeholder="email@example.com"
              required
              type="email"
              className="w-full max-w-xs input input-bordered"
            />
          </div>
          <div className="space-y-2">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              id="password"
              required
              type="password"
              className="w-full max-w-xs input input-bordered"
            />
          </div>
          <div className="space-y-2">
            <button className="text-white bg-black btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
