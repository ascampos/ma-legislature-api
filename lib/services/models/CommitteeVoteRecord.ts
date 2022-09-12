/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';
import type { LegislativeMemberSummary } from './LegislativeMemberSummary';

/**
 * The data model for recorded Committee Votes
 */
export type CommitteeVoteRecord = (DtoBase & {
    /**
     * A list of members who voted Favorable.
     */
    favorable?: Array<LegislativeMemberSummary>;
    /**
     * A list of members who voted Adverse.
     */
    adverse?: Array<LegislativeMemberSummary>;
    /**
     * A list of members who voted ReserveRight.
     */
    reserveRight?: Array<LegislativeMemberSummary>;
    /**
     * A list of members who have No Vote Recorded.
     */
    noVoteRecorded?: Array<LegislativeMemberSummary>;
});

