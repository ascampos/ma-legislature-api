/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data Model for Committees returned in batch API calls
 */
export type CommitteeSummary = {
    /**
     * Code of the Committee
     */
    committeeCode?: string;
    /**
     * General Court for this Committee
     */
    generalCourtNumber: number;
    /**
     * Link for the API to get the details for this Committee
     */
    details?: string;
};

