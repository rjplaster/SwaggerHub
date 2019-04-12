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
 */import { ModelObject } from './modelObject';


export interface FindParticipantsResponse { 
    messageResponseHeader?: ModelObject;
    body?: any;
}