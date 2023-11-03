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

import * as models from "./models";

/**
 * @description 知识公共函数表
 * @property `funContent` 函数内容
 * @property `funName` 函数名称
 * @property `[funNote]` 函数功能说明
 * @property `[id]` 主键id
 * @property `[paramNote]` 输入说明
 * @property `[returnNote]` 输出说明
 * @property `returnType` 返回类型
 * @property `uuid` 唯一标识
 */
export interface KnowledgeFunction1 {
  /**
   * 函数内容
   */
  funContent: string;
  /**
   * 函数名称
   */
  funName: string;
  /**
   * 函数功能说明
   */
  funNote?: string;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 输入说明
   */
  paramNote?: {
    name: string;
    paramNote: string;
  }[];
  /**
   * 输出说明
   */
  returnNote?: string;
  /**
   * 返回类型
   */
  returnType: number;
  /**
   * 唯一标识
   */
  uuid: string;
}