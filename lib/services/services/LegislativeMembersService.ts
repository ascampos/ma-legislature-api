/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegislativeMember } from '../models/LegislativeMember';
import type { LegislativeMemberSummary } from '../models/LegislativeMemberSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LegislativeMembersService {

    /**
     * Returns all the legislative members by General Court
     * @param generalCourtNumber The General Court to filter by.
     * @returns LegislativeMemberSummary
     * @throws ApiError
     */
    public static legislativeMembersGetLegislativeMembers(
        generalCourtNumber: number,
    ): CancelablePromise<Array<LegislativeMemberSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/LegislativeMembers',
            path: {
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns a legislative member by the General Court number and the member code
     * @param generalCourtNumber The General Court to filter by.
     * @param memberCode The member code to filter by.
     * @returns LegislativeMember
     * @throws ApiError
     */
    public static legislativeMembersGetLegislativeMembers3(
        generalCourtNumber: number,
        memberCode: string,
    ): CancelablePromise<LegislativeMember> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/LegislativeMembers/{memberCode}',
            path: {
                'generalCourtNumber': generalCourtNumber,
                'memberCode': memberCode,
            },
        });
    }

    /**
     * Returns all active legislative members in the current General Court
     * @returns LegislativeMemberSummary
     * @throws ApiError
     */
    public static legislativeMembersGetLegislativeMembersAll(): CancelablePromise<Array<LegislativeMemberSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/LegislativeMembers',
        });
    }

    /**
     * Returns a legislative member by the member code for the current General Court
     * @param memberCode The member code to filter by.
     * @returns LegislativeMember
     * @throws ApiError
     */
    public static legislativeMembersGetLegislativeMembers2(
        memberCode: string,
    ): CancelablePromise<LegislativeMember> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/LegislativeMembers/{memberCode}',
            path: {
                'memberCode': memberCode,
            },
        });
    }

}
