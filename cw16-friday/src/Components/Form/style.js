import styled from 'styled-components';
export const Wrapper =styled.div`
display:flex;
flex-direction:column;
align-items:baseline;
width:100%;

`
export const FormList = styled.form`
width:70%;
margin:auto auto;
display:flex;
flex-direction:column;
gap:5px;
box-sizing:border-box;
h1{
    margin:0;
    border-bottom:2px solid black
}

h3{
    margin:0;
    color:blue;
}
input , select{
    border-radius:5px;
    padding :5px 5px
}
input[type=submit]{
    width:15%;
}
.error-message{
    color:red;
    font-size:0.75rem;
    
}
`
export const Serialize = styled.div`
width:100%;
padding:0 40px;
position:relative;
left:160px;
p{
    font-size:0.7rem;
    width:100%;

}
`