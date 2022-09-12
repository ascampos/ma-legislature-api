/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitteeSummary } from './CommitteeSummary';
import type { CommitteeVoteRecord } from './CommitteeVoteRecord';
import type { DocumentSummary } from './DocumentSummary';
import type { DtoBase } from './DtoBase';

/**
 * Data Model for Committee Votes
 */
export type CommitteeVote = (DtoBase & {
    /**
     * The Question Text of the Committee Vote
     */
    question?: string;
    /**
     * The Bill the Vote is on.
     */
    bill?: DocumentSummary;
    /**
     * The Committee of the vote.
     */
    committee?: CommitteeSummary;
    /**
     * The time the vote was taken.
     */
    date: string;
    /**
     * The vote record.
     */
    vote?: Array<CommitteeVoteRecord>;
});

