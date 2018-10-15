# react-popup

## 사용방법 How to use
1. import react-popup
`import Popup from 'react-flexpopup';

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

[jsfiddle's demo](https://jsfiddle.net/uiwwnw/23nv17yz/)

## AUTHOR

uiwwnw &lt;[uiwwnw@icloud.com](mailto:uiwwnw@icloud.com)&gt;

## LICENSE

[MIT](https://uiwwnw.mit-license.org)

