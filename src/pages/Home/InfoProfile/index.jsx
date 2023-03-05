export const InfoProfile = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col gap-5 bg-white py-6 rounded-2xl  ">
        <div className="flex flex-col ">
          <span className="text-3xl text-darkLight font-semibold px-6">
            Boa tarde, Kauan Coli
          </span>
          <div className="relative px-9">
            <img src="Balao.svg" alt="Balão de Pensamentos" />
            <span className="absolute top-5 px-3 text-base font-normal select-none">
              Linguagens não morrem mas sim seus programadores.
            </span>
          </div>

          <div className="px-6 flex flex-row py-8">
            <div className="flex flex-col">
              <span className="text-base">Fãs</span>
              <div className="flex items-center">
                <img src="Star.svg" className=" h-5 w-5 fill-slate-300" />
                <span className="text-base opacity-50">85</span>
              </div>
            </div>

            <div className="flex flex-col px-9">
              <span className="text-base">Confiável</span>
              <div className="flex items-center">
                <img src="Smiley.svg" className=" h-5 w-5 fill-slate-300" />
                <img src="Smiley.svg" className=" h-5 w-5 fill-slate-300" />
                <span className="opacity-0">.</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-base">Legal</span>
              <div className="flex items-center">
                <img src="ThumbsUp.svg" className=" h-5 w-6 fill-slate-300" />
                <img src="ThumbsUp.svg" className=" h-5 w-6 fill-slate-300" />
                <img src="ThumbsUp.svg" className=" h-5 w-6 fill-slate-300" />
                <span className="text-base opacity-0">.</span>
              </div>
            </div>

            <div className="flex flex-col px-7">
              <span className="text-base">Sexy</span>
              <div className="flex items-center">
                <img src="Heart.svg" className=" h-5 w-5 fill-slate-300" />
                <img src="Heart.svg" className=" h-5 w-5 fill-slate-300" />
                <span className="text-base opacity-0">.</span>
              </div>
            </div>
          </div>

          <div className="px-6 flex flex-col gap-2">
            <div>
              <span className="text-base text-gray">Relacionamento: </span>
              <span className="text-base px-2 text-darkLight">Solteiro </span>
            </div>
            <div>
              <span className="text-base text-gray">Aniversário:: </span>
              <span className="text-base  text-darkLight px-2 ">
                10 de Agosto
              </span>
            </div>
            <div>
              <span className="text-base text-gray">Idade: </span>
              <span className="text-base text-darkLight px-2 ">19 </span>
            </div>
            <div>
              <span className="text-base text-gray">Interesses no Orkut: </span>
              <span className="text-base text-darkLight px-2 ">Jogos </span>
            </div>
            <div>
              <span className="text-base text-gray">Quem sou eu: </span>
              <span className="text-base text-darkLight px-2 ">
                Programador
              </span>
            </div>
            <div>
              <span className="text-base text-gray">Filhos: </span>
              <span className="text-base text-darkLight px-2 ">Não </span>
            </div>
            <div>
              <span className="text-base text-gray">Sexo: </span>
              <span className="text-base text-darkLight px-2 ">Masculino </span>
            </div>
            <div>
              <span className="text-base text-gray">Fumo: </span>
              <span className="text-base text-darkLight px-2 ">Não </span>
            </div>
            <div>
              <span className="text-base text-gray">Bebe: </span>
              <span className="text-base text-darkLight px-2 ">
                Depende do dia
              </span>
            </div>
            <div>
              <span className="text-base text-gray">Moro: </span>
              <span className="text-base text-darkLight px-2 ">
                São Vicente
              </span>
            </div>
            <div>
              <span className="text-base text-gray">País: </span>
              <span className="text-base text-darkLight px-2 ">Brasil </span>
            </div>
            <div>
              <span className="text-base text-gray">Cidade Natal: </span>
              <span className="text-base text-darkLight px-2 ">Salvador </span>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-base text-gray">Músicas: </span>
              <span className="text-sm text-darkLight px-2 py-2 bg-white border border-pink rounded-3xl cursor-pointer ">
                Trap
              </span>
              <span className="text-sm text-darkLight px-2 py-2 bg-white border border-pink rounded-3xl cursor-pointer ">
                Rap
              </span>
              <span className="text-sm text-darkLight px-2 py-2 bg-white border border-pink rounded-3xl cursor-pointer ">
                Indie
              </span>
              <span className="text-sm text-pink font-semibold cursor-pointer">
                Ver todos
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-base text-gray">Filmes: </span>
              <span className="text-sm text-darkLight px-2 py-2 bg-white border border-pink rounded-3xl cursor-pointer ">
                Koe no Katachi
              </span>
              <span className="text-sm text-darkLight px-2 py-2 bg-white border border-pink rounded-3xl cursor-pointer ">
                Interestelar
              </span>
              <span className="text-sm text-pink font-semibold cursor-pointer">
                Ver todos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProfile;
