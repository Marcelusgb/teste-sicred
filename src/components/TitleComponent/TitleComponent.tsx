import React from 'react';


import { 
    TitleBox, 
} from './style'

const TitleComponent = () =>{
  return (
    <TitleBox>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png' alt='logo marvel' />
      <p>Aqui você acha seus quadrinhos da marvel</p>
    </TitleBox>
  );
}


export default TitleComponent;