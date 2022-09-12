/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommitteeVote } from '../models/CommitteeVote';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommitteeVotesService {

    /**
     * Returns all Committee Votes for by Committee Code and Document Number in the current General Court.
     * @param committeeCode
     * @param documentNumber
     * @returns CommitteeVote
     * @throws ApiError
     */
    public static committeeVotesGetCommitteeVotes(
        committeeCode: string,
        documentNumber: string,
    ): CancelablePromise<Array<CommitteeVote>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Committees/{committeeCode}/Documents/{documentNumber}/CommitteeVotes',
            path: {
                'committeeCode': committeeCode,
                'documentNumber': documentNumber,
            },
        });
    }

    /**
     * Returns all Committees Votes by Committee Code, Document Number, and General Court.
     * @param generalCourtNumber
     * @param committeeCode
     * @param documentNumber
     * @returns CommitteeVote
     * @throws ApiError
     */
    public static committeeVotesGetCommitteeVotesByDocument(
        generalCourtNumber: number,
        committeeCode: string,
        documentNumber: string,
    ): CancelablePromise<Array<CommitteeVote>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Committees/{committeeCode}/Documents/{documentNumber}/CommitteeVotes',
            path: {
                'generalCourtNumber': generalCourtNumber,
                'committeeCode': committeeCode,
                'documentNumber': documentNumber,
            },
        });
    }

}
