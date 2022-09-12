/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Report } from '../models/Report';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportsService {

    /**
     * Returns all publicly available Reports by Branch.
     * @param branch
     * @returns Report
     * @throws ApiError
     */
    public static reportsGetReports(
        branch: string,
    ): CancelablePromise<Array<Report>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Branches/{branch}/Reports',
            path: {
                'branch': branch,
            },
        });
    }

    /**
     * Returns all publicly available Reports for the current General Court.
     * @returns Report
     * @throws ApiError
     */
    public static reportsGetReportsAll(): CancelablePromise<Array<Report>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Reports',
        });
    }

}
