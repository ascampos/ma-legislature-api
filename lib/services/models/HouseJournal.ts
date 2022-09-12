/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';

/**
 * Data Model for House Journals returned in single API calls
 */
export type HouseJournal = (DtoBase & {
    /**
     * The Journal Number of the Journal
     */
    journalSessionDate?: string;
    /**
     * The General Court Number of the Journal
     */
    generalCourtNumber: number;
    /**
     * Whether the journal is from a joint session
     */
    isJoint: boolean;
    /**
     * A link to the PDF of the Journal
     */
    downloadUrl?: string;
    /**
     * The date the Session Ended, used in transformations
     */
    sessionDate?: string;
    /**
     * The Range of the Roll Calls
     */
    rollCallRange?: string;
});

