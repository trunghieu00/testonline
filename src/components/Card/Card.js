import React from 'react';
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";


const StyledCard = styled.div`
position: relative; 
box-shadow: 0px 0px 0px grey;
  -webkit-transition:  box-shadow .6s ease-out;
     box-shadow: .8px .9px 3px grey;
:hover{
    box-shadow: 1px 8px 20px grey;
    -webkit-transition:  box-shadow .10s ease-in;

}
`;
const CardImage = styled.div`
height: 400px;
border-radius: 8px;
width: 100%;

`;
const CardImg = styled.img`
display:block;
width: 100%;
height: 100%;
object-fit: cover;
border-radius: inherit;
`;
const CastContent = styled.div`
background-color: white;
width:370px ;
position: absolute;
left: 49%;
bottom:3% ;
transform: translate(-50%, 0);
z-index: 10;
border-radius: 10px;
padding: 20px;
display: flex;
justify-content:space-between;

`;



const Card = () => {
    return (
        <StyledCard> 
           <CardImage>
           <CardImg src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//News/1499962//laptop-20-800x450-2.jpg" alt=""/>
           </CardImage>
           
            <CastContent>
                
                    <h4>TOI 3D Customize E-commerce</h4>
                   <div>
                   <FaChevronRight /> 

                   </div>
                  
                
            </CastContent>
            
        </StyledCard>
    );
};

export default Card;