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
  * @property `[id]` id
  * @property `[mark]` 节点级别(0:根节点,1:节点二,2:节点三,3:节点四)
  * @property `[name]` 节点名
  * @property `[nodeCode]` 节点标识符
  */
export interface KnowledgeView {
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
   * id
   */
  "id"?: number;
  /**
   * 节点级别(0:根节点,1:节点二,2:节点三,3:节点四)
   */
  "mark"?: number;
  /**
   * 节点名
   */
  "name"?: string;
  /**
   * 节点标识符
   */
  "nodeCode"?: string;
}

