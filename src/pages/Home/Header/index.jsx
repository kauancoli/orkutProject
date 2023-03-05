import { Nav, NavItem } from '../../../components';

export const Header = () => {
  return (
    <header className="font-poppins flex items-center justify-center bg-white ">
      <Nav>
        <div className="flex px-12">
          <a href="/">
            <img src="logo-orkut.svg" />
          </a>
        </div>
        <div className="flex gap-10">
          <NavItem href="/#">Início</NavItem>
          <NavItem href="/#" isActive>
            Perfil
          </NavItem>
          <NavItem href="/#">Comunidades</NavItem>
          <NavItem href="/#">Jogos</NavItem>
        </div>
        <div className="flex gap-8 px-20">
          <label className="relative block">
            <span className="absolute inset-y-2.5 pl-2">
              <img src="Lupa.svg" className="h-5 w-5 fill-slate-300" />
            </span>
            <input
              placeholder="Pesquisar no Orkut"
              type="text"
              name="busca"
              className="px-10 py-2 text-base font-normal text-darkLight
                 placeholder:text-gray placeholder:text-sm
                 bg-input rounded-lg focus:outline-pink"
            />
          </label>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src="kayan.jfif"
            alt="Kauan Coli"
          />
          <span className="text-base text-darkLight font-normal">
            Kauan Coli
          </span>
          <img src="Down.svg" className="h-5 w-5 fill-pink py-0.5" />
        </div>
      </Nav>
    </header>
  );
};

export default Header;
