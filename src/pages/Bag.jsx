import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Bag.module.css';

const Bag = () => {
    const [quantity, setQuantity] = useState(2);
    const unitPrice = 18;
    const isCartEmpty = quantity === 0;

    const increase = () => setQuantity(q => q + 1);
    const decrease = () => setQuantity(q => (q > 0 ? q - 1 : 0));
    const remove = () => setQuantity(0);

    const subtotal = quantity * unitPrice;

    return (
        <main className={`flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap pt-[120px] ${styles.bagPage || ''}`}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-stack-lg">
                <ol className="flex items-center gap-2 font-body-md text-sm text-on-surface-variant">
                    <li><Link className="hover:text-primary transition-colors" to="/">Home</Link></li>
                    <li>/</li>
                    <li aria-current="page" className="text-on-background">Bag</li>
                </ol>
            </nav>
            
            {/* Page Title */}
            <h1 className="font-display-lg text-headline-xl-mobile md:text-display-lg text-on-background mb-section-gap font-bold">
                Your bag
            </h1>
            
            {/* Cart Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                {/* Left Column: Cart Items */}
                <section className="lg:col-span-8 flex flex-col gap-4">
                    {isCartEmpty ? (
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 text-center">
                            <p className="font-body-md text-on-surface-variant mb-4">Your bag is empty.</p>
                            <Link to="/" className="text-primary hover:underline font-title-md">Continue Shopping</Link>
                        </div>
                    ) : (
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 md:p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            {/* Book Cover Placeholder */}
                            <div className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 rounded-md bg-surface-tint shadow-sm overflow-hidden relative">
                                {/* Abstract placeholder color */}
                                <div className="absolute inset-0 bg-primary-container opacity-80 mix-blend-multiply"></div>
                            </div>
                            {/* Item Details */}
                            <div className="flex-grow flex flex-col gap-1">
                                <h2 className="font-title-md text-title-md text-on-background">The Lighthouse Keeper</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-2">Mara Ellison</p>
                                <button
                                    onClick={remove}
                                    className="text-tertiary-container hover:text-tertiary font-body-md text-sm text-left transition-colors w-fit">Remove</button>
                            </div>
                            {/* Quantity & Price Controls */}
                            <div className="flex flex-row sm:flex-col items-center justify-between w-full sm:w-auto sm:items-end gap-4 mt-4 sm:mt-0">
                                <div className="flex items-center border border-outline-variant rounded-full bg-surface-container-lowest h-10 px-2">
                                    <button aria-label="Decrease quantity" onClick={decrease}
                                        className="w-8 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-sm">remove</span>
                                    </button>
                                    <span className="w-8 text-center font-body-md text-body-md text-on-background font-medium">{quantity}</span>
                                    <button aria-label="Increase quantity" onClick={increase}
                                        className="w-8 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                                <span className="font-title-md text-title-md text-tertiary-container font-bold">${subtotal.toFixed(2)}</span>
                            </div>
                        </div>
                    )}
                </section>
                
                {/* Right Column: Order Summary */}
                <section className="lg:col-span-4 mt-8 lg:mt-0">
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 lg:p-8 sticky top-8">
                        <h2 className="font-title-md text-title-md text-on-background mb-6 font-bold">Order summary</h2>
                        <div className="flex flex-col gap-4 mb-6 border-b border-outline-variant pb-6">
                            <div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
                                <span>Subtotal ({quantity} items)</span>
                                <span className="text-on-background">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
                                <span>Shipping</span>
                                <span className="text-on-background">{isCartEmpty ? '-' : 'Free'}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center font-title-md text-title-md text-on-background mb-8 font-bold">
                            <span>Total</span>
                            <span className="text-tertiary-container">${subtotal.toFixed(2)}</span>
                        </div>
                        <button
                            disabled={isCartEmpty}
                            className={`w-full font-title-md text-title-md py-4 rounded-xl transition-colors mb-4 flex items-center justify-center gap-2 ${isCartEmpty ? 'bg-outline-variant text-on-surface-variant cursor-not-allowed' : 'bg-tertiary-container hover:bg-tertiary text-on-tertiary'}`}>
                            Checkout
                        </button>
                        <p className="font-body-md text-sm text-on-surface-variant text-center">
                            You'll be asked to sign in to complete your order.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Bag;
