/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';

/**
 * Data Model for events returned in single API calls
 */
export type Event = (DtoBase & {
    /**
     * ID of the Special Event, Hearing, or Session
     */
    eventId: number;
    /**
     * Name of the event. In the case of hearings, the name is the name of the hosting Committee or Commission
     */
    name?: string;
    /**
     * Status of the event
     */
    status?: string;
    /**
     * Date of the event
     */
    eventDate?: string;
    /**
     * Start time of the event
     */
    startTime?: string;
    /**
     * Description of the event
     */
    description?: string;
});

