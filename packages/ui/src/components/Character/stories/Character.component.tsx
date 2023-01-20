import React from 'react';

import useGetSingleCharacter from '../../../hooks/useGetSingleCharacter';

import { Spinner } from '../../Spinner';

export interface ICharacterProps {
  id: number;
  priority?: boolean;
}

/**
 * Character component for displaying name and image for a character
 * @function Character
 * @param {id} number - ID of character to retrieve
 * @param {boolean} priority - Prioritize loading this image
 *
 * @returns {JSX.Element} - Rendered component
 */

export const Character = ({ id }: ICharacterProps) => {
  const { user, isLoading, isError } = useGetSingleCharacter(id);

  if (isError) return <h1>Feil under henting av API data</h1>;

  return (
    <>
      <section className="bg-white rounded-lg px-6 py-6 shadow-lg mt-4 mb-4 mx-auto">
        {isLoading ? <Spinner /> : null}
        {user ? (
          <>
            <h2 className="text-xl text-center font-bold p-2">{user.name}</h2>
            <img className="mx-auto p-2" src={user.image} alt={user.name} />
          </>
        ) : null}
      </section>
    </>
  );
};
