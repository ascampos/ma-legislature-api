/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralLawChapter } from '../models/GeneralLawChapter';
import type { GeneralLawChapterSummary } from '../models/GeneralLawChapterSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GeneralLawChaptersService {

    /**
     * Returns all of the General Law Chapters currently available.
     * @returns GeneralLawChapterSummary
     * @throws ApiError
     */
    public static generalLawChaptersGetChapters(): CancelablePromise<Array<GeneralLawChapterSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Chapters',
        });
    }

    /**
     * Returns the details for a specific Chapter
     * @param code The chapter code to filter by
     * @returns GeneralLawChapter
     * @throws ApiError
     */
    public static generalLawChaptersGetChaptersByCode(
        code: string,
    ): CancelablePromise<Array<GeneralLawChapter>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Chapters/{code}',
            path: {
                'code': code,
            },
        });
    }

    /**
     * Returns all of the chapters for a specific Part
     * @param partCode The Part code to filter by
     * @returns GeneralLawChapterSummary
     * @throws ApiError
     */
    public static generalLawChaptersGetChaptersByPart(
        partCode: string,
    ): CancelablePromise<Array<GeneralLawChapterSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Parts/{partCode}/Chapters',
            path: {
                'partCode': partCode,
            },
        });
    }

}
