import PageButton from "./PageButton";

function Header() {
  return (
    <div className="flex justify-between px-32 py-4">
      <p className="text-2xl">Hello!</p>
      <div className="flex space-x-2">
        <PageButton thisPage="home">About Me</PageButton>
        <PageButton thisPage="resume">Résumé</PageButton>
      </div>
    </div>
  );
}

export default Header;
