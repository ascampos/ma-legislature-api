/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralLawSection } from '../models/GeneralLawSection';
import type { GeneralLawSectionSummary } from '../models/GeneralLawSectionSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GeneralLawSectionsService {

    /**
     * Returns all of the General Law Sections contained in a specific chapter
     * @param chapter The chapter to filter by
     * @returns GeneralLawSectionSummary
     * @throws ApiError
     */
    public static generalLawSectionsGetGeneralLawsSectionsAll(
        chapter: string,
    ): CancelablePromise<Array<GeneralLawSectionSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Chapters/{chapter}/Sections',
            path: {
                'chapter': chapter,
            },
        });
    }

    /**
     * Returns the details of a specific section based on the chapter and section
     * @param chapter The chapter code to filter by
     * @param section The section code to filter by
     * @returns GeneralLawSection
     * @throws ApiError
     */
    public static generalLawSectionsGetGeneralLawsSections(
        chapter: string,
        section: string,
    ): CancelablePromise<Array<GeneralLawSection>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Chapters/{chapter}/Sections/{section}',
            path: {
                'chapter': chapter,
                'section': section,
            },
        });
    }

}
