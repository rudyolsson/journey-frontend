import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
    font-family: ${props => props.theme.fontFamily};
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: button;
    text-transform: none;
    overflow: visible;
    font: inherit;
    margin: 0;
`;
export default function Button({onClick, children, backgroundColor, color, border }) {
    const bgColor = backgroundColor ? backgroundColor : 'inherit';
    const clr = color ? color : '#000000';
    const brdr = border ? `1px solid ${border}` : '';

    return (
        <Btn onClick={onClick} style={{
            backgroundColor: bgColor, 
            color: clr, 
            border: brdr,
            }}>
            {children}
        </Btn>
    )
}
