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
 * @description 用户信息表
 * @property `[avatar]` 头像地址
 * @property `[createBy]` 创建者
 * @property `[createTime]` 创建时间
 * @property `[delFlag]` 删除标志（0代表存在 2代表删除）
 * @property `[dept]`
 * @property `[deptId]` 部门ID
 * @property `[email]` 用户邮箱
 * @property `[loginDate]` 最后登录时间
 * @property `[loginIp]` 最后登录IP
 * @property `[nickName]` 用户名称
 * @property `[password]` 密码
 * @property `[phonenumber]` 手机号码
 * @property `[remark]` 备注
 * @property `[roleId]`
 * @property `[roleIds]`
 * @property `[roles]`
 * @property `[sex]` 用户性别（0男 1女 2未知）
 * @property `[status]` 帐号状态（0正常 1停用）
 * @property `[updateBy]` 更新者
 * @property `[updateTime]` 更新时间
 * @property `[userId]` 用户ID
 * @property `[userName]` 用户账号
 * @property `[userType]` 用户类型（00系统用户）
 */
export interface SysUserReq {
  /**
   * 头像地址
   */
  avatar?: string;
  /**
   * 创建者
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 删除标志（0代表存在 2代表删除）
   */
  delFlag?: string;
  dept?: models.SysDept;
  /**
   * 部门ID
   */
  deptId?: number;
  /**
   * 用户邮箱
   */
  email?: string;
  /**
   * 最后登录时间
   */
  loginDate?: Date;
  /**
   * 最后登录IP
   */
  loginIp?: string;
  /**
   * 用户名称
   */
  nickName?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 手机号码
   */
  phonenumber?: string;
  /**
   * 备注
   */
  remark?: string;
  roleId?: number;
  roleIds?: Array<number>;
  roles?: Array<models.SysRoleReq>;
  /**
   * 用户性别（0男 1女 2未知）
   */
  sex?: string;
  /**
   * 帐号状态（0正常 1停用）
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
   * 用户ID
   */
  userId?: number;
  /**
   * 用户账号
   */
  userName?: string;
  /**
   * 用户类型（00系统用户）
   */
  userType?: string;
}