/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgendaItem } from './AgendaItem';
import type { CommitteeSummary } from './CommitteeSummary';
import type { Event } from './Event';
import type { HearingRescheduled } from './HearingRescheduled';
import type { Location } from './Location';

/**
 * Data Model for hearings returned in single API calls
 */
export type Hearing = (Event & {
    /**
     * Committee or Commission hosting the hearing
     */
    hearingHost?: CommitteeSummary;
    /**
     * List of all topics being discussed in this hearing
     */
    hearingAgendas?: Array<AgendaItem>;
    /**
     * If this hearing was rescheduled, this is the previous schedule that has been replaced
     */
    rescheduledHearing?: HearingRescheduled;
    /**
     * Location of the hearing
     */
    location?: Location;
});

