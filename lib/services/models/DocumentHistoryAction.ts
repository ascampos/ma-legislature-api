/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';

/**
 * Data Model for actions taken in the Document's History
 */
export type DocumentHistoryAction = (DtoBase & {
    /**
     * Date of the Document action
     */
    date: string;
    /**
     * Branch that took action on the Document
     */
    branch?: string;
    /**
     * Details of the action taken on the document
     */
    action?: string;
});

