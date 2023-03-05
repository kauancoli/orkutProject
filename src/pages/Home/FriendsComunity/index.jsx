export const Friends = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col items-center bg-white py-3 rounded-2xl ">
        <div className="flex items-center px-10 gap-14">
          <span className="text-base">Amigos (248)</span>
          <span className="text-sm text-pink font-semibold cursor-pointer">
            Ver todos
          </span>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-6 py-4">
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="kayan.jfif"
            />
            <span className="block py-1">Kauan</span>
          </div>
          <div className="text-center cursor-pointer ">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="kayan.jfif"
            />
            <span className="block py-1">Jorge</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="kayan.jfif"
            />
            <span className="block py-1">Matheus</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="kayan.jfif"
            />
            <span className="block py-1">Messias</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="kayan.jfif"
            />
            <span className="block py-1">Helio</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="kayan.jfif"
            />
            <span className="block py-1">Lucas</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="kayan.jfif"
            />
            <span className="block py-1">Hugo</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="kayan.jfif"
            />
            <span className="block py-1">Fernando</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="kayan.jfif"
            />
            <span className="block py-1">Geovani</span>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="flex flex-col items-center bg-white py-5 rounded-2xl ">
        <div className="flex items-center px-10 gap-14">
          <span className="text-base">Comunidade (42)</span>
          <span className="text-sm text-pink font-semibold cursor-pointer">
            Ver todos
          </span>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-6 py-4">
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="carros.jpg"
            />
            <span className="block py-1">Carros</span>
          </div>
          <div className="text-center cursor-pointer ">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="desenhos.jpg"
            />
            <span className="block py-1">Desenhos</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="fofos.jpg"
            />
            <span className="block py-1">Fofos</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="anime.jpg"
            />
            <span className="block py-1">Animes</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="leitura.jpg"
            />
            <span className="block py-1">Leitura</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="meuovo.jpg"
            />
            <span className="block py-1">Meu ovo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
