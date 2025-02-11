import { Navigate } from 'react-router-dom'
import { useAuth } from '../app/AuthContext'
import { View } from '../components/lib'

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()

  // Zobrazení loading stavu
  if (loading) {
    return <View display={() => <div>Loading...</div>} title="Loading" />
  }

  // Přesměrování na přihlášení, pokud uživatel není přihlášený
  if (!user) {
    return <Navigate to="/signin" replace />
  }

  // Pokud je uživatel přihlášený, zobrazí se chráněný obsah
  return children
}

export default PrivateRoute