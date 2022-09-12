/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hearing } from '../models/Hearing';
import type { HearingSummary } from '../models/HearingSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HearingsService {

    /**
     * Returns all hearings publicly available
     * @returns HearingSummary
     * @throws ApiError
     */
    public static hearingsGetHearingsAll(): CancelablePromise<Array<HearingSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Hearings',
        });
    }

    /**
     * Returns a hearing by the Hearing ID
     * @param eventId The Hearing ID to filter by.
     * @returns Hearing
     * @throws ApiError
     */
    public static hearingsGetHearings(
        eventId: number,
    ): CancelablePromise<Hearing> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Hearings/{eventId}',
            path: {
                'eventId': eventId,
            },
        });
    }

}
