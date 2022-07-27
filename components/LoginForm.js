import { useState } from 'react'
import classnames from 'classnames'
export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginResult, setLoginResult] = useState('')
  const [isSuccess, setIsSuccess] = useState('')

  async function submitHandler(e) {
    e.preventDefault()
    const res = await fetch(`https://reqres.in/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // email: `'${email}'`,
        email: email,
        password: password,
      }),
    })
    const resData = await res.json()
    let data
    if (resData.error) {
      setIsSuccess(false)
      data = resData.error
    }
    if (resData.token) {
      setIsSuccess(true)
      data = resData.error
      console.log('success')
    }

    console.log(data)
    setLoginResult(data)
    setPassword('')
    setEmail('')
  }

  const inputCss =
    'px-4 w-full rounded h-12 border-[1.5px]   outline-slate-800 border-gray-300 '
  return (
    <div className="flex items-center justify-center h-full w-full      ">
      <div className="flex flex-col items-center  w-[360px] border-gray-300 relative ">
        <div className=" flex flex-col items-center gap-1 mb-6">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-sm  text-gray-400">Sub-title text goes here</p>
        </div>
        <form
          onSubmit={submitHandler}
          //   onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 w-full mb-5"
        >
          <input
            placeholder="Email Address *"
            type="email"
            className={inputCss}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className={inputCss}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="h-12 bg-slate-800 text-white rounded font-medium"
            // onSubmit={submitHandler}
            // onClick={this.submitHandler}
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="checkPassword"
              id="checkPassword"
              className="    cursor-pointer  outline-none focus-none
              w-5 h-5 border-3 checked:bg-slate-800 rounded "
            />
            <label
              for="checkPassword"
              id="checkPassword"
              className="cursor-pointer "
            >
              Remember Password
            </label>
          </div>
          <p>Forget Password?</p>
        </div>
        <div
          className={classnames(' w-full absolute -bottom-10 capitalize', {
            'text-green-500': isSuccess,
            'text-red-500': !isSuccess,
          })}
        >
          {isSuccess && 'Successful Login'}
          {!isSuccess && loginResult}
        </div>
      </div>
    </div>
  )
}
