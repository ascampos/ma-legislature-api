/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionLaw } from '../models/SessionLaw';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SessionLawsService {

    /**
     * Returns all of the Session Laws for the current year
     * @returns SessionLaw
     * @throws ApiError
     */
    public static sessionLawsGetSessionLaws(): CancelablePromise<SessionLaw> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/SessionLaws',
        });
    }

    /**
     * Returns all the Session Laws for the specified year
     * @param year The year of the session to filter by.
     * @returns SessionLaw
     * @throws ApiError
     */
    public static sessionLawsGetSessionLaws2(
        year: number,
    ): CancelablePromise<SessionLaw> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/SessionLaws/{year}',
            path: {
                'year': year,
            },
        });
    }

    /**
     * Returns a Session Law based on the Session year and chapter number
     * @param year The year of the Session to filter by.
     * @param chapterNumber The chapter number of the Session Law
     * @returns SessionLaw
     * @throws ApiError
     */
    public static sessionLawsGetSessionLaws3(
        year: number,
        chapterNumber: number,
    ): CancelablePromise<SessionLaw> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/SessionLaws/{year}/{chapterNumber}',
            path: {
                'year': year,
                'chapterNumber': chapterNumber,
            },
        });
    }

    /**
     * Returns a list of all the available years in which Session Laws exist
     * @returns number
     * @throws ApiError
     */
    public static sessionLawsGetSessionLawsYears(): CancelablePromise<Array<number>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/SessionLaws/SupportedYears',
        });
    }

}
