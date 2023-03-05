export const MyProfile = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col items-center gap-5 bg-white py-8 px-14 rounded-2xl ">
        <img
          className="h-44 w-44 object-cover rounded-full border-4 border-pink"
          src="kayan.jfif"
          alt="Kauan Coli"
        />
        <span className="text-2xl text-darkLight font-semibold">
          Kauan Coli
        </span>
        <span className="text-lg text-darkLight font-normal">
          Solteiro, Brasil
        </span>
      </div>

      <div className="flex flex-col items-center bg-white py-4 px-14 rounded-2xl cursor-pointer ">
        <span className="text-lg text-pink font-semibold">
          Editar meu perfil
        </span>
      </div>
    </div>
  );
};

export default MyProfile;
