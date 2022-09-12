/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Event } from './Event';
import type { Location } from './Location';

/**
 * Data Model for Special Events returned in single API calls
 */
export type SpecialEvent = (Event & {
    /**
     * Location of the Special Event
     */
    location?: Location;
});

