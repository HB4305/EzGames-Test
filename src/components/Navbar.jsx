import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import LoginModal from './LoginModal';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchFromUrl = queryParams.get('search') || '';
    const [searchQuery, setSearchQuery] = useState(searchFromUrl);
    const navigate = useNavigate();
    const { cartTotalQuantity } = useCart();

    useEffect(() => {
        setSearchQuery(searchFromUrl);
    }, [searchFromUrl]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <nav
            className={`bg-surface dark:bg-surface text-primary dark:text-primary-fixed font-title-md text-title-md fixed top-0 w-full z-50 border-b border-outline-variant flat no shadows ${styles.navbar}`}>
            <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto px-2 md:px-8">
                {/* Brand */}
                <Link className="flex items-center gap-2 font-headline-xl text-headline-xl font-bold text-primary dark:text-primary-fixed scale-95 active:scale-90 transition-transform duration-200 whitespace-nowrap"
                    to="/">
                    <div
                        className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary font-title-md text-sm">
                        P</div>
                    Pages &amp; Co.
                </Link>
                {/* Nav Links (Desktop) */}
                <div className="hidden min-[1243px]:flex items-center gap-6 flex-nowrap">
                    <Link className={`${location.pathname === '/' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary px-2 transition-colors'} whitespace-nowrap`} to="/">Home</Link>
                    <Link className={`${location.pathname === '/books' && !location.search.includes('category') ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary px-2 transition-colors'} whitespace-nowrap`}
                        to="/books">Shop All</Link>
                    <Link className={`${location.search.includes('category=Fiction') ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary px-2 transition-colors'} whitespace-nowrap`}
                        to="/books?category=Fiction">Fiction</Link>
                    <Link className={`${location.search.includes('category=Mystery') ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary px-2 transition-colors'} whitespace-nowrap`}
                        to="/books?category=Mystery">Mystery</Link>
                    <Link className={`${location.search.includes('category=Children') ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary px-2 transition-colors'} whitespace-nowrap`}
                        to="/books?category=Children">Children</Link>
                    <Link className={`${location.search.includes('category=Poetry') ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary px-2 transition-colors'} whitespace-nowrap`}
                        to="/books?category=Poetry">Poetry</Link>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-4 flex-nowrap">
                    {/* Search */}
                    <form onSubmit={handleSearch} className="relative hidden min-[1243px]:block w-56 xl:w-72">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">search</span>
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-surface-container border border-outline-variant rounded-full pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow"
                            placeholder="Search titles, authors..." type="text" />
                    </form>
                    <button
                        onClick={() => setIsLoginOpen(true)}
                        className="hidden min-[1243px]:block px-4 py-1.5 rounded-full border border-outline-variant text-on-surface hover:text-primary dark:hover:text-primary-fixed transition-all text-sm font-title-md whitespace-nowrap">Sign
                        in</button>
                    <Link to="/bag"
                        className="flex items-center gap-2 bg-on-background text-on-primary px-4 py-1.5 rounded-full hover:bg-primary transition-colors text-sm font-title-md">
                        Bag
                        <span
                            className="bg-secondary-container text-on-secondary-container text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartTotalQuantity}</span>
                    </Link>
                    {/* Hamburger Button (Mobile Only) */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="min-[1243px]:hidden flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[24px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="min-[1243px]:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant px-4 py-6 flex flex-col gap-6 shadow-lg max-h-[calc(100vh-70px)] overflow-y-auto">
                    {/* Mobile Search */}
                    <form onSubmit={(e) => { handleSearch(e); setIsMobileMenuOpen(false); }} className="relative w-full">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">search</span>
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-surface-container border border-outline-variant rounded-full pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary"
                            placeholder="Search titles, authors..." type="text" />
                    </form>
                    
                    {/* Mobile Links */}
                    <div className="flex flex-col font-body-lg text-lg">
                        <Link onClick={() => setIsMobileMenuOpen(false)} className={`py-3 border-b border-outline-variant/30 ${location.pathname === '/' ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/">Home</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className={`py-3 border-b border-outline-variant/30 ${location.pathname === '/books' && !location.search.includes('category') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/books">Shop All</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className={`py-3 border-b border-outline-variant/30 ${location.search.includes('category=Fiction') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/books?category=Fiction">Fiction</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className={`py-3 border-b border-outline-variant/30 ${location.search.includes('category=Mystery') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/books?category=Mystery">Mystery</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className={`py-3 border-b border-outline-variant/30 ${location.search.includes('category=Children') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/books?category=Children">Children</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} className={`py-3 border-b border-outline-variant/30 ${location.search.includes('category=Poetry') ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/books?category=Poetry">Poetry</Link>
                    </div>

                    {/* Mobile Sign In */}
                    <button
                        onClick={() => { setIsLoginOpen(true); setIsMobileMenuOpen(false); }}
                        className="w-full text-center py-3 rounded-full border border-outline-variant text-on-surface hover:bg-surface-variant transition-all font-title-md">
                        Sign in
                    </button>
                </div>
            )}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </nav>
    );
};

export default Navbar;
