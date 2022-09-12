/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';
import type { GeneralLawChapterSummary } from './GeneralLawChapterSummary';
import type { GeneralLawPartSummary } from './GeneralLawPartSummary';

/**
 * Data Model for Sections returned in single API calls
 */
export type GeneralLawSection = (DtoBase & {
    /**
     * The code of the General Law Section
     */
    code?: string;
    /**
     * The name of the General Law Section
     */
    name?: string;
    /**
     * If the General Law Section has been repealed
     */
    isRepealed: boolean;
    /**
     * The text of the General Law Section
     */
    text?: string;
    /**
     * A link to the Chapter that the section is under
     */
    chapter?: GeneralLawChapterSummary;
    /**
     * A link to the Part that the section is under
     */
    part?: GeneralLawPartSummary;
});

