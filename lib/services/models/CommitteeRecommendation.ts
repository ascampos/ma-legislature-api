/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitteeSummary } from './CommitteeSummary';
import type { CommitteeVote } from './CommitteeVote';
import type { DtoBase } from './DtoBase';
import type { FiscalAmount } from './FiscalAmount';

/**
 * The data model for Commitee Recommendations returned in Bill Documents.
 */
export type CommitteeRecommendation = (DtoBase & {
    /**
     * The action recommended by the Committee.
     */
    action?: string;
    /**
     * The Fiscal Amounts decided by the Committee.
     */
    fiscalAmounts?: Array<FiscalAmount>;
    /**
     * The Committee making the recommendation.
     */
    committee?: CommitteeSummary;
    /**
     * A list of votes by the Committee.
     */
    votes?: Array<CommitteeVote>;
});

