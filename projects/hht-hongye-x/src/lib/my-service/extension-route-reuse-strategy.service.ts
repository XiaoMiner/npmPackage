import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ExtensionRouteReuseStrategyService implements RouteReuseStrategy{

  public static handlers: { [key: string]: DetachedRouteHandle } = {};
  constructor() { }
  // 是否缓存[离开路由时触发]
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // keep 表示是否进行缓存
    if(!route.data.keep){
      return false;
    }

    return true;
  }

  // 缓存组件[离开路由时触发]
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if(!ExtensionRouteReuseStrategyService.handlers.hasOwnProperty(this.getRouteUrl((route)))){// 是否含有某个属性
      ExtensionRouteReuseStrategyService.handlers[this.getRouteUrl(route)] = handle;
    }
  }

  // 是否还原[进入路由时触发]
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!ExtensionRouteReuseStrategyService.handlers[this.getRouteUrl(route)];
  }

  // 还原路由[进入路由时触发]
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return ExtensionRouteReuseStrategyService.handlers[this.getRouteUrl(route)];
  }

  // 是否复用路由[进入路由时触发]
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    if(!future.routeConfig){
      return future.routeConfig == curr.routeConfig;
    }
    if(curr.data.reloadCurrRoute == true){ // reloadCurrRoute -点击同意路由的处理 表示可以不复用路由,不做缓存 刷新页面
      return false;
    }
    return future.routeConfig == curr.routeConfig && JSON.stringify(future.params) == JSON.stringify(curr.params);
  }

  private getRouteUrl(route: ActivatedRouteSnapshot) {
    // id 表示区分默认路由和指定路由的标识。
    if(route.data.id){
      return this.sliceQuestionSymbol(route['_routerState'].url)
        + '_' + (route.routeConfig.loadChildren || route.data.id);
    }else {
      return this.sliceQuestionSymbol(route['_routerState'].url)
        + '_' + (route.routeConfig.loadChildren || route.routeConfig.component.toString().split('(')[0].split(' ')[1] );
    }


  }

  private sliceQuestionSymbol(url){
    if(url.indexOf('?') != -1){// 表示有?字符存在
      return url.split('?')[0].replace(/\//g, '_');
    }else {
      return url.replace(/\//g, '_');
    }
  }
}
