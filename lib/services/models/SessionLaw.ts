/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentSummary } from './DocumentSummary';
import type { DtoBase } from './DtoBase';

/**
 * Data Model for Session Laws returned in API calls
 */
export type SessionLaw = (DtoBase & {
    /**
     * The year the Session Law is enacted for
     */
    year: number;
    /**
     * The chapter number of the Session Law
     */
    chapterNumber?: string;
    /**
     * The type of the Session Law
     */
    type?: string;
    /**
     * The approval type of the Session Law
     */
    approvalType?: string;
    /**
     * The title of the Session Law
     */
    title?: string;
    /**
     * The status of the Session Law
     */
    status?: string;
    /**
     * The approval date of the Session Law
     */
    approvedDate?: string;
    /**
     * The text of the Session Law
     */
    chapterText?: string;
    /**
     * The limited bill, used to create a link to the detailed bill
     *
     */
    originBill?: DocumentSummary;
});

