import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiHouseSimpleLight } from "react-icons/pi";
import { SiDatabricks } from "react-icons/si";
import { Options } from "./Menu";
const OptionsMenu: React.FC = () => {
  return (
    <Options>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HiOutlineMenuAlt2 />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>
            <PiHouseSimpleLight />
          </MenuItem>
          <MenuItem>
            <SiDatabricks />
          </MenuItem>
          <MenuItem>
            <CiDeliveryTruck />
          </MenuItem>
        </MenuList>
      </Menu>
    </Options>
  );
};

export default OptionsMenu;
