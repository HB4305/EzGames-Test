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
                  to="/books?collection=featured">View all <span className={`material-symbols-outlined text-sm ${styles.icon}`}>arrow_forward</span></Link>
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

      {/* Promotional Banner */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div
              className="bg-primary-container rounded-xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                  <span
                      className="font-label-caps text-label-caps text-on-primary-container tracking-wider uppercase mb-3 block">The
                      Reading Room</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-primary mb-4">Free shipping on every order over
                      $35</h2>
                  <p className="font-body-lg text-body-lg text-on-primary-container">Plus 15% off your first month and a
                      weekly recommendation picked just for you.</p>
              </div>
              <button
                  className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-title-md hover:bg-secondary transition-colors whitespace-nowrap">Join
                  free</button>
          </div>
      </section>

      {/* Bestsellers Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-4">
              <div>
                  <span className="font-label-caps text-label-caps text-tertiary tracking-wider uppercase mb-2 block">Most
                      Loved</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-background">Bestsellers</h2>
              </div>
              <Link className="font-label-caps text-label-caps text-tertiary hover:text-primary transition-colors flex items-center gap-1"
                  to="/books?collection=bestseller">View all <span className={`material-symbols-outlined text-sm ${styles.icon}`}>arrow_forward</span></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
              <BookCard 
                  id={1}
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
                  id={2}
                  title="Ashes in the Archive"
                  author="J. P. Crowe"
                  price="$15.50"
                  rating="4.4"
                  bgColorHex="#586A8D"
                  tag="BESTSELLER"
                  tagType="bestseller"
              />
              <BookCard 
                  id={6}
                  title="Pip and the Paper Moon"
                  author="Lena Hart"
                  price="$11.50"
                  rating="4.9"
                  bgColorHex="#BC8F4F"
                  tag="BESTSELLER"
                  tagType="bestseller"
              />
              <BookCard 
                  id={11}
                  title="Everything the River Took"
                  author="Ada Fenwick"
                  price="$18.75"
                  rating="4.6"
                  bgColorHex="#7B553D"
                  tag="BESTSELLER"
                  tagType="bestseller"
              />
              <BookCard 
                  id={7}
                  title="A House of Borrowed Light"
                  author="Sofia Marchetti"
                  price="$17.25"
                  oldPrice="$22.00"
                  rating="4.5"
                  bgColorHex="#67557A"
                  tag="BESTSELLER"
                  tagType="bestseller"
              />
          </div>
      </section>

      {/* New Arrivals Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-4">
              <div>
                  <span className="font-label-caps text-label-caps text-tertiary tracking-wider uppercase mb-2 block">Hot
                      Off The Press</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-background">New arrivals</h2>
              </div>
              <Link className="font-label-caps text-label-caps text-tertiary hover:text-primary transition-colors flex items-center gap-1"
                  to="/books?collection=new">View all <span className={`material-symbols-outlined text-sm ${styles.icon}`}>arrow_forward</span></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
              <BookCard 
                  id={5}
                  title="Salt & Other Small Gods"
                  author="Imani Okafor"
                  price="$13.00"
                  rating="4.8"
                  bgColorHex="#8E4A68"
                  tag="NEW"
                  tagType="new"
              />
              <BookCard 
                  id={10}
                  title="Threads of the Void"
                  author="Kai Tanaka"
                  price="$20.50"
                  rating="4.6"
                  bgColorHex="#586A8D"
                  tag="NEW"
                  tagType="new"
              />
              <BookCard 
                  id={12}
                  title="The Button Thief"
                  author="Marco Diaz"
                  price="$10.99"
                  rating="4.7"
                  bgColorHex="#BC8F4F"
                  tag="NEW"
                  tagType="new"
              />
              <BookCard 
                  id={11}
                  title="Everything the River Took"
                  author="Ada Fenwick"
                  price="$18.75"
                  rating="4.6"
                  bgColorHex="#7B553D"
                  tag="BESTSELLER"
                  tagType="bestseller"
              />
          </div>
      </section>
    </main>
  );
};

export default Home;
