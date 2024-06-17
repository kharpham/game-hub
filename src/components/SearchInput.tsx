import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
const SearchInput = () => {
  const setSearch = useGameQueryStore((s) => s.setSearch);
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          setSearch(searchRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search games... "
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
