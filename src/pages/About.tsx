import React from "react";
import { Link, useSearchParams } from "react-router-dom";

interface ISearchInput {
  filter: string | undefined;
}

export const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setOrder = (order: "asc" | "desc", local: "in" | "out") => {
    searchParams.set("order", order);
    searchParams.set("local", local);
    setSearchParams(searchParams);
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let search: any = {} as ISearchInput;
    if (event.target.value) {
      search = {
        filter: event.target.value,
      };
    } else {
      search.filter = undefined;
    }

    setSearchParams(search, { replace: true });
  };

  return (
    <div>
      {/* Filtro: {searchParams.get('filter')} */}
      <input
        // @ts-ignore
        value={searchParams.filter}
        className="border-2"
        onChange={searchHandler}
        placeholder="Search"
      />
      <br />
      Ordem: {searchParams.get("order")}
      <hr />
      <div id="buttonContainer" className="py-4 pl-4">
        <button
          className="mr-4 p-1 border-2 border-rose-500"
          onClick={() => setOrder("asc", "in")}
        >
          ASC, IN
        </button>
        <button
          className="mr-4 p-1 border-2 border-rose-500"
          onClick={() => setOrder("desc", "out")}
        >
          DESC, OUT
        </button>
      </div>
      <h3 className="py-2">Página Sobre</h3>
      <ul>
        <li>
          <Link to="/sobreMOD/lucas">Lucas</Link>
        </li>
        <li>
          <Link to="/sobreMOD/pedro">Pedro</Link>
        </li>
      </ul>
    </div>
  );
};
