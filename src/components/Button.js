import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'
import React from 'react'
import ReactDOM from 'react-dom'
import styled, {createGlobalStyle} from 'styled-components'
import {AwesomeButton} from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'


const Style = createGlobalStyle`
  .aws-btn {
    --button-default-height: 51px;
    --button-default-font-size: 14px;
    --button-default-border-radius: 2px;
    --button-horizontal-padding: 20px;
    --button-raise-level: 4px;
    --button-hover-pressure: 1;
    --transform-speed: 0.175s;
    
    --button-primary-color: #9f62d9;
    --button-primary-color-dark: #470085;
    --button-primary-color-light: #470085;
    --button-primary-color-hover: #9f62d9;
    --button-primary-color-active: #9f62d9;
    --button-primary-border: none;

    --button-secondary-color: #f2f6f9;
    --button-secondary-color-dark: red;
    --button-secondary-color-light: #1e88e5;
    --button-secondary-color-hover: #e1eaf1;
    --button-secondary-border: 2px solid #1e88e5;
    
    --button-anchor-color: #0e4f88;
    --button-anchor-color-dark: #072743;
    --button-anchor-color-light: #ffffff;
    --button-anchor-color-hover: #0d4a7f;
    --button-anchor-border: none;

    &__content {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`

const Wrapper = styled('div')`
  display: grid;
  background-color: #FFFFFF;

  & > * {
    margin: auto;
  }
`

const handleVibrate = () => {
  window.navigator.vibrate(800)
}

const Button = (props) => {
    return (
        <>
          <Style />
          <Wrapper>
            <AwesomeButton action={handleVibrate} style = {{width: '100%'}}>{props.location}</AwesomeButton>
          </Wrapper>
        </>
      )
}

export default Button;
