import React from 'react';
import styled from 'styled-components';
// import Header from './Header';

const Contents = styled.div`
    overflow: auto;
    max-width: 100%;
    width: ${(props) => props.popupWidth};
    max-height: 100%;

    // @if ($min-width !=auto) {
    //   min-width: $min-width;
    // }
    // @if ($max-width !=auto) {
    //   max-width: $max-width;
    // }
    // height: $height;
    // @if ($min-height !=auto) {
    //   min-height: $min-height;
    // }
    // @if ($max-height !=auto) {
    //   max-height: $max-height;
    // }
    // @if ($contentsBottomPadding !=0) {
    //   &:after {
    //     display: block;
    //     padding-bottom: $contentsBottomPadding;
    //     content: "";
    //   }
    // }
`;
const Header = styled.div`
  position: absolute;
  top: -${(props) => props.headerHeight};
  left: -1px;
  width: 100%;
  height: ${(props) => props.headerHeight};
  border: 1px solid ${(props) => props.popupBorderColor};
  border-bottom: 1px solid #dde4ec;
  background: #fff;
  h2 {
    margin: 0;
    padding: 0 60px 0 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: ${(props) => props.headerHeight};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a {
    position: absolute;
    right: 0;
    top: 0;
    width: ${(props) => props.headerHeight};
    height: ${(props) => props.headerHeight};
    text-indent: -9999px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MDI3OTk0Yi0yYjI1LTJlNGMtYTQ4YS1iYzA2NDRkMGIzMzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzM1QTQyNDQ4NjUzMTFFOEI5NjNFOUIwNEYxNTk1NTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzM1QTQyNDM4NjUzMTFFOEI5NjNFOUIwNEYxNTk1NTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTY5MUEwNTc4MzRDMTFFOEJCQkVFNDlFQTgyRDk0RkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTY5MUEwNTg4MzRDMTFFOEJCQkVFNDlFQTgyRDk0RkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6WSLqQAAABB0lEQVR42pySaaqFMAyFmzrgNgWnDSnOrlNE8zhCoLe1vdfXP9WkOfky0DAMTESqLEtS/ziIx03MrKZpYtxVVb0Sm+f5jgOEhgEfMMDxhkRE8K/FUdc1neepxnHkX0gEQGw3iXlQpv3I9iNh0zQffm0/lDKXZXHIQHtdlyPySGQGwYeSpSdRFKmiKB5JvUISrLVWoMCKhKaqQ00FDRL9shpBIWl8lmWqbdvgNL2l2Uu6bRvv+/7YaC9R3/f3dMxy8jwn9Mm3Zw6RLJtvOvDbSRwiTAmPfCKSAGTSP0cImb6N2Fza4zjUuq78URp6EsdxkOTpdF3HSZLcwoSxpmn6WsQUQ/yfAAMAl6XEeJIUMXAAAAAASUVORK5CYII=") no-repeat center;
    &:active {
      background-color: color-shade(#fff);
    }
  }
`;
const Footer = styled.div`
    position: absolute;
    left: -1px;
    top: 100%;
    width: 100%;
    height: ${(props) => props.footerHeight};
    text-align: center;
    font-size: 0;
    border: 1px solid ${(props) => props.popupBorderThick};
    border-top: 0;
    background: #fff;
    button {
    display: inline-block;
    font-size: 16px;
    min-width: 140px;
    min-height: 40px;
    font-size: 16px;
    border: 0;
    border-radius: 2px;
    background: 0;
    &+button {
        margin-left: 10px;
    }
    &.fxCancel {
        color: #fff;
        background: #323232;
    }
    &.fxCancel {
        color: #fff;
        background: #323232;
        &:active {
        background: color-shade(#323232);
        }
    }
    &.fxConfirm {
        color: #000;
        border: 1px solid #000;
        &:active {
        background: color-shade(#fff);
        }
    }
    }
`;
const Dim = styled.i`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZERDY1MjUzODY1MzExRThCRDY3RjRDQkUyNjVEMzc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZERDY1MjU0ODY1MzExRThCRDY3RjRDQkUyNjVEMzc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkRENjUyNTE4NjUzMTFFOEJENjdGNENCRTI2NUQzNzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkRENjUyNTI4NjUzMTFFOEJENjdGNENCRTI2NUQzNzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5OnGDiAAAAD0lEQVR42mJgYGDwBQgwAABSAE5RZV5PAAAAAElFTkSuQmCC");
`;

const Position = styled.div`
    z-index: 2;
    position: relative;
    display: inline-block;
    max-width: 100%;
    min-width: 320px;
    max-height: 100%;
    text-align: left;
    border: 1px solid ${(props) => props.popupBorderColor};
    font-size: 15px;
    white-space: normal;
    vertical-align: middle;
    background: #fff;
    &:before {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      box-shadow: 0 2px 20px rgba(0, 0, 0, .4);
      content: "";
    }
    .hasHeader & {
        &:before {
            top: -${(props) => props.headerHeight};
        }
    }
    .hasFooter & {
        &:before {
            bottom: -${(props) => props.footerHeight};
        }
    }
`;
const PopupStyled = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  padding: ${(props) => props.popupOuterPadding};
  font-size: 0;
  white-space: nowrap;
  text-align: center;
  &.${(props) => props.openClass} {
    display: block;
  }
  &:before {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
  &::selection {
    background: 0;
  }
`;

export default class Popup extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            openClass: 'open',

            width: 'auto',

            headerHeight: 40,
            footerHeight: 70,
            popupOuterPadding: 20,
            popupBorderThick: 1,
            popupBorderColor: '#333'
        }
    }
    render() {
        // make Footer
        let button = [];
        for (var e in this.props.button) {
            button.push(<button key={e} className={e}>{this.props.button[e]}</button>)
        }
        const Footers = <Footer>{button}</Footer>

        
        return (
            <PopupStyled
                openClass={this.state.openClass}
                popupWidth={this.props.width ? this.props.width + 'px' : this.state.width}
                headerHeight={this.state.headerHeight + 'px'}
                footerHeight={this.state.footerHeight + 'px'}
                popupOuterPadding={this.state.popupOuterPadding + 'px'}
                popupBorderThick={this.state.popupBorderThick + 'px'}
            >
                <Position>
                    <Header
                        headerHeight={this.state.headerHeight + 'px'}
                        footerHeight={this.state.footerHeight + 'px'}
                        popupBorderColor={this.state.popupBorderColor}
                    >
                        <h2>{this.props.title}</h2>
                        <a href="#">팝업창 닫기</a>
                    </Header>
                    <Contents>
                        {this.props.children}
                        {/* {this.props.button} */}
                    </Contents>
                    {Footers}
                </Position>
                <Dim></Dim>
            </PopupStyled>
        );
    }
}

