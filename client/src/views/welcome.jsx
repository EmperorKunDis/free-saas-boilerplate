import { useAuth } from '../app/AuthContext'
import { Link } from 'react-router-dom'

export function Welcome() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Welcome to Gravity
          </h1>
          
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-center">
              <p className="text-xl mb-4">
                You are logged in as: {user.email}
              </p>
              
              <button
                onClick={() => supabase.auth.signOut()}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome