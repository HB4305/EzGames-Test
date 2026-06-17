import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GenreGrid.module.css';

const GenreGrid = () => {
    return (
        <section className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap ${styles.genreGrid}`}>
            <div className="mb-8">
                <span className="font-label-caps text-label-caps text-tertiary tracking-wider uppercase mb-2 block">Find
                    your shelf</span>
                <h2 className="font-headline-xl text-headline-xl text-on-background">Browse by genre</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter">
                {/* Genre Card */}
                <Link className="block bg-[#9C5D4E] rounded-xl p-6 aspect-[4/3] flex flex-col justify-end hover:opacity-90 transition-opacity"
                    to="/books?category=Fiction">
                    <h3 className="font-title-md text-title-md text-on-primary mb-1">Fiction</h3>
                    <p className="font-label-caps text-label-caps text-on-primary/80">3 titles</p>
                </Link>
                <Link className="block bg-[#6A7DA3] rounded-xl p-6 aspect-[4/3] flex flex-col justify-end hover:opacity-90 transition-opacity"
                    to="/books?category=Mystery">
                    <h3 className="font-title-md text-title-md text-on-primary mb-1">Mystery</h3>
                    <p className="font-label-caps text-label-caps text-on-primary/80">2 titles</p>
                </Link>
                <Link className="block bg-[#5E8A8F] rounded-xl p-6 aspect-[4/3] flex flex-col justify-end hover:opacity-90 transition-opacity"
                    to="/books?category=Sci-Fi">
                    <h3 className="font-title-md text-title-md text-on-primary mb-1">Sci-Fi</h3>
                    <p className="font-label-caps text-label-caps text-on-primary/80">2 titles</p>
                </Link>
                <Link className="block bg-[#9E5675] rounded-xl p-6 aspect-[4/3] flex flex-col justify-end hover:opacity-90 transition-opacity"
                    to="/books?category=Poetry">
                    <h3 className="font-title-md text-title-md text-on-primary mb-1">Poetry</h3>
                    <p className="font-label-caps text-label-caps text-on-primary/80">2 titles</p>
                </Link>
                <Link className="block bg-[#BC8F4F] rounded-xl p-6 aspect-[4/3] flex flex-col justify-end hover:opacity-90 transition-opacity"
                    to="/books?category=Children">
                    <h3 className="font-title-md text-title-md text-on-primary mb-1">Children</h3>
                    <p className="font-label-caps text-label-caps text-on-primary/80">2 titles</p>
                </Link>
                <Link className="block bg-[#7D6B95] rounded-xl p-6 aspect-[4/3] flex flex-col justify-end hover:opacity-90 transition-opacity"
                    to="/books?category=Non-fiction">
                    <h3 className="font-title-md text-title-md text-on-primary mb-1">Non-fiction</h3>
                    <p className="font-label-caps text-label-caps text-on-primary/80">2 titles</p>
                </Link>
            </div>
        </section>
    );
};

export default GenreGrid;
