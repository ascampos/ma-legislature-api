/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitteeSummary } from './CommitteeSummary';
import type { DocumentSummary } from './DocumentSummary';
import type { DtoBase } from './DtoBase';

/**
 * Data Model for Legislative Member returned in single API calls
 */
export type LegislativeMember = (DtoBase & {
    /**
     * Name of the legislative member
     */
    name?: string;
    /**
     * General Court for this legislative member
     */
    generalCourtNumber: number;
    /**
     * Leadership position of the legislative member
     */
    leadershipPosition?: string;
    /**
     * Branch that the legislative member works in
     */
    branch?: string;
    /**
     * Member code of the legislative member
     */
    memberCode?: string;
    /**
     * District of the legislative member
     */
    district?: string;
    /**
     * Party of the legislative member
     */
    party?: string;
    /**
     * Email address of the legislative member
     */
    emailAddress?: string;
    /**
     * The room number of the legislative member
     */
    roomNumber?: string;
    /**
     * The phone number of the legislative member
     */
    phoneNumber?: string;
    /**
     * The fax number of the legislative member
     */
    faxNumber?: string;
    /**
     * A list of bills that are sponsored by the legislative member
     */
    sponsoredBills?: Array<DocumentSummary>;
    /**
     * A list of bills that are co-sponsored by the legislative member
     */
    coSponsoredBills?: Array<DocumentSummary>;
    /**
     * A list of Committees the legislative member is of
     */
    committees?: Array<CommitteeSummary>;
});

