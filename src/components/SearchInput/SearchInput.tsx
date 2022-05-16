/* eslint-disable @typescript-eslint/no-redeclare */
import React, {  useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../Card/Card";

import { 
    InputComponent 
} from "./style";



interface Comic {
    id: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    title: string;
    description: string;
    creators: {
      items: [{ name: string }];
    };
    characters: {
      items: [{ name: string }];
    };
    pageCount: number;
  }


const SearchInput = () =>{
    const [comics, setComics] = useState<Comic[]>([]);
    const [text, setText] = useState('');



    useEffect(() => {
      async function loadData(){
        if (text) {
          setComics([]);
          api.get(`/comics?offset=${text}&titleStartsWith=${text}`)
              .then(response => {
                setComics(response.data.data.results);
                console.log(response)
              }
          )
        }
      }
        
        loadData();
        
    }, [text]);


    
 
  return (
    <InputComponent>
        <input
          placeholder="Buscar pelo nome do quadrinho"
          value={text}
          onChange={(search) => setText(search.target.value)}
        />
        <div className='lista'>
            {comics.map((comic: Comic) => (
                <div key={comic.id}>
                  <Card
                    key={comic.id}
                    comic={comic}
                    />
                </div>
            ))}
            
        </div>
    </InputComponent>
    
  );
}


export default SearchInput;


