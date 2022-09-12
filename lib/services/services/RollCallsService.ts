/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RollCall } from '../models/RollCall';
import type { RollCallSummary } from '../models/RollCallSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RollCallsService {

    /**
     * Returns the Roll Calls by Document Number for the current General Court.
     * @param documentNumber
     * @returns RollCallSummary
     * @throws ApiError
     */
    public static rollCallsGetRollCallAll(
        documentNumber: string,
    ): CancelablePromise<Array<RollCallSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Documents/{documentNumber}/RollCalls',
            path: {
                'documentNumber': documentNumber,
            },
        });
    }

    /**
     * Returns a Roll Call by General Court, Branch, and Roll Call Number
     * @param generalCourtNumber
     * @param branch
     * @param rollCallNumber
     * @returns RollCall
     * @throws ApiError
     */
    public static rollCallsGetRollCall2(
        generalCourtNumber: number,
        branch: string,
        rollCallNumber: number,
    ): CancelablePromise<RollCall> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Branches/{branch}/RollCalls/{rollCallNumber}',
            path: {
                'generalCourtNumber': generalCourtNumber,
                'branch': branch,
                'rollCallNumber': rollCallNumber,
            },
        });
    }

    /**
     * Returns the Roll Calls by Document Number and General Court Number.
     * @param generalCourtNumber
     * @param documentNumber
     * @returns RollCallSummary
     * @throws ApiError
     */
    public static rollCallsGetRollCall(
        generalCourtNumber: number,
        documentNumber: string,
    ): CancelablePromise<Array<RollCallSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents/{documentNumber}/RollCalls',
            path: {
                'generalCourtNumber': generalCourtNumber,
                'documentNumber': documentNumber,
            },
        });
    }

}
