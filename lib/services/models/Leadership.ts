/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DtoBase } from './DtoBase';
import type { LegislativeMemberSummary } from './LegislativeMemberSummary';

/**
 * Data Model for Leadership
 */
export type Leadership = (DtoBase & {
    /**
     * A link to the details of the Legislative Member
     */
    member?: LegislativeMemberSummary;
    /**
     * The Leadership position of the member
     */
    position?: string;
});

