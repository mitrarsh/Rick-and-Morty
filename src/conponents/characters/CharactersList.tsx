import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../../utils/http'
import LoadingIndicator from './../UI/LoadingIndicator';
import ErrorBlock from './../UI/ErrorBlock';
import type { Character } from '../../utils/http';
import type { Info } from '../../utils/http';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharactersList = () => {
    

    const {data, isPending, isError, error}= useQuery<{info: Info; results:Character[]}>({
        queryKey: ['characters'],
        queryFn: fetchCharacters
    })

    if(isPending){
        return <LoadingIndicator/>
    }
    if(isError){
        return <ErrorBlock title="Fetching Error"  message={error.message}/>
    }

  return (
    <main>

        <div className=' grid grid-cols-4 gap-[2rem] w-full align-middle items-center mt-[2rem] mb-[2rem]'> 
            {data?.results.map((char)=>(
                <Link to={`/character-details/${char.id}`} key={char.id}>
                    <CharacterCard name={char.name}/>
                </Link>
            ))}
        </div>
    </main>
  )
}

export default CharactersList