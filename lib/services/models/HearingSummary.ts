/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data Model for hearings returned in batch API calls
 */
export type HearingSummary = {
    /**
     * ID of the Hearing
     */
    eventId: number;
    /**
     * Link to the API call for the detailed information of this hearing
     */
    details?: string;
};

