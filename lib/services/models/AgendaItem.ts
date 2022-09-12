/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentSummary } from './DocumentSummary';

/**
 * Data Model for event agenda items returned in single API calls
 */
export type AgendaItem = {
    /**
     * Topic of the agenda item
     */
    topic?: string;
    /**
     * Start time of the agenda item
     */
    startTime?: string;
    /**
     * End time of the agenda item
     */
    endTime?: string;
    /**
     * List of all Documents being discussed in this agenda item
     */
    documentsInAgenda?: Array<DocumentSummary>;
};

