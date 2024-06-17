import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useLookUpPlatform from "../hooks/useLookUpPlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);
  const { data } = usePlatforms();
  const chosenPlarform = useLookUpPlatform(platformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {chosenPlarform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
