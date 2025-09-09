
type PagwFormatProps={
    title:string,
    children: React.ReactNode
}

const PageFormat = ({ title, children }:PagwFormatProps) => {
  return (
    <>
      <h1 className="text-[2rem] text-[#BFDE42]">{title}</h1>
      <main className=" flex flex-col gap-[2rem] w-full align-middle items-center mt-[2rem]">
        {children}
      </main>
    </>
  );
};

export default PageFormat;
