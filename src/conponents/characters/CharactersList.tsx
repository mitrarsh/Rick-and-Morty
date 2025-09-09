import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../../utils/http'
import LoadingIndicator from './../UI/LoadingIndicator';
import ErrorBlock from './../UI/ErrorBlock';
import type { Character } from '../../utils/http';
import type { Info } from '../../utils/http';

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

        <ul>
            {data?.results.map((char)=>(
                <li key={char.id}>
                    <h2>{char.name}</h2>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default CharactersList