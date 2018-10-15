import React from 'react';
import styled from 'styled-components';
const makeClassName = (n) => {
    return btoa(Math.random()).substring(0,n);
    // return btoa(Math.random()).substring(0,n).toLowerCase();
};
const popupOn = makeClassName(7);
const hasScroll = makeClassName(7);
const hasHeader = makeClassName(7);
const hasFooter = makeClassName(7);
const positiveBtn = makeClassName(7);
const negativeBtn = makeClassName(7);
const normalBtn = makeClassName(7);

const Contents = styled.div`
    overflow: auto;
    max-width: 100%;
    width: ${(props) => props.popupWidth};
    height: ${(props) => props.popupHeight};
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
  top: -${(props) => props.headerHeight + 'px'};
  left: -1px;
  width: 100%;
  height: ${(props) => props.headerHeight + 'px'};
  border: 1px solid ${(props) => props.popupBorderColor};
  border-bottom: 1px solid #dde4ec;
  background: #fff;
  h2 {
    margin: 0;
    padding: 0 60px 0 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: ${(props) => props.headerHeight + 'px'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a {
    position: absolute;
    right: 0;
    top: 0;
    width: ${(props) => props.headerHeight + 'px'};
    height: ${(props) => props.headerHeight + 'px'};
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
    height: ${(props) => props.footerHeight + 'px'};
    text-align: center;
    font-size: 0;
    border: 1px solid ${(props) => props.popupBorderColor};
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
    &.${negativeBtn} {
        color: #fff;
        background: #323232;
        &:active {
            background: color-shade(#323232);
        }
    }
    &.${positiveBtn} {
        color: #000;
        border: 1px solid #000;
        &:active {
            background: color-shade(#fff);
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
    .${hasHeader} & {
        &:before {
            top: -${(props) => props.headerHeight + 'px'};
        }
    }
    .${hasFooter} & {
        &:before {
            bottom: -${(props) => props.footerHeight + 'px'};
        }
    }
    .${hasScroll} & {
        height: 100%;
    }
`;
const Popup = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  padding: ${(props) => props.popupOuterPadding + 'px'};
  font-size: 0;
  white-space: nowrap;
  text-align: center;
  &.${popupOn} {
    display: block;
  }
  &.${hasHeader} {
    padding-top: ${(props) => props.headerHeight + props.popupOuterPadding + 'px'};
  }
  &.${hasFooter} {
    padding-bottom: ${(props) => props.footerHeight + props.popupOuterPadding + 'px'};
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

export default class ClassPopup extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            bool: this.props.bool,
            openClass: 'open',

            width: 'auto',
            height: 'auto',

            headerHeight: 40,
            footerHeight: 70,
            popupOuterPadding: 20,
            popupBorderThick: 1,
            popupBorderColor: '#333'
        }
    }
    componentWillReceiveProps() {
        this.props.bool?this.toggle():this.toggle();
    }
    popupClass(e, b) {
        const PopupElem = document.querySelector('.'+Popup.styledComponentId);
        b?PopupElem.classList.add(e):PopupElem.classList.remove(e);
    }

    toggle(e) {
        this.setState({
            bool: !this.state.bool
        });
        if(!this.state.bool) {
            const PopupElem = document.querySelector('.'+Popup.styledComponentId);
            PopupElem.classList.add(popupOn);
            // this.popupClass(popupOn, !this.state.bool);
            const windowHeight = window.innerHeight;
            const HeightElem = document.querySelector('.'+Header.styledComponentId);
            const FooterElem = document.querySelector('.'+Footer.styledComponentId);
            // const PositiveElem = document.querySelector('.'+Position.styledComponentId);
            const contentsElem = document.querySelector('.'+Contents.styledComponentId);
            const contentsHeight = contentsElem.offsetHeight;
            const margin = (this.state.popupOuterPadding * 2) + this.state.headerHeight + this.state.footerHeight;
            const height = windowHeight - margin;

            (height < contentsHeight) && (PopupElem.classList.add(hasScroll));
            (HeightElem !== null) && (PopupElem.classList.add(hasHeader));
            (FooterElem !== null) && (PopupElem.classList.add(hasFooter));
        } else {
            const PopupElem = document.querySelector('.'+Popup.styledComponentId);
            // this.popupClass(popupOn, !this.state.bool);
            PopupElem.classList.remove(popupOn, hasScroll, hasHeader, hasFooter);
        };
        if(typeof e === 'function') {
            e();
        }
    }

    render() {
        // make Footer
        let header;
        let footer;
        if (this.props.title) {
            header = <Header
                headerHeight={this.state.headerHeight}
                popupBorderColor={this.state.popupBorderColor}
            >
                <h2>{this.props.title}</h2>
                <a href="#" onClick={this.toggle.bind(this)}>팝업창 닫기</a>
            </Header>;
        }
        if (this.props.button !== undefined) {
            let i = 0;
            let button = [];
            for (var e in this.props.button) {
                i++;
                let classname;
                let onclick;
                switch(e) {
                    case 'positive': 
                        classname = positiveBtn;
                        onclick = this.toggle.bind(this, this.props.button[e].callback);
                        break;
                    case 'negative': 
                        classname = negativeBtn;
                        onclick = this.toggle.bind(this, this.props.button[e].callback);
                        break;
                    default: 
                        classname = normalBtn;
                }
                button.push(<button key={'idx'+i} className={classname} onClick={onclick}>{this.props.button[e].text}</button>)
            }
            footer = <Footer
                footerHeight={this.state.footerHeight}
                popupBorderColor={this.state.popupBorderColor}
            >
                {button}
            </Footer>;
        };
        return (
            <Popup
                popupOuterPadding={this.state.popupOuterPadding}
                popupBorderThick={this.state.popupBorderThick}
                headerHeight={this.state.headerHeight}
                footerHeight={this.state.footerHeight}
            >
                <Position
                    headerHeight={this.state.headerHeight}
                    footerHeight={this.state.footerHeight}
                >
                    {header}
                    <Contents
                        popupWidth={this.props.width ? this.props.width + 'px' : this.state.width}
                        popupHeight={this.props.height ? this.props.height + 'px' : this.state.height}
                    >
                        {this.props.children}
                    </Contents>
                    {footer}
                </Position>
                <Dim onClick={this.toggle.bind(this)}></Dim>
            </Popup>
        );
    }
}