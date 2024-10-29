import './App.css'
// import Card from './card/Card'
import styled, {createGlobalStyle} from "styled-components";
// https://styled-components.com/
// NPM I STYLED-COMPONENTS

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h2{
    color: pink;
  }
`

const StyledButton = styled.button`
  /* background-color: ${props => {
    if(props.variant === "primary") return "rgb(95, 201, 68)";
    if(props.variant === "secondary") return "rgb(68, 148, 201)";
    return 'white'
  }
  }; */
  border: none;
  color: black;
  /* background-color: ${props => props.primary ? "rgb(95, 201, 68)" : "white"};
  border: none; */
  /* color: ${props => (props.variant === 'primary' || props.variant === 'secondary') ? "white" : "#000000"}; */
  /* color: ${props => props.primary ? "white" : "#45a049"}; */
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;

  /* &:hover{
    background-color: ${props => props.primary ? "white" : "#45a049"};
    color: ${props => !props.primary ? "white" : "#45a049"};
  } */
`
// extension
const AlertButton = styled(StyledButton)`
  background-color: ${props => props.disabled ? "#472e2e" : "red"};
  &:hover{
      background-color: #860a0a;
    } 
`

const SuccessButton = styled(StyledButton)`
  background-color: #24902e;
  &:hover{
      background-color: #177520;
    } 
`

const PrimaryButton = styled(StyledButton)`
  background-color: #246590;
  &:hover{
      background-color: #195b87;
    }
`
// attrs

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ccc;

  h2{
    color: #333;
  }

  p{
    color: #666
  }
`

// mixins
const Link = styled.a`
  ${StyledButton}
  color: lavander;
`

const Input = styled.input.attrs(props =>( {
  type: props.type || 'text', 
  placeholder: props.placeholder || 'enter your text'
}))`
  padding: 10px;
  border-radius: 5px;
`


function App() {

  return (
    <>
    <GlobalStyle/>
    <Input/>
    <Input type='number' placeholder='test'/>
    <Card>
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem, maiores nisi aliquam, corrupti consequuntur ipsum obcaecati aspernatur quaerat a omnis odit reprehenderit sapiente praesentium! Quo sapiente adipisci quaerat excepturi.</p>
    </Card>
    <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem, maiores nisi aliquam, corrupti consequuntur ipsum obcaecati aspernatur quaerat a omnis odit reprehenderit sapiente praesentium! Quo sapiente adipisci quaerat excepturi.</p>
    <AlertButton>Alert Button</AlertButton>
    <PrimaryButton>Alert Button</PrimaryButton>
    <SuccessButton>Alert Button</SuccessButton>
    {/* <StyledButton variant="primary">
      Primary
    </StyledButton>
    <StyledButton variant="secondary">
      Secondary
    </StyledButton>
    <StyledButton>
      Default
    </StyledButton> */}
    {/* <StyledButton primary>
      Click me!
    </StyledButton> */}
    {/* <Card/> */}
    {/* style={{backgroundColor: 'blue'}} en linea */}
    {/* <button className='button'>Click me!</button>
    <p className='p'>desde app</p> */}
    </>
  )
}

export default App
