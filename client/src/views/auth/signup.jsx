// V signup.jsx
import { supabase } from '../../app/supabase'
import { useState } from 'react'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) throw error
      // Úspěšná registrace - zobrazit potvrzení
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    // Váš existující formulář s handlery pro email a password
  )
}