/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Committee } from '../models/Committee';
import type { CommitteeSummary } from '../models/CommitteeSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommitteesService {

    /**
     * Returns all active Committees in the current General Court
     * @returns CommitteeSummary
     * @throws ApiError
     */
    public static committeesGetCommitteesAll(): CancelablePromise<Array<CommitteeSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Committees',
        });
    }

    /**
     * Returns a Committee by the Committee Code
     * @param committeeCode The Committee Code to filter by.
     * @returns Committee
     * @throws ApiError
     */
    public static committeesGetCommittees2(
        committeeCode: string,
    ): CancelablePromise<Committee> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Committees/{committeeCode}',
            path: {
                'committeeCode': committeeCode,
            },
        });
    }

    /**
     * Returns all active Committees by the General Court
     * @param generalCourtNumber The General Court to filter by.
     * @returns CommitteeSummary
     * @throws ApiError
     */
    public static committeesGetCommittees(
        generalCourtNumber: number,
    ): CancelablePromise<Array<CommitteeSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Committees',
            path: {
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns a Committee by the Committee Code and General Court
     * @param committeeCode The Committee Code to filter by.
     * @param generalCourtNumber The General Court to filter by.
     * @returns Committee
     * @throws ApiError
     */
    public static committeesGetCommittees3(
        committeeCode: string,
        generalCourtNumber: number,
    ): CancelablePromise<Committee> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Committees/{committeeCode}',
            path: {
                'committeeCode': committeeCode,
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns all Committee Codes that contain Committee Votes.
     * @param generalCourtNumber
     * @returns string
     * @throws ApiError
     */
    public static committeesGetCommitteeCodes(
        generalCourtNumber: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Committees/CommitteeVotes',
            path: {
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

}
