/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';
import type { LegislativeMemberSummary } from './LegislativeMemberSummary';

/**
 * Data Model for RollCalls returned in API calls
 */
export type RollCall = (DtoBase & {
    /**
     * The General Court Number of the Roll Call
     */
    generalCourtNumber: number;
    /**
     * The Branch of the Roll Call
     */
    branch?: string;
    /**
     * The Question Motion Text of the Roll Call
     */
    questionMotion?: string;
    /**
     * The Roll Call Number of the Roll Call
     */
    rollCallNumber: number;
    /**
     * A list of legislative members who voted Yea
     */
    yeas?: Array<LegislativeMemberSummary>;
    /**
     * A list of legislative members who voted Nay
     */
    nays?: Array<LegislativeMemberSummary>;
    /**
     * A list of legislative members who were Absent
     */
    absent?: Array<LegislativeMemberSummary>;
    /**
     * A link to download a PDF of the Roll Call
     */
    downloadUrl?: string;
});

