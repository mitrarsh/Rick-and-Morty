type CharacterCardsProps = {
    name: string;
}

const CharacterCard = ({name}: CharacterCardsProps) => {
  return (
        <div className="character-card flex justify-center align-middle text-center h-[8rem] w-[20rem] border-2 border-[#11B0C8] p-[2rem]  flex-col rounded-[1rem]" >
          <h2>
            {name}
          </h2>
        </div>
  )
}

export default CharacterCard