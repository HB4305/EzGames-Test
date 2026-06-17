import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
import styles from './BookList.module.css';

import { booksData } from '../data/books';

const categories = ['All', 'Fiction', 'Mystery', 'Sci-Fi', 'Non-fiction', 'Poetry', 'Children', 'Biography'];

const BookList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const categoryFromQuery = queryParams.get('category') || 'All';
    const collectionFromQuery = queryParams.get('collection');

    const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery);
    const [sortOption, setSortOption] = useState('Featured');

    useEffect(() => {
        setSelectedCategory(categoryFromQuery);
    }, [categoryFromQuery]);

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        if (cat === 'All') {
            navigate('/books');
        } else {
            navigate(`/books?category=${cat}`);
        }
    };

    const displayedBooks = useMemo(() => {
        let filtered = [...booksData];
        
        if (collectionFromQuery === 'bestseller') {
            filtered = filtered.filter(book => book.tagType === 'bestseller');
        } else if (collectionFromQuery === 'new') {
            filtered = filtered.filter(book => book.tagType === 'new');
        } else if (collectionFromQuery === 'featured') {
            // Mock featured books by taking a subset, or leave as is
            filtered = filtered.slice(0, 5);
        }

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(book => book.category === selectedCategory);
        }

        if (sortOption === 'Price: Low to High') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'Price: High to Low') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'Alphabetical') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        }
        
        return filtered;
    }, [selectedCategory, sortOption, collectionFromQuery]);

    return (
        <main className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap pt-[120px] ${styles.bookList || ''}`}>
            {/* Breadcrumbs */}
            <nav className="mb-stack-lg text-sm text-on-surface-variant font-body-md flex items-center gap-2">
                <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                <span>/</span>
                <span className="text-on-surface">Books</span>
            </nav>

            {/* Filters and Sort */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-md mb-section-gap">
                {/* Filter Categories */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={selectedCategory === cat
                                ? "bg-tertiary text-on-tertiary border border-tertiary px-4 py-1.5 rounded-full font-body-md text-sm transition-colors"
                                : "bg-surface border border-outline-variant text-on-surface-variant hover:border-outline hover:text-on-surface px-4 py-1.5 rounded-full font-body-md text-sm transition-colors"}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 font-body-md text-sm text-on-surface-variant">
                    <span>Sort by</span>
                    <div className="relative">
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="appearance-none bg-surface border border-outline-variant text-on-surface py-1.5 pl-4 pr-10 rounded text-sm focus:ring-primary focus:border-primary cursor-pointer">
                            <option>Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Alphabetical</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[20px]">expand_more</span>
                    </div>
                </div>
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
                {displayedBooks.map(book => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        price={`$${book.price.toFixed(2)}`}
                        oldPrice={book.oldPrice}
                        rating={book.rating}
                        tag={book.tag}
                        tagType={book.tagType}
                        bgColorHex={book.bgColorHex}
                    />
                ))}
                {displayedBooks.length === 0 && (
                    <p className="col-span-full text-center text-on-surface-variant py-8">No books found in this category.</p>
                )}
            </div>
        </main>
    );
};

export default BookList;
