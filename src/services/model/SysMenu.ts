/**
 * 长管用户
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from "./models";

/**
 * @description 菜单权限表
 * @property `[children]`
 * @property `[createBy]` 创建者
 * @property `[createTime]` 创建时间
 * @property `[icon]` 菜单图标
 * @property `[menuCode]` 菜单编码
 * @property `[menuId]` 菜单ID
 * @property `[menuName]` 菜单名称
 * @property `[menuType]` 菜单类型（M目录 C菜单 F按钮）
 * @property `[orderNum]` 显示顺序
 * @property `[params]`
 * @property `[parentId]` 父菜单ID
 * @property `[parentName]` 父菜单名称
 * @property `[path]` 请求地址
 * @property `[perms]` 权限标识
 * @property `[query]` 请求参数
 * @property `[remark]` 备注
 * @property `[status]` 菜单状态（0正常 1停用）
 * @property `[updateBy]` 更新者
 * @property `[updateTime]` 更新时间
 * @property `[visible]` 菜单状态（0显示 1隐藏）
 */
export interface SysMenu {
  children?: Array<models.SysMenu>;
  /**
   * 创建者
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 菜单图标
   */
  icon?: string;
  /**
   * 菜单编码
   */
  menuCode?: string;
  /**
   * 菜单ID
   */
  menuId?: number;
  /**
   * 菜单名称
   */
  menuName?: string;
  /**
   * 菜单类型（M目录 C菜单 F按钮）
   */
  menuType?: string;
  /**
   * 显示顺序
   */
  orderNum?: number;
  params?: any;
  /**
   * 父菜单ID
   */
  parentId?: number;
  /**
   * 父菜单名称
   */
  parentName?: string;
  /**
   * 请求地址
   */
  path?: string;
  /**
   * 权限标识
   */
  perms?: string;
  /**
   * 请求参数
   */
  query?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 菜单状态（0正常 1停用）
   */
  status?: string;
  /**
   * 更新者
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
  /**
   * 菜单状态（0显示 1隐藏）
   */
  visible?: string;
}
