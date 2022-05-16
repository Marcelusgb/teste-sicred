import React from 'react';


import { Card } from './style'

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

  interface CardProps {
    comic: Comic;
  }
  



const Cards = ({ comic }: CardProps) =>{


  return (
    <Card>
        <div className='card-box'>
          <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={`${comic.title} banner`}
          />
          <div>
              <strong>{comic.title}</strong>
          </div>
        </div>
        <div className='card-hover'>
          <strong>{comic.title}</strong>
          <div>
            <button>ver detalhes</button>
          </div>
          <label>
            <input type="checkbox" />
            selecionar
          </label>
        </div>
    </Card>
  );
}


export default Cards;