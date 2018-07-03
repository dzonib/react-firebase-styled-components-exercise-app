import styled from 'styled-components';


export const Title = styled.h1 `
  font-size: 2em;
  color: black;
  text-shadow: 0 2px 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Form = styled.form `
  text-align: center;
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  grid-gap: 40px;
  background: white;
  margin-top: 50px;
`
export const InputAndLabelContainer = styled.div `
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1, 34px);
  margin: 10px 0;
  
`

export const Button = styled.button `
  border-radius: 4px;
  background: #D2691E;
  color: white;
  border: none;
  width: 200px;
  height: 30px;
  margin: 20px auto;
`

export const Select = styled.select `
  outline: none;
  ${'' /* color: #D2691E; */}
  background: #f4f4f4;
  border: 1px solid darkgoldenrod;
  
  &:focus {
    border: 1.3px solid darkgoldenrod;
    box-shadow: -1px -1px 10px darkgoldenrod;
  }


`
export const Input = styled.input `
  background: #f4f4f4;
  border: 1px solid darkgoldenrod;
  border-radius: 2px;
  display: inline-block;
  outline: none;
  font-size: 16px;


  &:focus {
    border: 1.3px solid darkgoldenrod;
    box-shadow: -1px -1px 10px darkgoldenrod;
  }
`
export const Label = styled.label `
  text-align: center;
  margin-right: 20px;
  border-radius: 4px;
  display: inline-block;
  background: darkgoldenrod;
  color: white;
  display: grid;
  align-items: center;
`

export const TextArea = styled.textarea `
  background: #f4f4f4;
  border: 1px solid darkgoldenrod;
  border-radius: 2px;
  display: inline-block;
  outline: none;

  &:focus {
    border: 1.3px solid darkgoldenrod;
    box-shadow: -1px -1px 10px darkgoldenrod;
  }
`