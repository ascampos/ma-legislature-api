/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';
import type { GeneralLawPartSummary } from './GeneralLawPartSummary';
import type { GeneralLawSectionSummary } from './GeneralLawSectionSummary';

/**
 * Data Model for Chapters returned in single API calls
 */
export type GeneralLawChapter = (DtoBase & {
    /**
     * The Code of the General Law Chapter
     */
    code?: string;
    /**
     * The Name of the General Law Chapter
     */
    name?: string;
    /**
     * If the Chapter is repealed or not
     */
    isRepealed: boolean;
    /**
     * The stricken text if the chapter is repealed
     */
    strickenText?: string;
    /**
     * A link to the Part that the contains the chapter
     */
    part?: GeneralLawPartSummary;
    /**
     * A list of the sections contained by the chapter
     */
    sections?: Array<GeneralLawSectionSummary>;
});

