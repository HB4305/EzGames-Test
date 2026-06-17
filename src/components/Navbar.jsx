import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav
            className={`bg-surface dark:bg-surface text-primary dark:text-primary-fixed font-title-md text-title-md fixed top-0 w-full z-50 border-b border-outline-variant flat no shadows ${styles.navbar}`}>
            <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto px-2 md:px-8">
                {/* Brand */}
                <a className="flex items-center gap-2 font-headline-xl text-headline-xl font-bold text-primary dark:text-primary-fixed scale-95 active:scale-90 transition-transform duration-200 whitespace-nowrap"
                    href="#">
                    <div
                        className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary font-title-md text-sm">
                        P</div>
                    Pages &amp; Co.
                </a>
                {/* Nav Links (Desktop) */}
                <div className="hidden md:flex items-center gap-6 flex-nowrap">
                    <a className="text-primary font-bold border-b-2 border-primary pb-1 whitespace-nowrap" href="#">Home</a>
                    <a className="text-on-surface-variant hover:text-primary px-2 transition-colors whitespace-nowrap"
                        href="#">Shop All</a>
                    <a className="text-on-surface-variant hover:text-primary px-2 transition-colors whitespace-nowrap"
                        href="#">Fiction</a>
                    <a className="text-on-surface-variant hover:text-primary px-2 transition-colors whitespace-nowrap"
                        href="#">Mystery</a>
                    <a className="text-on-surface-variant hover:text-primary px-2 transition-colors whitespace-nowrap"
                        href="#">Children</a>
                    <a className="text-on-surface-variant hover:text-primary px-2 transition-colors whitespace-nowrap"
                        href="#">Poetry</a>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-4 flex-nowrap">
                    <div className="relative hidden md:block">
                        <span
                            className={`material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm ${styles.icon}`}>search</span>
                        <input
                            className="pl-9 pr-4 py-1.5 rounded-full border border-outline-variant bg-surface-container-low text-sm focus:outline-none focus:border-primary w-48 transition-colors"
                            placeholder="Search titles, authors..." type="text" />
                    </div>
                    <button
                        className="hidden md:block px-4 py-1.5 rounded-full border border-outline-variant text-on-surface hover:text-primary dark:hover:text-primary-fixed transition-all text-sm font-title-md">Sign
                        in</button>
                    <button
                        className="flex items-center gap-2 bg-on-background text-on-primary px-4 py-1.5 rounded-full hover:bg-primary transition-colors text-sm font-title-md">
                        Bag
                        <span
                            className="bg-secondary-container text-on-secondary-container text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
