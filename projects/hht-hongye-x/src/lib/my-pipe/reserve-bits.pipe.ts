import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xReserveBits'
})
export class ReserveBitsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // 当前值

    // 判断当前值是不是大于1024
    if(value > 1024 || value == 1024){ // 字节B判断
      const kbValue = value / 1024;
      // 取整判断
      const intKbValue = Math.floor(kbValue);
      if(intKbValue > 1024 || intKbValue == 1024){ // 千字节kb判断
        const mbValue = kbValue / 1024;
        return this.digitsReserved(mbValue) + 'MB';
      }else {
        return this.digitsReserved(kbValue) + 'KB'
      }
    }else { // 小于1024B
      return this.digitsReserved(value) + 'B';
    }
  }

  digitsReserved(value){
    const stringValue = String(value);
    const pointIndex = stringValue.indexOf('.');
    if(pointIndex < 0){ // 没有小数点
      return stringValue;
    }else {
      const array = stringValue.split('.');
      if(array[1].length > 2){
        return array[0] + '.' + array[1].slice(0, 2);
      }else { // 说明只有一或者两位直接就返回
        return stringValue;
      }
    }
  }

}
