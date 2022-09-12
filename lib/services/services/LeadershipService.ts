/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Leadership } from '../models/Leadership';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LeadershipService {

    /**
     * Returns the Legislative Leadership by Branch for the current General Court.
     * @param branch
     * @returns Leadership
     * @throws ApiError
     */
    public static leadershipGetLeadershipAll(
        branch: string,
    ): CancelablePromise<Array<Leadership>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Branches/{branch}/Leadership',
            path: {
                'branch': branch,
            },
        });
    }

    /**
     * Returns the Legislative Leadership by Branch and General Court.
     * @param generalCourtNumber
     * @param branch
     * @returns Leadership
     * @throws ApiError
     */
    public static leadershipGetLeadership(
        generalCourtNumber: number,
        branch: string,
    ): CancelablePromise<Array<Leadership>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Branches/{branch}/Leadership',
            path: {
                'generalCourtNumber': generalCourtNumber,
                'branch': branch,
            },
        });
    }

}
