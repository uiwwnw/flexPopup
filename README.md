# react-flexpopup

## 설명
react-flexpopup은
어떤크기든 사용자가 이용할 수 있는 크기로 팝업을 제공합니다.
그 기능을 구현하는데
최소한의 스크립트만을 이용합니다.

resize, scroll등의 높은 리소스사용 이벤트를 최소화하고
style만으로 구현한 팝업입니다.

오픈할때 스크롤생성을 위한 이벤트가 작동하고,
리사이즈할때 컨텐츠의 높이를 바꿔넣어줍니다.

그리고 아무 동작없이 반응형하는 팝업을 유지할 수 있습니다.

## 사용방법 How to use
1. import react-popup
`import Popup from './components/react-flexpopup';`

1. use it

```html
<Popup bool={true}>
    <h3>가나다</h3>
    <p>dddsdss</p>
</Popup>

```

1. option

```html
<Popup 
    bool={this.state.testPopup} 
    title="popup title" 
    button={{'positive': {'text': 'YES', 'callback': function(){alert('close popup')}}, 'negative': {'text': 'NO', 'callback': function(){alert('close popup too')}}}}
>
    <h3>가나다</h3>
    <p>dddsdss</p>
</Popup>
```

[jsfiddle's demo](https://jsfiddle.net/uiwwnw/23nv17yz/embedded/result/#Result/)

## AUTHOR

uiwwnw &lt;[uiwwnw@icloud.com](mailto:uiwwnw@icloud.com)&gt;

## LICENSE

[MIT](https://uiwwnw.mit-license.org)

