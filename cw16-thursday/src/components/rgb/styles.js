import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items:center;
gap:50px;
`

export const ColorDiv = styled.div`
display:flex;
align-items:start;
flex-direction:column;
width:200px;
gap:10px;
border-radius: 5px;
`
export const Text = styled.p`
color: ${({color})=>color};
border-top:1px solid blue;
border-bottom: 1px solid blue;
font-weight:bold;
`
export const Button=styled.button`
border-radius:5px;
border:1px solid black;
padding:5px 10px;
width:100%;
font-size:28px;
`
export const Content= styled.div`
color: ${({color})=>color};
padding:20px 30px;
border-radius:5px;
`