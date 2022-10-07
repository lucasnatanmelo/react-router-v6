import { useNavigate, useParams, useLocation } from "react-router-dom";

export const AboutItem = () => {
  const params = useParams();
  const navigate = useNavigate();

  const search = useLocation().search;
  console.log({ search });

  const newSearch = new URLSearchParams(search).get("qq");
  console.log({ newSearch });

  function handleBackButton() {
    navigate(-1); //[-1, -2, -3....] - Volta para a "n" página anterior
  }
  function handleHomeButton() {
    navigate("/");
  }
  function handleFulanoPageButton() {
    let name: string = "fulano";

    navigate(`sobre/${name}`);
  }

  return (
    <div>
      Página Sobre {params.slug?.toUpperCase()} ({params.slug?.length} letras)
      <br />
      <div id="buttonContainer" className="py-4 pl-4">
        <button
          className="mr-4 p-1 border-2 border-rose-500"
          onClick={handleBackButton}
        >
          Voltar
        </button>
        <button
          className="mr-4 p-1 border-2 border-rose-500"
          onClick={handleHomeButton}
        >
          Home
        </button>
        <button
          className="mr-4 p-1 border-2 border-rose-500"
          onClick={handleFulanoPageButton}
        >
          Fulano Page
        </button>
      </div>
    </div>
  );
};
