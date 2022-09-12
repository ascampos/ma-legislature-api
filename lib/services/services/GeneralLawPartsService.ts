/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralLawPart } from '../models/GeneralLawPart';
import type { GeneralLawPartSummary } from '../models/GeneralLawPartSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GeneralLawPartsService {

    /**
     * Returns all of the General Laws Parts currently available
     * @returns GeneralLawPartSummary
     * @throws ApiError
     */
    public static generalLawPartsGetGeneralLawsParts(): CancelablePromise<GeneralLawPartSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Parts',
        });
    }

    /**
     * Returns the details for a specific Part
     * @param code The Part code to filter by
     * @returns GeneralLawPart
     * @throws ApiError
     */
    public static generalLawPartsGetGeneralLawsParts2(
        code: string,
    ): CancelablePromise<GeneralLawPart> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Parts/{code}',
            path: {
                'code': code,
            },
        });
    }

}
