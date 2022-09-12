/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';
import type { GeneralLawChapterSummary } from './GeneralLawChapterSummary';

/**
 * Data Model for Parts returned in single API calls
 */
export type GeneralLawPart = (DtoBase & {
    /**
     * The Code of the General Law Part
     */
    code?: string;
    /**
     * The Name of the General Law Part
     */
    name?: string;
    /**
     * The First Chapter in the General Law Part
     */
    firstChapter: number;
    /**
     * The Last Chapter in the General Law Part
     */
    lastChapter: number;
    /**
     * A list of links to the Chapters contained within the General Law Part
     */
    chapters?: Array<GeneralLawChapterSummary>;
});

