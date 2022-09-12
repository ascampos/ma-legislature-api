/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data Model for Legislative Members returned in batch API calls
 */
export type LegislativeMemberSummary = {
    /**
     * General Court for this legislative member
     */
    generalCourtNumber: number;
    /**
     * Member code of the legislative member
     */
    memberCode?: string;
    /**
     * Link for the API to get the details for this entry
     */
    details?: string;
};

