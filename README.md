# flexPopup

### 사용방법 How to use
1. 선언

```javascript
var reservationGuide = new fpPopup('reservationGuide');
reservationGuide.open(); //팝업오픈

document.querySelector('.eventCall').onclick = function () {
    reservationGuide.open(); //버튼에 오픈 이벤트 
}
document.querySelector('.fpCloseBtn').onclick = function () {
    reservationGuide.close(); // 버튼에 클로즈 이벤트 
}
document.querySelector('.fpConfirm').onclick = function () {
    reservationGuide.close(); // 버튼에 클로즈 이벤트 
}
```

1. onclick

```html
<!--var reservationGuide = new fpPopup('reservationGuide');-->
<a class="fpCloseBtn" href="#" onclick="reservationGuide.cloce();">팝업창 닫기</a>
<button class="fpCancel" onclick="reservationGuide.cloce();">lorem</button>


```
[jsfiddle's demo](https://jsfiddle.net/uiwwnw/23nv17yz/)

#### flexPopup v0.1.0 
#### http:/github.com/uiwwnw/flexPopup/
#### copyright uiwwnw
