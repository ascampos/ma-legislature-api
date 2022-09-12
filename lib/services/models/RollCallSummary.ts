/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The Data Model for a limited Roll Call used in Batch Queries
 */
export type RollCallSummary = {
    /**
     * The General Court Number of the Roll Call
     */
    generalCourtNumber: number;
    /**
     * The Branch of the Roll Call
     */
    branch?: string;
    /**
     * The Roll Call Number
     */
    rollCallNumber: number;
    /**
     * Link for the API to get the details for this entry
     */
    details?: string;
};

