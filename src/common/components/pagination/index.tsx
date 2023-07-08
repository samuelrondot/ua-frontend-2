// React
import React, { FC } from 'react';
// libs
import { usePagination, DOTS } from 'common/hooks';

type OwnProps = {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className?: string;
    isLoading?: boolean;
};

const Pagination: FC<OwnProps> = (props) => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    })!;

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className={`${props.className} pagination`}>
            <li
                className={`page-item pagination-item ${currentPage === 1 ? 'disabled' : null}`}
                onClick={onPrevious}
            >
                <div className="previous arrow left" />
            </li>

            {paginationRange.map((pageNumber, index) =>
                pageNumber === DOTS ? (
                    <li
                        key={'dots-' + index}
                        className={`page-item pagination-item dots ${props.isLoading ? 'disabled' : null}`}
                    >
                        &#8230;
                    </li>
                ) : (
                    <li
                        className={`page-item pagination-item ${props.isLoading ? 'disabled' : null} ${pageNumber === currentPage ? 'active selected' : null}`}
                        key={index}
                    >
                        <a
                            className={'page-item page-link pagination-item'}
                            onClick={() => onPageChange(+pageNumber)}
                            style={{ cursor: 'pointer' }}
                        >
                            {pageNumber}
                        </a>
                    </li>
                ),
            )}
            <li
                className={`page-item pagination-item ${currentPage === lastPage ? 'disabled' : null}`}
                onClick={onNext}
            >
                <div className="next arrow right" />
            </li>
        </ul >
    );
};


export { Pagination };
