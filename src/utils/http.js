async function fetchCharacters(){
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) {
        const error = new Error('An error occured while fetching characters');
    }
}