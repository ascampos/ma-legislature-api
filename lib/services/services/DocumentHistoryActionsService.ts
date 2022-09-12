/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentHistoryAction } from '../models/DocumentHistoryAction';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DocumentHistoryActionsService {

    /**
     * Returns a document's history by the Bill or Docket Number
     * @param documentNumber The Bill or Docket Number to filter by.
     * @returns DocumentHistoryAction
     * @throws ApiError
     */
    public static documentHistoryActionsGetDocumentHistoryAll(
        documentNumber: string,
    ): CancelablePromise<Array<DocumentHistoryAction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Documents/{documentNumber}/DocumentHistoryActions',
            path: {
                'documentNumber': documentNumber,
            },
        });
    }

    /**
     * Returns a document's history by the Bill or Docket Number and General Court
     * @param documentNumber The Bill or Docket Number to filter by.
     * @param generalCourtNumber The General Court to filter by.
     * @returns DocumentHistoryAction
     * @throws ApiError
     */
    public static documentHistoryActionsGetDocumentHistory(
        documentNumber: string,
        generalCourtNumber: number,
    ): CancelablePromise<Array<DocumentHistoryAction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents/{documentNumber}/DocumentHistoryActions',
            path: {
                'documentNumber': documentNumber,
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

}
