/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';

/**
 * Data Model for Senate Journals returned in single API calls. This is here to hide the fact that the journals inherit from the same base class
 */
export type SenateJournal = (DtoBase & {
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
});

