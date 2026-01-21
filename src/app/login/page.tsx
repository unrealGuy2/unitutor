"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import Router

export default function Login() {
  const router = useRouter(); // Initialize Router
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Attempt:", formData);
    
    // REDIRECT TO DASHBOARD
    router.push('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Continue your learning journey</p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="student@gmail.com" 
              required 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Log In
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}