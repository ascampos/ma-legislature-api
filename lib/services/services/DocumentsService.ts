/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Document } from '../models/Document';
import type { DocumentSummary } from '../models/DocumentSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DocumentsService {

    /**
     * Returns a list of documents based on the city for the current general court
     * @param city
     * @returns DocumentSummary
     * @throws ApiError
     */
    public static documentsGetDocumentByCityAll(
        city: string,
    ): CancelablePromise<Array<DocumentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Cities/{city}/Documents',
            path: {
                'city': city,
            },
        });
    }

    /**
     * Returns all of documents publicly available in the current General Court
     * @returns DocumentSummary
     * @throws ApiError
     */
    public static documentsGetDocumentsAll(): CancelablePromise<Array<DocumentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Documents',
        });
    }

    /**
     * Returns a document by the Bill or Docket Number
     * @param documentNumber The Bill or Docket Number to filter by.
     * @returns Document
     * @throws ApiError
     */
    public static documentsGetDocument(
        documentNumber: string,
    ): CancelablePromise<Document> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Documents/{documentNumber}',
            path: {
                'documentNumber': documentNumber,
            },
        });
    }

    /**
     * Returns a list of similar documents to the given document
     * @param documentNumber The document number to filter by
     * @returns DocumentSummary
     * @throws ApiError
     */
    public static documentsGetSimilarDocumentsAll(
        documentNumber: string,
    ): CancelablePromise<Array<DocumentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Documents/{documentNumber}/Similar',
            path: {
                'documentNumber': documentNumber,
            },
        });
    }

    /**
     * Returns a list of available cities to search for local bills in the current General Court.
     * @returns string
     * @throws ApiError
     */
    public static documentsGetCitiesAll(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Documents/SupportedCities',
        });
    }

    /**
     * Returns a list of documents based on the city and the general court number
     * @param city
     * @param generalCourtNumber
     * @returns DocumentSummary
     * @throws ApiError
     */
    public static documentsGetDocumentByCity(
        city: string,
        generalCourtNumber: number,
    ): CancelablePromise<Array<DocumentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Cities/{city}/Documents',
            path: {
                'city': city,
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns all of documents publicly available by the General Court
     * @param generalCourtNumber The General Court to filter by.
     * @returns DocumentSummary
     * @throws ApiError
     */
    public static documentsGetDocuments(
        generalCourtNumber: number,
    ): CancelablePromise<Array<DocumentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents',
            path: {
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns a document by the Bill or Docket Number and General Court
     * @param documentNumber The Bill or Docket Number to filter by.
     * @param generalCourtNumber The General Court to filter by.
     * @returns Document
     * @throws ApiError
     */
    public static documentsGetDocument2(
        documentNumber: string,
        generalCourtNumber: number,
    ): CancelablePromise<Document> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents/{documentNumber}',
            path: {
                'documentNumber': documentNumber,
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns a list of similar documents to the given document
     * @param documentNumber The document number to filter by
     * @param generalCourtNumber The general court number to filter by
     * @returns DocumentSummary
     * @throws ApiError
     */
    public static documentsGetSimilarDocuments(
        documentNumber: string,
        generalCourtNumber: number,
    ): CancelablePromise<Array<DocumentSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents/{documentNumber}/Similar',
            path: {
                'documentNumber': documentNumber,
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

    /**
     * Returns a list of available cities to search for local bills by General Court.
     * @param generalCourtNumber
     * @returns string
     * @throws ApiError
     */
    public static documentsGetCities(
        generalCourtNumber: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/GeneralCourts/{generalCourtNumber}/Documents/SupportedCities',
            path: {
                'generalCourtNumber': generalCourtNumber,
            },
        });
    }

}
