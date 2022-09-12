/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Session } from '../models/Session';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SessionsService {

    /**
     * Returns all Sessions by the General Court
     * @param generalCourtNumber The General Court to filter by.
     * @returns Session
     * @throws ApiError
     */
    public static sessionsGetSessionsByGeneralCourt(
        generalCourtNumber: number,
    ): CancelablePromise<Array<Session>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Sessions',
            path: {
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns all Sessions in the current General Court
     * @returns Session
     * @throws ApiError
     */
    public static sessionsGetSessionsAll(): CancelablePromise<Array<Session>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Sessions',
        });
    }

    /**
     * Returns a Session by the Session ID
     * @param eventId The Session ID to filter by.
     * @returns Session
     * @throws ApiError
     */
    public static sessionsGetSessions(
        eventId: number,
    ): CancelablePromise<Session> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Sessions/{eventId}',
            path: {
                'eventId': eventId,
            },
        });
    }

}
