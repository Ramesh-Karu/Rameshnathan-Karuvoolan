import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (error) {
      console.error(error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="p-8 border rounded">
        <h1 className="text-xl mb-4">Admin Login</h1>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="block mb-2 p-2 border" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="block mb-2 p-2 border" />
        <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
      </form>
    </div>
  );
}
