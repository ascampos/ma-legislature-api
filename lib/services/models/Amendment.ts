/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillSponsorSummary } from './BillSponsorSummary';
import type { DocumentSummary } from './DocumentSummary';
import type { DtoBase } from './DtoBase';
import type { RollCallSummary } from './RollCallSummary';

/**
 * Data model for Bill Amendments
 */
export type Amendment = (DtoBase & {
    /**
     * The Amendment number of the Amendment.
     */
    amendmentNumber?: string;
    /**
     * The Bill Number that the Amendment is for.
     */
    parentBillNumber?: string;
    /**
     * The link to the Amendment Document page if it exists.
     */
    bill?: DocumentSummary;
    /**
     * The sponsor of the Amendment.
     */
    sponsor?: BillSponsorSummary;
    /**
     * The Category of the Amendment.
     */
    category?: string;
    /**
     * The Action of the Amendment.
     */
    action?: string;
    /**
     * The Roll Call taken of the Amendment.
     */
    rollCall?: Array<RollCallSummary>;
    /**
     * The title of the Amendment.
     */
    title?: string;
    /**
     * The branch of the Amendment.
     */
    branch?: string;
    /**
     * The Redraft count of the Amendment.
     */
    redraftCount?: number;
    /**
     * Whether the amendment is a Further Amendment.
     */
    isFurther: boolean;
    /**
     * The General Court Number of the Amendment.
     */
    generalCourtNumber: number;
    /**
     * The text of the Amendment.
     */
    text?: string;
});

