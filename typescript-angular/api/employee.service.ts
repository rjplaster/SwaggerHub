/**
 * BenefitsWorkstation GroupBenefitsApi Services
 * <table style=\"float: left;\"> <tbody>   <tr>     <td colspan=\"2\">     <h3><strong>Overview:</strong></h3>     <p>Collection of Operations for accessing the Group Benefits Platform - Benefits Workstation.</p>     <h3><strong>Implementation Notes:</strong></h3>     <ul>       <li>Wherever possible REGEX expressions are provided to assist in validation</li>       </li>     </ul>     </td>   </tr>   <tr>     <td colspan=\"2\">     <h3><strong>Authentication:</strong></h3>     <ul>       <li>API is secured through Basic Auth scheme utilizing Windows NTLM users/groups</li>     </td>   </tr> </tbody> </table>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: bwappsupport@nreca.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { FindParticipantsResponse } from '../model/findParticipantsResponse';
import { HttpswaggerhubNrecaOrgv1domainsEAPCOF497componentsschemasError } from '../model/httpswaggerhubNrecaOrgv1domainsEAPCOF497componentsschemasError';
import { ModelObject } from '../model/modelObject';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EmployeeService {

    protected basePath = 'http://sva.services.benefitsworkstation.nreca.org';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Return a summary of all the Group benefits of which the Individual is enrolled, including the benefits the Individual has elected to opt out of coverage.
     * Returns a summary of all the Group benefits of which the Individual is enrolled, including the benefits the Individual has elected to opt out of coverage. * The Individual, specified by Cid, may represent an Employee or Dependent of an Employee.  * If the Cid represents an active or retired Employee, this operation returns ALL the Employees Group benefits covered options.   * If the Cid represents a Dependent, this operation returns only the Dependents Group benefits covered options.    * If the Cid represents an Individual that is both an Employee AND a Dependent, this operation returns ALL the Group benefits covered options as an Employee and a Dependent. * If the SubgroupId(s) are provided then a summary is restricted to those SubgroupId(s) provided. * If NO SubgroupIds are provided the operation returns Group benefits for that employee across ALL Subgroups in which the Individual participates. * If the Cid represents a Dual Employee, this operation returns ALL the Group benefits for which the Individual is enrolled under two or more different cooperative subgroups. 
     * @param body JSON object containing standard COF Message Request Header and operation specific request body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findElectionsSummary(body: ModelObject, observe?: 'body', reportProgress?: boolean): Observable<FindParticipantsResponse>;
    public findElectionsSummary(body: ModelObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FindParticipantsResponse>>;
    public findElectionsSummary(body: ModelObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FindParticipantsResponse>>;
    public findElectionsSummary(body: ModelObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling findElectionsSummary.');
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<FindParticipantsResponse>(`${this.basePath}/Employee/FindElectionsSummary`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns list of employees for provided list of subgroups
     * Search for Participants in the provided Subgroups and using the specified input search criteria. Participants may be Employees, or COBRA Dependents 
     * @param body Find Participants by SubgroupId(s)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findParticipants(body: ModelObject, observe?: 'body', reportProgress?: boolean): Observable<FindParticipantsResponse>;
    public findParticipants(body: ModelObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FindParticipantsResponse>>;
    public findParticipants(body: ModelObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FindParticipantsResponse>>;
    public findParticipants(body: ModelObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling findParticipants.');
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<FindParticipantsResponse>(`${this.basePath}/Employee/FindParticipants`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
