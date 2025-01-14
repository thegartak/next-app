

import {logoutFunction} from '@/app/actions-und';

export function LogoutBtn () {
  return (
    <button onClick={logoutFunction} type="submit" className="bg-blue-200 p-2 rounded-md shadow-md hover:bg-sky-700">LogOut</button>
  )
} 