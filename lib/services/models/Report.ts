/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';

/**
 * The Data Model for Reports return in API Queries
 */
export type Report = (DtoBase & {
    /**
     * The date the report was released.
     */
    date: string;
    /**
     * The name of the report.
     */
    name?: string;
    /**
     * Who the report was submitted by.
     */
    submittedBy?: string;
    /**
     * The Url to download the report.
     */
    downloadUrl?: string;
});

