import classnames from 'classnames'
export default function Navbar() {
  const buttonStyle = '" text-white w-40 h-10 rounded '
  return (
    <div className="flex px-20 h-20 shadow-md w-screen justify-between  items-center">
      <h1 className="text-3xl font-semibold">ATools</h1>
      <div className="md:flex gap-6 hidden">
        <button className={classnames(buttonStyle, 'bg-slate-800')}>
          Start Free Trial
        </button>
        <button className={classnames(buttonStyle, 'bg-orange-500')}>
          Login
        </button>
      </div>
    </div>
  )
}
