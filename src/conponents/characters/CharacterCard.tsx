type CharacterCardsProps = {
    name: string;
}

const CharacterCard = ({name}: CharacterCardsProps) => {
  return (
        <div className="character-card border-2 border-[#11B0C8] p-[2rem] flex flex-col w-fit rounded-[1rem]" >
          <h2>
            {name}
          </h2>
        </div>
  )
}

export default CharacterCard