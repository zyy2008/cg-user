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

import ajax, { AjaxPromise, ExtraFetchParams } from '@ajax';
import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  */
export type ParamsBodyaddUsingPOST1 = models.SysMenu;
/**
  */
export type ParamsBodyeditUsingPUT1 = models.SysMenu;
/**
  * @description getInfoUsingGET1参数
  * @property `menuId` menuId
  */
export interface ParamsgetInfoUsingGET1 {
  // pathParams
  /**
   * menuId
   */
  menuId: number;
}
/**
  * @description listUsingGET1参数
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
export interface ParamslistUsingGET1 {
  // queryParams
  /**
   * 创建者
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
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
  /**
   * 
   */
  params?: string;
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
  updateTime?: string;
  /**
   * 菜单状态（0显示 1隐藏）
   */
  visible?: string;
}
/**
  * @description removeUsingDELETE1参数
  * @property `menuId` menuId
  */
export interface ParamsremoveUsingDELETE1 {
  // pathParams
  /**
   * menuId
   */
  menuId: number;
}
/**
  * @description roleMenuTreeselectUsingGET参数
  * @property `roleId` roleId
  */
export interface ParamsroleMenuTreeselectUsingGET {
  // pathParams
  /**
   * roleId
   */
  roleId: number;
}
/**
  * @description treeselectUsingGET参数
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
export interface ParamstreeselectUsingGET {
  // queryParams
  /**
   * 创建者
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
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
  /**
   * 
   */
  params?: string;
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
  updateTime?: string;
  /**
   * 菜单状态（0显示 1隐藏）
   */
  visible?: string;
}

export class SysMenuControllerApi {
  protected $basePath = ''.replace(/\/$/, '');

  public constructor(basePath?: string) {
    if (basePath !== undefined) {
      this.$basePath = basePath.replace(/\/$/, '');
    }
  }

  /**
   * 
   * @summary add
   
   * @param data: ParamsBodyaddUsingPOST1
   * @param opt ajax config
   * @returns { [key: string]: any; }
   */
  public addUsingPOST1 = (
    
    data: ParamsBodyaddUsingPOST1,opt?: ExtraFetchParams
  ) : AjaxPromise<{ [key: string]: any; }>  => {
    const url = this.$basePath + `/menu`;
    const p: any = {};
    p.data = data;
    return ajax.ajax({
      ...opt,
      method: 'POST',
      url,
      ...p
    });
  }
  /**
   * 
   * @summary edit
   
   * @param data: ParamsBodyeditUsingPUT1
   * @param opt ajax config
   * @returns { [key: string]: any; }
   */
  public editUsingPUT1 = (
    
    data: ParamsBodyeditUsingPUT1,opt?: ExtraFetchParams
  ) : AjaxPromise<{ [key: string]: any; }>  => {
    const url = this.$basePath + `/menu`;
    const p: any = {};
    p.data = data;
    return ajax.ajax({
      ...opt,
      method: 'PUT',
      url,
      ...p
    });
  }
  /**
   * 
   * @summary getInfo
   * @param params ParamsgetInfoUsingGET1
   
   * @param opt ajax config
   * @returns { [key: string]: any; }
   */
  public getInfoUsingGET1 = (
    params: ParamsgetInfoUsingGET1,
    opt?: ExtraFetchParams
  ) : AjaxPromise<{ [key: string]: any; }>  => {
    const {
    menuId,
} = params;
    const url = this.$basePath + `/menu/${menuId}`;
    const p: any = {};
    ajax.check(params.menuId, 'menuId');
    return ajax.ajax({
      ...opt,
      method: 'GET',
      url,
      ...p
    });
  }
  /**
   * 
   * @summary getRouters
   
   
   * @param opt ajax config
   * @returns { [key: string]: any; }
   */
  public getRoutersUsingGET = (
    
    opt?: ExtraFetchParams
  ) : AjaxPromise<{ [key: string]: any; }>  => {
    const url = this.$basePath + `/menu/getRouters`;
    const p: any = {};
    return ajax.ajax({
      ...opt,
      method: 'GET',
      url,
      ...p
    });
  }
  /**
   * 
   * @summary list
   * @param params ParamslistUsingGET1
   
   * @param opt ajax config
   * @returns { [key: string]: any; }
   */
  public listUsingGET1 = (
    params: ParamslistUsingGET1,
    opt?: ExtraFetchParams
  ) : AjaxPromise<{ [key: string]: any; }>  => {
    const url = this.$basePath + `/menu/list`;
    const p: any = {};
    p.query = {};
    if ('createBy' in params) p.query.createBy = params.createBy;
    if ('createTime' in params) p.query.createTime = params.createTime;
    if ('icon' in params) p.query.icon = params.icon;
    if ('menuCode' in params) p.query.menuCode = params.menuCode;
    if ('menuId' in params) p.query.menuId = params.menuId;
    if ('menuName' in params) p.query.menuName = params.menuName;
    if ('menuType' in params) p.query.menuType = params.menuType;
    if ('orderNum' in params) p.query.orderNum = params.orderNum;
    if ('params' in params) p.query.params = params.params;
    if ('parentId' in params) p.query.parentId = params.parentId;
    if ('parentName' in params) p.query.parentName = params.parentName;
    if ('path' in params) p.query.path = params.path;
    if ('perms' in params) p.query.perms = params.perms;
    if ('query' in params) p.query.query = params.query;
    if ('remark' in params) p.query.remark = params.remark;
    if ('status' in params) p.query.status = params.status;
    if ('updateBy' in params) p.query.updateBy = params.updateBy;
    if ('updateTime' in params) p.query.updateTime = params.updateTime;
    if ('visible' in params) p.query.visible = params.visible;
    return ajax.ajax({
      ...opt,
      method: 'GET',
      url,
      ...p
    });
  }
  /**
   * 
   * @summary remove
   * @param params ParamsremoveUsingDELETE1
   
   * @param opt ajax config
   * @returns { [key: string]: any; }
   */
  public removeUsingDELETE1 = (
    params: ParamsremoveUsingDELETE1,
    opt?: ExtraFetchParams
  ) : AjaxPromise<{ [key: string]: any; }>  => {
    const {
    menuId,
} = params;
    const url = this.$basePath + `/menu/${menuId}`;
    const p: any = {};
    ajax.check(params.menuId, 'menuId');
    return ajax.ajax({
      ...opt,
      method: 'DELETE',
      url,
      ...p
    });
  }
  /**
   * 
   * @summary roleMenuTreeselect
   * @param params ParamsroleMenuTreeselectUsingGET
   
   * @param opt ajax config
   * @returns { [key: string]: any; }
   */
  public roleMenuTreeselectUsingGET = (
    params: ParamsroleMenuTreeselectUsingGET,
    opt?: ExtraFetchParams
  ) : AjaxPromise<{ [key: string]: any; }>  => {
    const {
    roleId,
} = params;
    const url = this.$basePath + `/menu/roleMenuTreeselect/${roleId}`;
    const p: any = {};
    ajax.check(params.roleId, 'roleId');
    return ajax.ajax({
      ...opt,
      method: 'GET',
      url,
      ...p
    });
  }
  /**
   * 
   * @summary treeselect
   * @param params ParamstreeselectUsingGET
   
   * @param opt ajax config
   * @returns { [key: string]: any; }
   */
  public treeselectUsingGET = (
    params: ParamstreeselectUsingGET,
    opt?: ExtraFetchParams
  ) : AjaxPromise<{ [key: string]: any; }>  => {
    const url = this.$basePath + `/menu/treeselect`;
    const p: any = {};
    p.query = {};
    if ('createBy' in params) p.query.createBy = params.createBy;
    if ('createTime' in params) p.query.createTime = params.createTime;
    if ('icon' in params) p.query.icon = params.icon;
    if ('menuCode' in params) p.query.menuCode = params.menuCode;
    if ('menuId' in params) p.query.menuId = params.menuId;
    if ('menuName' in params) p.query.menuName = params.menuName;
    if ('menuType' in params) p.query.menuType = params.menuType;
    if ('orderNum' in params) p.query.orderNum = params.orderNum;
    if ('params' in params) p.query.params = params.params;
    if ('parentId' in params) p.query.parentId = params.parentId;
    if ('parentName' in params) p.query.parentName = params.parentName;
    if ('path' in params) p.query.path = params.path;
    if ('perms' in params) p.query.perms = params.perms;
    if ('query' in params) p.query.query = params.query;
    if ('remark' in params) p.query.remark = params.remark;
    if ('status' in params) p.query.status = params.status;
    if ('updateBy' in params) p.query.updateBy = params.updateBy;
    if ('updateTime' in params) p.query.updateTime = params.updateTime;
    if ('visible' in params) p.query.visible = params.visible;
    return ajax.ajax({
      ...opt,
      method: 'GET',
      url,
      ...p
    });
  }
}

export default new SysMenuControllerApi();