/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralCourt } from '../models/GeneralCourt';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GeneralCourtsService {

    /**
     * @deprecated
     * This call is not supported. You must specify what context you are trying to get the available General Courts for.
     * @returns void
     * @throws ApiError
     */
    public static generalCourtsGetGeneralCourt(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts',
        });
    }

    /**
     * @deprecated
     * This call is not supported. Further details for each General Court provided are not available
     * @param generalCourtNumber Number of the General Court to be returned.
     * @returns void
     * @throws ApiError
     */
    public static generalCourtsGetGeneralCourt2(
        generalCourtNumber: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}',
            path: {
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns a list of all General Courts with Committees available
     * @returns GeneralCourt
     * @throws ApiError
     */
    public static generalCourtsGetGeneralCourtsForCommittees(): CancelablePromise<Array<GeneralCourt>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/Committees',
        });
    }

    /**
     * Returns a list of all General Courts with Documents available
     * @returns GeneralCourt
     * @throws ApiError
     */
    public static generalCourtsGetGeneralCourtsForDocuments(): CancelablePromise<Array<GeneralCourt>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/Documents',
        });
    }

    /**
     * Returns a list of all General Courts with Legislators available
     * @returns GeneralCourt
     * @throws ApiError
     */
    public static generalCourtsGetGeneralCourtsForLegislativeMembers(): CancelablePromise<Array<GeneralCourt>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/LegislativeMembers',
        });
    }

    /**
     * Returns a list of all General Courts with Sessions available
     * @returns GeneralCourt
     * @throws ApiError
     */
    public static generalCourtsGetGeneralCourtsForSessions(): CancelablePromise<Array<GeneralCourt>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/Sessions',
        });
    }

}
