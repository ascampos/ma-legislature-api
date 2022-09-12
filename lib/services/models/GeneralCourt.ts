/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';

/**
 * Data model for General Courts returned in API calls
 */
export type GeneralCourt = (DtoBase & {
    /**
     * Name of the General Court
     */
    name?: string;
    /**
     * Number of the General Court
     */
    number: number;
    /**
     * The first year of the General Court
     */
    firstYear: number;
    /**
     * The second year of the General Court (if applicable)
     */
    secondYear: number;
});

