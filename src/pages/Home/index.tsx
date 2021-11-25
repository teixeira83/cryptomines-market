import React, { useEffect, useState } from 'react';

import { MarketTable } from '../../components';

import { market } from '../../services/market';

export const Home: React.FC = () => {
  const [charactersOnSale, setCharactersOnSale] = useState([]);

  useEffect(() => {
    const getCall = async () => {
      const allCharacters = await market.getAll();

      console.log(allCharacters.data);
    };

    getCall();
  }, []);

  return <MarketTable />;
};
