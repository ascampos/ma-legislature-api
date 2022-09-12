/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HouseJournal } from '../models/HouseJournal';
import type { JournalSummary } from '../models/JournalSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HouseJournalsService {

    /**
     * Returns all publicly available House Journals for the specified General Court
     * @param generalCourtNumber The General Court to filter by
     * @returns JournalSummary
     * @throws ApiError
     */
    public static houseJournalsGetHouseJournals(
        generalCourtNumber: number,
    ): CancelablePromise<Array<JournalSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/HouseJournals',
            path: {
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns all publicly available House Journals for the current General Court
     * @returns JournalSummary
     * @throws ApiError
     */
    public static houseJournalsGetHouseJournalsAll(): CancelablePromise<Array<JournalSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/HouseJournals',
        });
    }

    /**
     * Returns a House Journal by General Court, Session Date, and Whether it is a joint session or not.  The Date must be provided in the format: yyyyMMddHHmmss
     * @param sessionDate The Session Date to filter by
     * @param isJoint Whether it was a Joint Session
     * @returns HouseJournal
     * @throws ApiError
     */
    public static houseJournalsGetHouseJournals2(
        sessionDate: string,
        isJoint: boolean,
    ): CancelablePromise<HouseJournal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/HouseJournals/{sessionDate}/{isJoint}',
            path: {
                'sessionDate': sessionDate,
                'isJoint': isJoint,
            },
        });
    }

}
