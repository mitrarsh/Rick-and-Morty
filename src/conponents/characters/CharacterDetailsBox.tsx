import type { Character } from "../../utils/http";
import ErrorBlock from "./../UI/ErrorBlock";

type CharacterDetailsBoxProps = {
  data?: Character | undefined;
};

const CharacterDetailsBox = ({ data }: CharacterDetailsBoxProps) => {
  return (
    <section className="character-card flex w-fit gap-[2rem] border-2 border-[#11B0C8] p-[2rem]  flex-col rounded-[1rem]">
      {data ? (
        <div className="flex  gap-[2rem]">
          <img className="rounded-[1rem] w-[20rem]" src={data.image} alt="" />
          <div className="details">
            <h3 className="text-[2rem] mb-[1rem] text-[#42B4CA]">
              {data.name}
            </h3>
            <p>Status: {data.status}</p>
            <p>species: {data.species}</p>
            <p>Gender: {data.gender}</p>
            <p>Origin: {data.origin.name}</p>
            {data.type ? <p> Type: {data.type}</p> : null}
          </div>
        </div>
      ) : (
        <ErrorBlock message="Character not found" />
      )}
    </section>
  );
};

export default CharacterDetailsBox;
