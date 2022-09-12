/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmendmentSummary } from './AmendmentSummary';
import type { Attachment } from './Attachment';
import type { BillSponsorSummary } from './BillSponsorSummary';
import type { CommitteeRecommendation } from './CommitteeRecommendation';
import type { DtoBase } from './DtoBase';
import type { RollCallSummary } from './RollCallSummary';

/**
 * Data Model for documents returned in single API calls
 */
export type Document = (DtoBase & {
    /**
     * Title of the Document.
     */
    title?: string;
    /**
     * Bill Number of the Document.
     */
    billNumber?: string;
    /**
     * Docket Number of the Document.
     */
    docketNumber?: string;
    /**
     * General Court for this Document.
     */
    generalCourtNumber: number;
    /**
     * The primary sponsor of this Document.
     */
    primarySponsor?: BillSponsorSummary;
    /**
     * List of all Legislators copsonsoring this Document.
     */
    cosponsors?: Array<BillSponsorSummary>;
    /**
     * Link to the Bill History for this Document.
     */
    billHistory?: string;
    /**
     * Display name for the legislation type of this Document.
     */
    legislationTypeName?: string;
    /**
     * The Pinslip text of the Document.
     */
    pinslip?: string;
    /**
     * The text of the Document.
     */
    documentText?: string;
    /**
     * The Emergency Preamble of the Document.
     */
    emergencyPreamble?: string;
    /**
     * A list of Roll Calls made on this bill.
     */
    rollCalls?: Array<RollCallSummary>;
    /**
     * A list of links to download Document Attachments.
     */
    attachments?: Array<Attachment>;
    /**
     * A list of Committee Recommendations made on the bill.
     */
    committeeRecommendations?: Array<CommitteeRecommendation>;
    /**
     * A list of Amendments to the bill.
     */
    amendments?: Array<AmendmentSummary>;
});

