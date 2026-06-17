import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GenreGrid from '../components/GenreGrid';
import BookCard from '../components/BookCard';
import styles from '../App.module.css';

const Home = () => {
  return (
    <main className="pt-[80px]"> {/* Offset for fixed nav */}
      <Hero />
      <GenreGrid />

      {/* Featured Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-4">
              <div>
                  <span
                      className="font-label-caps text-label-caps text-tertiary tracking-wider uppercase mb-2 block">Editor's
                      Picks</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-background">Featured this month</h2>
              </div>
              <Link className="font-label-caps text-label-caps text-tertiary hover:text-primary transition-colors flex items-center gap-1"
                  to="/books">View all <span className={`material-symbols-outlined text-sm ${styles.icon}`}>arrow_forward</span></Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
              <BookCard 
                  title="The Lighthouse Keeper"
                  author="Mara Ellison"
                  price="$18.00"
                  oldPrice="$24.00"
                  rating="4.6"
                  bgColorHex="#4A725D"
                  tag="BESTSELLER"
                  tagType="bestseller"
              />
              <BookCard 
                  title="Ashes in the Archive"
                  author="J. P. Crowe"
                  price="$15.50"
                  rating="4.4"
                  bgColorHex="#586A8D"
              />
              <BookCard 
                  title="Salt & Other Small Gods"
                  author="Imani Okafor"
                  price="$13.00"
                  rating="4.8"
                  bgColorHex="#8E4A68"
                  tag="NEW"
                  tagType="new"
              />
          </div>
      </section>
    </main>
  );
};

export default Home;
