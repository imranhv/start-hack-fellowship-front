"use client"

import React from 'react';
import styles from './Pagination.module.scss';
import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";

interface PaginationProps {
    totalPages: number
}

const Pagination = ({totalPages}: PaginationProps) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams?.get('page')) || 1

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams?.toString());
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const generatePageNumbers = () => {
        const pageNumbers = [];
        let startingPage = Math.max(currentPage - 1, 1)
        if (startingPage >= totalPages) startingPage = 1

        for (let i = startingPage; i <= Math.min(startingPage + 3, totalPages); i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={i === currentPage ? styles.active : ''}
                >
                    <Link prefetch={false} scroll={false} replace href={createPageURL(i)}>{i}</Link>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <div className={styles.pagination}>
            {
                <Link prefetch={false} scroll={false} replace
                      className={`${styles.arrow} ${currentPage > 1 ? null : styles.disable}`}
                      href={createPageURL(currentPage - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.276" height="20.379" viewBox="0 0 20.276 20.379">
                        <path id="Path_280" data-name="Path 280"
                              d="M9.229,0V16.6l-7.87-7.87L0,10.087l8.831,8.831h0l1.359,1.359h0l1.359-1.359h0l8.831-8.831L19.02,8.728,11.15,16.6V0Z"
                              transform="translate(20.276) rotate(90)"></path>
                    </svg>
                </Link>
            }
            <ul>{generatePageNumbers()}</ul>
            {
                <Link prefetch={false} scroll={false} replace
                      className={`${styles.arrow} ${currentPage < totalPages ? null : styles.disable}`}
                      href={createPageURL(currentPage + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.276" height="20.378"
                         viewBox="0 0 20.276 20.378">
                        <path id="Path_412" data-name="Path 412"
                              d="M9.229,0V16.6l-7.87-7.87L0,10.087l8.831,8.831h0l1.359,1.359h0l1.359-1.359h0l8.831-8.831L19.02,8.728,11.15,16.6V0Z"
                              transform="translate(0 20.378) rotate(-90)"></path>
                    </svg>
                </Link>
            }
        </div>
    );
}

export default Pagination;