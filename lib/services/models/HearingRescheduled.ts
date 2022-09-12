/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Location } from './Location';

/**
 * Data Model for the past schedule associated with a rescheduled hearing
 */
export type HearingRescheduled = {
    /**
     * Former status of the hearing
     */
    status?: string;
    /**
     * Former date of the hearing
     */
    eventDate?: string;
    /**
     * Former start time of the hearing
     */
    startTime?: string;
    /**
     * Former location of the hearing
     */
    location?: Location;
};

