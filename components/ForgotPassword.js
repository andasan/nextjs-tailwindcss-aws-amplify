import { Auth } from 'aws-amplify'

import Input from './Input'

export default function ForgotPassword({ onChange, setUiState, forgotPassword }) {
  return (
    <div>
      <p className='text-3xl font-black'>Forgot your Password?</p>
      <div className='mt-10'>
        <label htmlFor='email' className='text-sm'>
          Email
        </label>
        <Input type="email" onChange={onChange} name='email' />
      </div>

      <button
        onClick={forgotPassword}  
        className='text-white w-full mt-6 bg-pink-600 p-3 rounded'
      >Reset Password
      </button>

      <button
        onClick={() => setUiState('signIn')}
        className='text-sm mt-6 text-pink-600'
      >Cancel
      </button>
    </div>
  )
}
