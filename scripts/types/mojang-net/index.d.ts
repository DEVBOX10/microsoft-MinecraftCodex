// Type definitions for Minecraft Bedrock Edition script APIs (experimental) 0.1
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * The `mojang-net` module contains types for executing
 * HTTP-based requests.
 *
 * Manifest Details
 * ```json
 * {
 *   // mojang-net
 *   "uuid": "777b1798-13a6-401c-9cba-0cf17e31a81b",
 *   "version": [ 0, 1, 0 ]
 * }
 * ```
 *
 */
export enum RequestMethod {
    /**
     * Represents the method for an HTTP PUT request. GET requests
     * are commonly used to retrieve information about a resource
     * at the specified URI.
     */
    POST = 0,
    /**
     * Represents the method for an HTTP PUT request. PUT requests
     * are commonly used to update a single resource that already
     * exists in a resource collection.
     */
    PUT = 1,
    /**
     * Represents the method for an HTTP PUT request. POST requests
     * are commonly used to create a new resource that is a
     * subordinate of the specified URI.
     */
    GET = 2,
    /**
     * Represents the method for an HTTP HEAD request. HEAD
     * requests are similar to a GET request, but are commonly used
     * to retrieve just the HTTP response headers from the
     * specified URI, and not the body contents.
     */
    DELETE = 3,
    /**
     * Represents the method for an HTTP PUT request. GET requests
     * are commonly used to retrieve information about a resource
     * at the specified URI.
     */
    HEAD = 4,
}
/**
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
 */
export class Header {
    /**
     * Key of the HTTP header.
     */
    'key': string;
    /**
     * Value of the HTTP header.
     */
    'value': string;
    constructor(key: string, value: string);
}
export class HttpClient {
    /**
     * @remarks
     * Cancels all pending requests.
     * @param reason
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * Performs a simple HTTP get request.
     * @param uri
     * URL to make an HTTP Request to.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<Response>;
    /**
     * @remarks
     * Performs an HTTP request.
     * @param config
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    request(config: Request): Promise<Response>;
    testOnly_fulfilRequest(requestId: number, headers: Header[], body: string, status: number): void;
    testOnly_getRequests(): number[];
    testOnly_rejectRequest(requestId: number, reason: string): void;
    protected constructor();
}
/**
 * Main object for structuring a request.
 */
export class Request {
    /**
     * Content of the body of the HTTP request.
     */
    'body': string;
    /**
     * A collection of HTTP headers to add to the outbound request.
     */
    'headers': Header[];
    /**
     * HTTP method (e.g., GET or PUT or PATCH) to use for making
     * the request.
     */
    'method': RequestMethod;
    /**
     * Amount of time, in milliseconds, before the request times
     * out and is abandoned.
     */
    'timeout': number;
    /**
     * The HTTP resource to access.
     */
    'uri': string;
    constructor(headers: Header[], uri: string, body: string, timeout: number, method: RequestMethod);
}
/**
 * Main object that contains result information from a request.
 */
export class Response {
    /**
     * Body content of the HTTP response.
     */
    readonly 'body': string;
    /**
     * A collection of HTTP response headers returned from the
     * request.
     */
    readonly 'headers': Header[];
    /**
     * Information that was used to formulate the HTTP response
     * that this object represents.
     */
    readonly 'request': Request;
    /**
     * HTTP response code for the request. For example, 404
     * represents resource not found, and 500 represents an
     * internal server error.
     */
    readonly 'status': number;
    protected constructor();
}
export const http: HttpClient;