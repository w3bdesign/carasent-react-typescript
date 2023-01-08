import Image from 'next/image';

import useGetSingleCharacter from '../../hooks/useGetSingleCharacter';

import { Spinner } from '../Spinner';

interface ICharacterId {
  id: number;
}

/**
 * Character component for displaying name and image for a character
 * @function Character
 * @param {id} number - ID of character to retrieve
 *
 * @returns {JSX.Element} - Rendered component
 */

export const Character = ({ id }: ICharacterId) => {
  const { user, isLoading, isError } = useGetSingleCharacter(id);

  if (isError) return <h1>Feil under henting av API data</h1>;

  return (
    <>
      <section className="bg-white rounded-lg px-6 py-6 shadow-lg mt-4 mb-4 mx-auto">
        {isLoading ? <Spinner /> : null}
        {user ? (
          <>
            <h2 className="text-xl text-center font-bold p-2">{user.name}</h2>
            <Image
              className="mx-auto p-2"
              src={user.image}
              alt={user.name}
              width="200"
              height="200"
              priority
            />
          </>
        ) : null}
      </section>
    </>
  );
};
