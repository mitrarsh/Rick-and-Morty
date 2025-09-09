type CharacterCardsProps = {
    name: string;
    image: string;
}

const CharacterCard = ({name,image}: CharacterCardsProps) => {
  return (
        <div className=" items-center gap-[1rem] character-card flex justify-center align-middle text-center h-[15rem] w-[20rem] border-2 border-[#11B0C8] p-[2rem]  flex-col rounded-[1rem]" >
          <img className="rounded-[1rem] w-[10rem]" src={image} alt="" />
          <h2>
            {name}
          </h2>
        </div>
  )
}

export default CharacterCard