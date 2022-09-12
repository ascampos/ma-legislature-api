/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The data model for a limited Amendment
 */
export type AmendmentSummary = {
    /**
     * The Amendment Number of the Amendment.
     */
    amendmentNumber?: string;
    /**
     * The Bill Number of the Bill that is being Amended.
     */
    parentBillNumber?: string;
    /**
     * The Branch doing the amending.
     */
    branch?: string;
    /**
     * The General Court Number of the Bill being Amended.
     */
    generalCourtNumber: number;
    /**
     * A link to the detailed model of an Amendment.
     */
    details?: string;
};

