import React from 'react';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import TitleComponent from '../components/TitleComponent/TitleComponent';



import { 
    HomeComponent, 
} from './style';

const Home = () =>{
  return (
    <HomeComponent>
      <Header />
      <TitleComponent />
      <SearchInput />
      
    </HomeComponent>
  );
}


export default Home;