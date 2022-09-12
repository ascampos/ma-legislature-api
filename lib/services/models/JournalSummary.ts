/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The Data Model for Journals returned in Batch Queries
 */
export type JournalSummary = {
    /**
     * The Numeric Date of the Session
     */
    journalSessionDate?: string;
    /**
     * Whether the journal is from a joint session
     */
    isJoint: boolean;
    /**
     * A link to the detailed information about this Senate Journal
     */
    details?: string;
};

