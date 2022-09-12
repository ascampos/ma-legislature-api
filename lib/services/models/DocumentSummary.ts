/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillSponsorSummary } from './BillSponsorSummary';

/**
 * Data Model for documents returned in batch API calls
 */
export type DocumentSummary = {
    /**
     * Bill Number of the Bill
     */
    billNumber?: string;
    /**
     * Docket Number of the Bill
     */
    docketNumber?: string;
    /**
     * Title of the Document
     */
    title?: string;
    /**
     * The primary sponsor of this Document
     */
    primarySponsor?: BillSponsorSummary;
    /**
     * General Court for this document
     */
    generalCourtNumber: number;
    /**
     * Link for the API to get the details for this entry
     */
    details?: string;
    /**
     * Details are not available on dockets which are only visible on the Clerk's Docket Book
     */
    isDocketBookOnly: boolean;
};

