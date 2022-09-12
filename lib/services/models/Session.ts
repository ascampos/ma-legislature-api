/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Event } from './Event';

/**
 * Data Model for sessions returned in single API calls
 */
export type Session = (Event & {
    /**
     * Name of the location for this Session
     */
    locationName?: string;
    /**
     * General Court for this Session
     */
    generalCourtNumber: number;
});

