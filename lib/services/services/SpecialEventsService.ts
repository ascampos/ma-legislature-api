/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SpecialEvent } from '../models/SpecialEvent';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SpecialEventsService {

    /**
     * Returns all publicly available Special Events
     * @returns SpecialEvent
     * @throws ApiError
     */
    public static specialEventsGetSpecialEventsAll(): CancelablePromise<Array<SpecialEvent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/SpecialEvents',
        });
    }

    /**
     * Returns a Special Event by Special Event ID
     * @param eventId The Special Event ID to filter by.
     * @returns SpecialEvent
     * @throws ApiError
     */
    public static specialEventsGetSpecialEvents(
        eventId: number,
    ): CancelablePromise<SpecialEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/SpecialEvents/{eventId}',
            path: {
                'eventId': eventId,
            },
        });
    }

}
