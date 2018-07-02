import styled from 'styled-components';


export const Form = styled.form `
display: grid;
align-items: center;
align-content: center;
justify-content: center;
  font-family: 'Roboto', sans-serif;
  background: white;
  margin-top: 50px;
`
export const InputAndLabelContainer = styled.div `
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1, minmax(30px, 30px));
  justify-content: stretch;
  margin: 10px 0;
`

export const Button = styled.button `
  border-radius: 4px;
  background: #D2691E;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
`

export const Select = styled.select `
  outline: none;
  color: #D2691E;
  background: #FAFAD2;
  
  &:focus {
    border: 1.3px solid darkgoldenrod;
    box-shadow: -1px -1px 10px darkgoldenrod;

  }
`
export const Input = styled.input `
  color: #D2691E;
  border: 1px solid darkgoldenrod;
  border-radius: 2px;
  display: inline-block;
  outline: none;

  &:focus {
    border: 1.3px solid darkgoldenrod;
    box-shadow: -1px -1px 10px darkgoldenrod;
  }
`
export const Label = styled.label `
  margin-right: 20px;
  border-radius: 4px;
  display: inline-block;
  background: darkgoldenrod;
  color: white;
`

export const TextArea = styled.textarea `
    color: #D2691E;
  border: 1px solid darkgoldenrod;
  border-radius: 2px;
  display: inline-block;
  outline: none;

  &:focus {
    border: 1.3px solid darkgoldenrod;
    box-shadow: -1px -1px 10px darkgoldenrod;
  }
`