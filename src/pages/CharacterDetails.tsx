import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import CharacterDetailsBox from '../conponents/characters/CharacterDetailsBox';
import { fetchCharacterById, type Character } from '../utils/http';
import ErrorBlock from './../conponents/UI/ErrorBlock';
import LoadingIndicator from './../conponents/UI/Loadingindicator';
import PageFormat from '../conponents/UI/PageFormat';

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isError, error, isPending } = useQuery<Character>({
    queryKey: ['character-details', id],
    queryFn: () => fetchCharacterById(id!),  
    enabled: id !== undefined,              
  });

  if (isPending) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorBlock title="Fetching Error" message={(error as Error).message} />;
  }

  return (
    <PageFormat title="Character's Details">
      <CharacterDetailsBox data={data} />
    </PageFormat>
  );
};

export default CharacterDetails;
