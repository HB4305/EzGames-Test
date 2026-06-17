import React, { useState } from 'react';
import styles from './LoginModal.module.css';

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    if (!isOpen) return null;

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            // Logic submit data...
            console.log('Submitted', { email, password });
            onClose(); 
        }
    };

    return (
        <div aria-labelledby="modal-title" aria-modal="true"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog">
            {/* Dimming Background */}
            <div aria-hidden="true" className="absolute inset-0 bg-[#2C2A29]/40 transition-opacity" onClick={onClose}></div>
            
            {/* Modal Card */}
            <div
                className="relative w-full max-w-[440px] bg-brand-cream rounded-2xl shadow-2xl overflow-hidden transform transition-all">
                <div className="px-8 pt-8 pb-10">
                    {/* Modal Header: Logo and Close Button */}
                    <div className="flex items-start justify-between mb-8">
                        {/* Brand Logo */}
                        <div
                            className="w-10 h-10 rounded-full bg-brand-brown flex items-center justify-center text-white font-bold font-serif text-lg shadow-sm">
                            P
                        </div>
                        {/* Close Button */}
                        <button aria-label="Close modal" onClick={onClose}
                            className="text-text-muted hover:text-text-main transition-colors rounded-full p-1 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-brand-brown"
                            type="button">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    
                    {/* Modal Typography */}
                    <h2 className="text-3xl font-serif font-bold text-text-main mb-2" id="modal-title">
                        Welcome back
                    </h2>
                    <p className="text-sm text-text-muted mb-8">
                        Sign in to access your bag, orders and wishlist.
                    </p>
                    
                    {/* Sign In Form */}
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5"
                                htmlFor="email">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (emailError) setEmailError('');
                                    }}
                                    className={`block w-full rounded-md shadow-sm sm:text-sm py-2.5 px-3 bg-white border outline-none ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-brand-brown focus:ring-1 focus:ring-brand-brown'}`}
                                    id="email" name="email" placeholder="you@example.com" type="email" />
                                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                            </div>
                        </div>
                        
                        {/* Password Field */}
                        <div>
                            <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5"
                                htmlFor="password">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (passwordError) setPasswordError('');
                                    }}
                                    className={`block w-full rounded-md shadow-sm sm:text-sm py-2.5 px-3 bg-white font-sans tracking-widest placeholder:tracking-normal border outline-none ${passwordError ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-brand-brown focus:ring-1 focus:ring-brand-brown'}`}
                                    id="password" name="password" placeholder="••••••••" type="password" />
                                {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                            </div>
                        </div>
                        
                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-brand-brown hover:bg-[#683325] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-brown transition-colors"
                                type="submit">
                                Sign in
                            </button>
                        </div>
                    </form>
                    
                    {/* Footer / Secondary Action */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-text-muted">
                            New here?{' '}
                            <a className="font-medium text-brand-brown hover:text-[#683325] hover:underline transition-colors"
                                href="#">
                                Create an account
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
