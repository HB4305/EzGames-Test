const fs = require('fs');

const booksContent = `export const booksData = [
  { id: 1, title: 'The Lighthouse Keeper', author: 'Mara Ellison', price: 18.00, oldPrice: '$24.00', rating: 4.6, tag: 'BESTSELLER', tagType: 'bestseller', isFeatured: true, bgColorHex: '#173328', category: 'Fiction' },
  { id: 2, title: 'Ashes in the Archive', author: 'J. P. Crowe', price: 15.50, rating: 4.4, tag: 'BESTSELLER', tagType: 'bestseller', isFeatured: true, bgColorHex: '#486457', category: 'Fiction' },
  { id: 3, title: 'Orbital Driftwood', author: 'Nadia Vance', price: 21.00, rating: 4.7, tag: 'BESTSELLER', tagType: 'bestseller', bgColorHex: '#3a6b6c', category: 'Sci-Fi' },
  { id: 4, title: 'The Quiet Economy', author: 'Daniel Roth', price: 19.99, rating: 4.2, isFeatured: true, bgColorHex: '#6f3322', category: 'Non-fiction' },
  { id: 5, title: 'Salt & Other Small Gods', author: 'Imani Okafor', price: 13.00, rating: 4.8, tag: 'NEW', tagType: 'new', isFeatured: true, bgColorHex: '#6a4261', category: 'Poetry' },
  { id: 6, title: 'Pip and the Paper Moon', author: 'Lena Hart', price: 11.50, rating: 4.9, tag: 'BESTSELLER', tagType: 'bestseller', bgColorHex: '#b88c4b', category: 'Children' },
  { id: 7, title: 'A House of Borrowed Light', author: 'Sofia Marchetti', price: 17.25, oldPrice: '$22.00', rating: 4.5, tag: 'BESTSELLER', tagType: 'bestseller', bgColorHex: '#5a486c', category: 'Mystery' },
  { id: 8, title: 'Hands in the Soil', author: 'Greta Lindqvist', price: 23.00, rating: 4.3, tag: 'NEW', tagType: 'new', bgColorHex: '#173328', category: 'Biography' },
  { id: 9, title: 'The Saltmarsh Murders', author: 'Edmund Pryce', price: 16.00, rating: 4.1, isFeatured: true, bgColorHex: '#6f3322', category: 'Mystery' },
  { id: 10, title: 'Threads of the Void', author: 'Kai Tanaka', price: 20.50, rating: 4.6, tag: 'NEW', tagType: 'new', bgColorHex: '#4b6a8e', category: 'Sci-Fi' },
  { id: 11, title: 'Everything the River Took', author: 'Ada Fenwick', price: 18.75, rating: 4.6, tag: 'NEW', tagType: 'new', bgColorHex: '#7B553D', category: 'Fiction' },
  { id: 12, title: 'The Button Thief', author: 'Marco Diaz', price: 10.99, rating: 4.7, tag: 'NEW', tagType: 'new', bgColorHex: '#BC8F4F', category: 'Children' }
];
`;
fs.writeFileSync('src/data/books.js', booksContent);

// Update Collection.jsx
let collectionContent = fs.readFileSync('src/pages/Collection.jsx', 'utf8');
collectionContent = collectionContent.replace(/booksData\.slice\(0, 5\)/g, "booksData.filter(book => book.isFeatured)");
fs.writeFileSync('src/pages/Collection.jsx', collectionContent);

// Rewrite Home.jsx's sections to map over the arrays!
const homeContent = `import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GenreGrid from '../components/GenreGrid';
import BookCard from '../components/BookCard';
import styles from '../App.module.css';
import { booksData } from '../data/books';

const ResponsiveBookRow = ({ books }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
            {books.slice(0, 5).map((book, index) => {
                let visibilityClass = "block";
                if (index === 2) visibilityClass = "hidden md:block";
                if (index >= 3) visibilityClass = "hidden lg:block";
                return (
                    <div key={book.id} className={visibilityClass}>
                        <BookCard {...book} price={\`$\${book.price.toFixed(2)}\`} />
                    </div>
                );
            })}
        </div>
    );
};

const Home = () => {
  const featuredBooks = booksData.filter(b => b.isFeatured);
  const bestsellerBooks = booksData.filter(b => b.tagType === 'bestseller');
  const newArrivalBooks = booksData.filter(b => b.tagType === 'new');

  return (
    <main className="pt-[80px]"> {/* Offset for fixed nav */}
      <Hero />
      <GenreGrid />

      {/* Featured Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-4">
              <div>
                  <span className="font-label-caps text-label-caps text-tertiary tracking-wider uppercase mb-2 block">Editor's Picks</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-background">Featured this month</h2>
              </div>
              <Link className="font-label-caps text-label-caps text-tertiary hover:text-primary transition-colors flex items-center gap-1"
                  to="/collection/featured">View all <span className={\`material-symbols-outlined text-sm \${styles.icon}\`}>arrow_forward</span></Link>
          </div>
          <ResponsiveBookRow books={featuredBooks} />
      </section>

      {/* Promotional Banner */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="bg-primary-container rounded-xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                  <span className="font-label-caps text-label-caps text-on-primary-container tracking-wider uppercase mb-3 block">The Reading Room</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-primary mb-4">Free shipping on every order over $35</h2>
                  <p className="font-body-lg text-body-lg text-on-primary-container">Plus 15% off your first month and a weekly recommendation picked just for you.</p>
              </div>
              <button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-title-md hover:bg-secondary transition-colors whitespace-nowrap">Join free</button>
          </div>
      </section>

      {/* Bestsellers Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-4">
              <div>
                  <span className="font-label-caps text-label-caps text-tertiary tracking-wider uppercase mb-2 block">Most Loved</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-background">Bestsellers</h2>
              </div>
              <Link className="font-label-caps text-label-caps text-tertiary hover:text-primary transition-colors flex items-center gap-1"
                  to="/collection/bestseller">View all <span className={\`material-symbols-outlined text-sm \${styles.icon}\`}>arrow_forward</span></Link>
          </div>
          <ResponsiveBookRow books={bestsellerBooks} />
      </section>

      {/* New Arrivals Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-4">
              <div>
                  <span className="font-label-caps text-label-caps text-tertiary tracking-wider uppercase mb-2 block">Hot Off The Press</span>
                  <h2 className="font-headline-xl text-headline-xl text-on-background">New arrivals</h2>
              </div>
              <Link className="font-label-caps text-label-caps text-tertiary hover:text-primary transition-colors flex items-center gap-1"
                  to="/collection/new">View all <span className={\`material-symbols-outlined text-sm \${styles.icon}\`}>arrow_forward</span></Link>
          </div>
          <ResponsiveBookRow books={newArrivalBooks} />
      </section>
    </main>
  );
};

export default Home;
`;
fs.writeFileSync('src/pages/Home.jsx', homeContent);

console.log("Sync complete");
