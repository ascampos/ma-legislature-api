/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentSummary } from './DocumentSummary';
import type { DtoBase } from './DtoBase';
import type { HearingSummary } from './HearingSummary';
import type { LegislativeMemberSummary } from './LegislativeMemberSummary';

/**
 * Data Model for Committees returned in single API calls
 */
export type Committee = (DtoBase & {
    /**
     * Code of the Committee
     */
    committeeCode?: string;
    /**
     * Full Name of the Committee
     */
    fullName?: string;
    /**
     * Short Name of the Committee
     */
    shortName?: string;
    /**
     * Description of the Committee
     */
    description?: string;
    /**
     * Branch of the Committee
     */
    branch?: string;
    /**
     * General Court for this Committee
     */
    generalCourtNumber: number;
    /**
     * Senate Chairperson for this Committee
     */
    senateChairperson?: LegislativeMemberSummary;
    /**
     * House Chairperson for the Committee
     */
    houseChairperson?: LegislativeMemberSummary;
    /**
     * List of all Documents currently before this committee
     */
    documentsBeforeCommittee?: Array<DocumentSummary>;
    /**
     * List of all Documents Reported Out from this committee
     */
    reportedOutDocuments?: Array<DocumentSummary>;
    /**
     * List of all Documents Reported Out from this committee
     */
    hearings?: Array<HearingSummary>;
});

