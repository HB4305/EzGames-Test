import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer
            className={`bg-on-background dark:bg-on-background text-surface-bright dark:text-surface-bright font-body-md text-body-md w-full py-section-gap no borders flat no shadows ${styles.footer}`}>
            <div
                className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto opacity-80 hover:opacity-100 transition-opacity">
                {/* Branding */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 font-headline-xl text-headline-xl font-bold text-surface-bright">
                        <div
                            className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-title-md text-sm">
                            P</div>
                        Pages &amp; Co.
                    </div>
                    <p className="text-surface-variant text-sm max-w-[200px]">An independent bookshop for readers who like to
                        take their time. Open since 1998.</p>
                    <div className="flex gap-4">
                        <a className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant hover:text-on-background transition-colors text-xs"
                            href="#">In</a>
                        <a className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant hover:text-on-background transition-colors text-xs"
                            href="#">X</a>
                        <a className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant hover:text-on-background transition-colors text-xs"
                            href="#">f</a>
                    </div>
                </div>
                {/* Links */}
                <div>
                    <h4 className="font-label-caps text-label-caps text-secondary-container mb-4">Shop</h4>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li><a className="text-surface-variant hover:text-secondary-fixed transition-colors"
                                href="#">New arrivals</a></li>
                        <li><a className="text-surface-variant hover:text-secondary-fixed transition-colors"
                                href="#">Bestsellers</a></li>
                        <li><a className="text-surface-variant hover:text-secondary-fixed transition-colors"
                                href="#">Fiction</a></li>
                    </ul>
                </div>
                {/* More Links */}
                <div>
                    <h4 className="font-label-caps text-label-caps text-secondary-container mb-4">About</h4>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li><a className="text-surface-variant hover:text-secondary-fixed transition-colors"
                                href="#">Our story</a></li>
                        <li><a className="text-surface-variant hover:text-secondary-fixed transition-colors"
                                href="#">Events</a></li>
                        <li><a className="text-surface-variant hover:text-secondary-fixed transition-colors"
                                href="#">Contact</a></li>
                    </ul>
                </div>
                {/* Newsletter */}
                <div>
                    <h4 className="font-label-caps text-label-caps text-secondary-container mb-4">The Reading Room</h4>
                    <p className="text-surface-variant text-sm mb-4">One handpicked recommendation in your inbox each week.</p>
                    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="bg-transparent border border-outline-variant rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-secondary-container"
                            placeholder="Email address" type="email" />
                        <button
                            className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded font-title-md text-sm hover:bg-secondary-fixed transition-colors"
                            type="submit">Join</button>
                    </form>
                </div>
            </div>
            <div
                className="mt-16 pt-8 border-t border-outline-variant/20 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-surface-variant">
                <p>© 2024 Pages &amp; Co. · Privacy · Terms</p>
                <p className="mt-4 md:mt-0">Free shipping on orders over $35</p>
            </div>
        </footer>
    );
};

export default Footer;
