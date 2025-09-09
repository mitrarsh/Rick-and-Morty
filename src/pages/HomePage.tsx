
import CharactersList from '../conponents/characters/CharactersList'

const HomePage = () => {
  return (
    <>
      <h1 className='text-[2rem] align-'>Characters' List</h1>
      <main className=' flex flex-col gap-[2rem] w-full align-middle items-center mt-[2rem]'>
        <CharactersList/>
      </main>
    </>
  )
}

export default HomePage