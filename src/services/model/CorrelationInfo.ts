/**
 * unknown
 * unknown
 *
 * OpenAPI spec version: last
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
  * @property `[docInfo]` 文档信息
  * @property `[docName]` 文档文件名
  * @property `[docPath]` 文档路径
  * @property `[nodeCode]` 节点标识符
  * @property `[nodeId]` 节点ID
  * @property `[nodeName]` 节点名
  */
export interface CorrelationInfo {
  /**
   * 文档信息
   */
  "docInfo"?: string;
  /**
   * 文档文件名
   */
  "docName"?: string;
  /**
   * 文档路径
   */
  "docPath"?: string;
  /**
   * 节点标识符
   */
  "nodeCode"?: string;
  /**
   * 节点ID
   */
  "nodeId"?: number;
  /**
   * 节点名
   */
  "nodeName"?: string;
}

