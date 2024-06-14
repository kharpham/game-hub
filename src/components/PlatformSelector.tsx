import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useLookUpPlatform from "../hooks/useLookUpPlatform"

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId: number | undefined;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const {data} = usePlatforms();
  const chosenPlarform = useLookUpPlatform(selectedPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {chosenPlarform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
