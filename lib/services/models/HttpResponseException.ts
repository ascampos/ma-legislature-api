/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Exception } from './Exception';

export type HttpResponseException = (Exception & {
    response?: Blob;
});

