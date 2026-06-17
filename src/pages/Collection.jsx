import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { booksData } from '../data/books';

const Collection = () => {
    const { id } = useParams();

    const collectionInfo = useMemo(() => {
        switch (id) {
            case 'bestseller':
                return { title: 'Bestsellers', subtitle: 'Most Loved' };
            case 'new':
                return { title: 'New arrivals', subtitle: 'Hot Off The Press' };
            case 'featured':
                return { title: 'Featured this month', subtitle: "Editor's Picks" };
            default:
                return { title: 'Collection', subtitle: 'Our Books' };
        }
    }, [id]);

    const displayedBooks = useMemo(() => {
        if (id === 'bestseller') {
            return booksData.filter(book => book.tagType === 'bestseller');
        } else if (id === 'new') {
            return booksData.filter(book => book.tagType === 'new');
        } else if (id === 'featured') {
            return booksData.filter(book => book.isFeatured); // Mock featured
        }
        return booksData;
    }, [id]);

    return (
        <main className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap pt-[120px]`}>
            {/* Breadcrumbs */}
            <nav className="mb-stack-lg text-sm text-on-surface-variant font-body-md flex items-center gap-2">
                <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                <span>/</span>
                <span className="text-on-surface">{collectionInfo.title}</span>
            </nav>

            <div className="mb-12">
                <span className="font-label-caps text-label-caps text-tertiary tracking-wider uppercase mb-2 block">
                    {collectionInfo.subtitle}
                </span>
                <h1 className="font-headline-xl text-headline-xl text-on-background">{collectionInfo.title}</h1>
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
                {displayedBooks.map(book => (
                    <BookCard
                        key={book.id}
                        id={book.id}
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
                    <p className="col-span-full text-center text-on-surface-variant py-8">No books found in this collection.</p>
                )}
            </div>
        </main>
    );
};

export default Collection;
