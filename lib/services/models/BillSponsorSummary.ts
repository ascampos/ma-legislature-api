/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SponsorTypeEnum } from './SponsorTypeEnum';

/**
 * Data Model for Bill Sponsors returned in batch API calls
 */
export type BillSponsorSummary = {
    /**
     * Identifier of the bill sponsor
     */
    id?: string;
    /**
     * Name of the Bill Sponsor
     */
    name?: string;
    /**
     * Type of the Bill Sponsor
     * 1 = Legislative Member, 2 = Committee, 3 = Public Request, 4 = Special Request
     */
    type: SponsorTypeEnum;
    /**
     * Link for the API to get the details for this entry
     * Only Committees and Legislative Members will have further details that can be obtained in this way
     */
    details?: string;
};

