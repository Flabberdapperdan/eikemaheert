export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-center w-full h-full">
        <div
          id="title-wrapper"
          className=" bg-linear-to-r/srgb from-indigo-500 to-teal-400"
        >
          <h1 className="font-serif color-white">Eikemaheert Groente</h1>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
