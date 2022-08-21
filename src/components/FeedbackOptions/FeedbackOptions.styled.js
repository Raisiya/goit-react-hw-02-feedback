import styled from "styled-components";

export const Button = styled.button`
margin: 5px;
font-size: medium;
text-align: center;
width: 70px;
height: 45px;
background-color: #00bcd469;
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.none};
cursor: pointer;
`