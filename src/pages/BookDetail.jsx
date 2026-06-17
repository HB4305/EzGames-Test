import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import BookCard from '../components/BookCard';
import styles from './BookDetail.module.css';

const BookDetail = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    
    // Auto scroll to top when navigation occurs
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Mock multiple images for the gallery feature
    const images = [
        'from-[#4a7a6c] to-[#2f5548]',
        'from-[#2f5548] to-[#173328]',
        'from-[#486457] to-[#2e4a3e]',
    ];
    const [mainImage, setMainImage] = useState(images[0]);

    const unitPrice = 18.00;

    return (
        <main className={`flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap pt-[120px] w-full ${styles.bookDetail || ''}`}>
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-stack-lg text-sm text-on-surface-variant font-body-md flex items-center gap-2">
                <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                <span>/</span>
                <Link className="hover:text-primary transition-colors" to="/books">Books</Link>
                <span>/</span>
                <span className="text-on-surface">The Lighthouse Keeper</span>
            </nav>

            {/* Product Details */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
                {/* Left: Book Cover Gallery */}
                <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-4">
                    {/* Main Image */}
                    <div
                        className={`aspect-[2/3] bg-gradient-to-br ${mainImage} rounded-md shadow-lg flex flex-col justify-end p-6 text-white relative overflow-hidden w-full max-w-md mx-auto lg:mx-0 transition-all duration-500`}>
                        <div
                            className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent">
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-title-md font-semibold text-2xl mb-1 leading-tight text-shadow-sm">The Lighthouse Keeper</h2>
                            <p className="font-body-md italic text-sm text-white/80">Mara Ellison</p>
                        </div>
                    </div>
                    {/* Thumbnails */}
                    <div className="flex gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                        {images.map((imgClass, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => setMainImage(imgClass)}
                                className={`w-16 aspect-[2/3] rounded border-2 transition-all overflow-hidden ${mainImage === imgClass ? 'border-primary shadow-md scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
                            >
                                <div className={`w-full h-full bg-gradient-to-br ${imgClass}`}></div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Book Info */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center">
                    {/* Genre Tag */}
                    <div className="mb-4">
                        <Link to="/books?category=Fiction"
                            className="inline-block border border-outline-variant hover:border-primary text-xs tracking-widest uppercase py-1 px-3 rounded-full text-on-surface-variant hover:text-primary transition-colors font-medium">Fiction</Link>
                    </div>
                    {/* Title & Author */}
                    <h1 className="text-4xl md:text-5xl font-display-lg font-semibold mb-2 text-on-background">The Lighthouse Keeper</h1>
                    <p className="text-lg text-on-surface-variant font-body-lg italic mb-6">by Mara Ellison</p>
                    
                    {/* Meta Info (Rating, Pages, Year) */}
                    <div className="flex items-center text-sm mb-6 text-on-surface-variant space-x-3">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                            <span className="font-medium text-on-background">4.6</span>
                        </div>
                        <span>·</span>
                        <span>312 pages</span>
                        <span>·</span>
                        <span>2023</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-2xl font-bold text-tertiary">${unitPrice.toFixed(2)}</span>
                        <span className="text-on-surface-variant line-through text-sm">$24.00</span>
                    </div>

                    {/* Description */}
                    <p className="text-on-surface leading-relaxed mb-8 max-w-2xl font-body-md">
                        A widowed keeper and a runaway girl share a winter on a remote island, learning what it means to
                        keep a light burning for someone else.
                    </p>

                    {/* Action Buttons with Quantity Selector */}
                    <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-outline-variant/50">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-outline-variant rounded-full bg-surface-container-lowest h-12 px-2">
                            <button aria-label="Decrease quantity" onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}
                                className="w-10 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </button>
                            <span className="w-8 text-center font-body-md text-body-md text-on-background font-medium">{quantity}</span>
                            <button aria-label="Increase quantity" onClick={() => setQuantity(q => q + 1)}
                                className="w-10 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                        </div>

                        <button
                            onClick={() => {
                                addToCart({
                                    id: id || 1,
                                    title: "The Lighthouse Keeper",
                                    author: "Mara Ellison",
                                    price: unitPrice,
                                    coverStyle: mainImage
                                }, quantity);
                            }}
                            className="bg-tertiary-container hover:bg-tertiary text-on-tertiary px-8 py-3 h-12 rounded-full font-medium transition-colors flex items-center justify-center gap-2 font-title-md text-sm">
                            Add to bag — ${(unitPrice * quantity).toFixed(2)}
                        </button>
                        <button
                            className="border border-outline-variant hover:border-tertiary hover:text-tertiary px-6 py-3 h-12 rounded-full font-medium transition-colors flex items-center gap-2 font-title-md text-sm">
                            <span className="material-symbols-outlined text-[18px]">favorite_border</span>
                            Wishlist
                        </button>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 text-sm font-body-md">
                        <div>
                            <span className="block text-on-surface-variant uppercase tracking-wider text-[10px] mb-1">Format</span>
                            <span className="font-medium text-on-background">Paperback</span>
                        </div>
                        <div>
                            <span className="block text-on-surface-variant uppercase tracking-wider text-[10px] mb-1">Pages</span>
                            <span className="font-medium text-on-background">312</span>
                        </div>
                        <div>
                            <span className="block text-on-surface-variant uppercase tracking-wider text-[10px] mb-1">Published</span>
                            <span className="font-medium text-on-background">2023</span>
                        </div>
                        <div>
                            <span className="block text-on-surface-variant uppercase tracking-wider text-[10px] mb-1">Publisher</span>
                            <span className="font-medium text-on-background">Harbor &amp; Vale</span>
                        </div>
                        <div>
                            <span className="block text-on-surface-variant uppercase tracking-wider text-[10px] mb-1">Language</span>
                            <span className="font-medium text-on-background">English</span>
                        </div>
                        <div>
                            <span className="block text-on-surface-variant uppercase tracking-wider text-[10px] mb-1">ISBN</span>
                            <span className="font-medium text-on-background">978-1-23456-001-2</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* BEGIN: You may also like Section */}
            <section>
                <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-4">
                    <h2 className="font-headline-xl text-headline-xl text-on-background font-bold">You may also like</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-gutter">
                    <BookCard 
                        id={7}
                        title="A House of Borrowed Light"
                        author="Sofia Marchetti"
                        price="$17.25"
                        oldPrice="$22.00"
                        rating="4.5"
                        bgColorHex="#5a486c"
                    />
                    <BookCard 
                        id={11}
                        title="Everything the River Took"
                        author="Ada Fenwick"
                        price="$18.75"
                        rating="4.6"
                        tag="BESTSELLER"
                        tagType="bestseller"
                        bgColorHex="#8a6b4e"
                    />
                    <BookCard 
                        id={2}
                        title="Ashes in the Archive"
                        author="J. P. Crowe"
                        price="$15.50"
                        rating="4.4"
                        bgColorHex="#486457"
                    />
                    <BookCard 
                        id={4}
                        title="The Quiet Economy"
                        author="Daniel Roth"
                        price="$19.99"
                        rating="4.2"
                        bgColorHex="#6f3322"
                    />
                    <BookCard 
                        id={5}
                        title="Salt & Other Small Gods"
                        author="Imani Okafor"
                        price="$13.00"
                        rating="4.8"
                        tag="NEW"
                        tagType="new"
                        bgColorHex="#6a4261"
                    />
                </div>
            </section>
            {/* END: You may also like Section */}
        </main>
    );
};

export default BookDetail;
