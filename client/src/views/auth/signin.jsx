// V signin.jsx
import { supabase } from '../../app/supabase'
import { useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
      // Úspěšné přihlášení - přesměrovat uživatele
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    // Váš existující formulář s handlery pro email a password
  )
}