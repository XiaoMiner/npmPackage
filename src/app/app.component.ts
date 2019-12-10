import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selArray: any[] = ['xiao', 'rocker', 'feller'];
  isShowToast: boolean = false;

  /**
   * 视图渲染数据完毕
   * @param status
   */
  forEndedHandle(status){
    if(status){
      console.log('循环数据渲染完毕!');
    }
  }
  /**
   * 按钮点击,显示toast
   */
  btnHandle(){
    this.isShowToast = true;
  }

  /**
   * toast在3s之后的状态
   */
  toastHandle(status){
    this.isShowToast = status;
  }
}
