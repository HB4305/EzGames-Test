import React from 'react';
import styles from './BookCard.module.css';

const BookCard = ({ title, author, price, oldPrice, rating, bgColorHex, tag, tagType }) => {
    return (
        <div className={`group flex flex-col ${styles.bookCard}`}>
            <div
                className="relative bg-surface border border-outline-variant rounded-lg p-3 mb-4 aspect-[2/3] flex flex-col justify-between overflow-hidden shadow-sm">
                <div aria-hidden="true" className="absolute inset-0 m-3 rounded shadow-inner" style={{ backgroundColor: bgColorHex }}></div>
                
                {tag ? (
                    <span
                        className={`relative z-10 font-label-caps text-[10px] px-2 py-1 rounded-sm ${tagType === 'bestseller' ? 'bg-secondary-container text-on-secondary-container self-start' : 'bg-surface text-on-surface self-end'}`}>
                        {tag}
                    </span>
                ) : (
                    <div className="h-5"></div>
                )}
                
                <div className="relative z-10 self-start text-on-primary mt-auto">
                    <p className="font-title-md text-sm leading-tight mb-1">{title}</p>
                    <p className="text-xs opacity-80">{author}</p>
                </div>
            </div>
            <div className="flex-grow">
                <h3
                    className="font-title-md text-title-md text-on-background line-clamp-1 group-hover:text-primary transition-colors">
                    {title}</h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-2">{author}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
                <div className="flex items-center gap-2">
                    <span className="font-title-md text-tertiary-container">{price}</span>
                    {oldPrice && <span className="text-xs text-outline line-through">{oldPrice}</span>}
                </div>
                <div className="flex items-center gap-1 text-xs text-secondary-container">
                    <span className={`material-symbols-outlined text-[14px] ${styles.filledStar}`}>star</span>
                    <span className="text-on-surface-variant">{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
