/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JournalSummary } from '../models/JournalSummary';
import type { SenateJournal } from '../models/SenateJournal';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SenateJournalsService {

    /**
     * Returns all publicly available Senate Journals for specified General Court
     * @param generalCourtNumber The General Court to filter by
     * @returns JournalSummary
     * @throws ApiError
     */
    public static senateJournalsGetSenateJournals(
        generalCourtNumber: number,
    ): CancelablePromise<Array<JournalSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/SenateJournals',
            path: {
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns all publicly available Senate Journals for the current General Court
     * @returns JournalSummary
     * @throws ApiError
     */
    public static senateJournalsGetSenateJournalsAll(): CancelablePromise<Array<JournalSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/SenateJournals',
        });
    }

    /**
     * Returns a Senate Journal by the Session Date. The Date must be in the format yyyyMMddHHmmss.
     * @param sessionDate The session date of the journal
     * @param isJoint Whether it was a Joint Session
     * @returns SenateJournal
     * @throws ApiError
     */
    public static senateJournalsGetSenateJournals2(
        sessionDate: string,
        isJoint: boolean,
    ): CancelablePromise<SenateJournal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/SenateJournals/{sessionDate}/{isJoint}',
            path: {
                'sessionDate': sessionDate,
                'isJoint': isJoint,
            },
        });
    }

}
