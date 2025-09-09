export async function fetchCharacters():Promise<{ info: Info; results: Character[] }>{
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) {
        const error = new Error('An error occured while fetching characters');
        throw error;
    }
    return await res.json();
}

export async function fetchCharacterById(id:string):Promise<Character>{
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!res.ok) {
        const error = new Error('An error occured while fetching the character');
        throw error;
    }
    return await res.json();
}

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type Character = {
  id: number; 
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string};
  image: string;
};
