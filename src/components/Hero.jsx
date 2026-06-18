import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    return (
        <section className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-8 mb-section-gap ${styles.hero}`}>
            <div
                className="bg-primary-container rounded-xl overflow-hidden relative min-h-[400px] md:min-h-[500px] flex items-center">
                <div className="px-8 md:px-16 py-12 md:py-20 w-full md:w-2/3 z-10">
                    <span
                        className="font-label-caps text-label-caps text-surface-variant tracking-wider uppercase mb-4 block">Staff
                        Favourites</span>
                    <h1 className="font-display-lg text-display-lg text-on-primary mb-6">The shelves<br/>we keep<br/>coming
                        back to</h1>
                    <p className="font-body-lg text-body-lg text-surface-container-high mb-8 max-w-md">Our booksellers pick
                        the titles they can't stop pressing into customers' hands.</p>
                    <Link
                        to="/collection/bestseller"
                        className="inline-block bg-secondary-container text-on-secondary-container px-6 py-3 rounded-md font-title-md hover:bg-secondary transition-colors">Browse
                        bestsellers</Link>
                </div>
                {/* Carousel Controls */}
                <button
                    onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : 2))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/20 flex items-center justify-center text-on-primary hover:bg-surface/40 backdrop-blur-sm transition-all z-20">
                    <span className={`material-symbols-outlined ${styles.icon}`}>chevron_left</span>
                </button>
                <button
                    onClick={() => setActiveSlide((prev) => (prev < 2 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/20 flex items-center justify-center text-on-primary hover:bg-surface/40 backdrop-blur-sm transition-all z-20">
                    <span className={`material-symbols-outlined ${styles.icon}`}>chevron_right</span>
                </button>
                {/* Pagination */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {[0, 1, 2].map((idx) => (
                        <div key={idx}
                            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-6 bg-secondary-container' : 'w-2 bg-surface/50'}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
