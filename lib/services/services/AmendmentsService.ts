/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Amendment } from '../models/Amendment';
import type { AmendmentSummary } from '../models/AmendmentSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AmendmentsService {

    /**
     * Returns a list of amendments by Document Number for the current General Court.
     * @param documentNumber
     * @returns AmendmentSummary
     * @throws ApiError
     */
    public static amendmentsGetAmendmentsAll(
        documentNumber: string,
    ): CancelablePromise<Array<AmendmentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Documents/{documentNumber}/Amendments',
            path: {
                'documentNumber': documentNumber,
            },
        });
    }

    /**
     * Returns a list of amendments by Document Number and General Court.
     * @param generalCourtNumber
     * @param documentNumber
     * @returns AmendmentSummary
     * @throws ApiError
     */
    public static amendmentsGetAmendments(
        generalCourtNumber: number,
        documentNumber: string,
    ): CancelablePromise<Array<AmendmentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents/{documentNumber}/Amendments',
            path: {
                'generalCourtNumber': generalCourtNumber,
                'documentNumber': documentNumber,
            },
        });
    }

    /**
     * Returns a list of amendments by Document Number and General Court and Branch.
     * @param generalCourtNumber
     * @param branch
     * @param documentNumber
     * @returns AmendmentSummary
     * @throws ApiError
     */
    public static amendmentsGetAmendments2(
        generalCourtNumber: number,
        branch: string,
        documentNumber: string,
    ): CancelablePromise<Array<AmendmentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents/{documentNumber}/Branches/{branch}/Amendments',
            path: {
                'generalCourtNumber': generalCourtNumber,
                'branch': branch,
                'documentNumber': documentNumber,
            },
        });
    }

    /**
     * Returns a specific Amendment by General Court And Document Number And Branch and Amendment Number
     * @param generalCourtNumber
     * @param branch
     * @param documentNumber
     * @param amendmentNumber
     * @returns Amendment
     * @throws ApiError
     */
    public static amendmentsGetAmendment(
        generalCourtNumber: number,
        branch: string,
        documentNumber: string,
        amendmentNumber: string,
    ): CancelablePromise<Amendment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents/{documentNumber}/Branches/{branch}/Amendments/{amendmentNumber}',
            path: {
                'generalCourtNumber': generalCourtNumber,
                'branch': branch,
                'documentNumber': documentNumber,
                'amendmentNumber': amendmentNumber,
            },
        });
    }

    /**
     * Returns a list of amendments by Document Number and General Court And Branch And Category.
     * @param generalCourtNumber
     * @param branch
     * @param documentNumber
     * @param category
     * @returns AmendmentSummary
     * @throws ApiError
     */
    public static amendmentsGetAmendments3(
        generalCourtNumber: number,
        branch: string,
        documentNumber: string,
        category: string,
    ): CancelablePromise<Array<AmendmentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents/{documentNumber}/Branches/{branch}/Category/{category}/Amendments',
            path: {
                'generalCourtNumber': generalCourtNumber,
                'branch': branch,
                'documentNumber': documentNumber,
                'category': category,
            },
        });
    }

}
