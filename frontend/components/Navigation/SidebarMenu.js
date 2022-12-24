import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  HiChartPie,
  HiChatBubbleBottomCenterText,
  HiChatBubbleLeftRight,
  HiHome,
  HiLifebuoy,
  HiUserGroup,
} from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../../redux/website/Navigation/NavigationSlice";
import SearchBar from "../SearchBar/SearchBar";
import SidebarNavItem from "./SidebarNavItem";
import UserCard from "./UserCard";

const SidebarMenu = () => {
  const isNavToggled = useSelector((state) => state.navigation.isToggle);
  const dispatch = useDispatch();
  const { onClose } = useDisclosure();

  const closeSidebar = () => {
    dispatch(toggleNav());
    onClose();
  };

  return (
    <>
      <Drawer isOpen={isNavToggled} placement="left" onClose={closeSidebar}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <h2 className="text-3xl font-bold">FitGoo</h2>
          </DrawerHeader>

          <DrawerBody>
            <SearchBar />
            <Divider className="my-4" />
            <h3 className="text-md font-semibold text-gray-900">Menu</h3>
            <VStack
              as="nav"
              align="flex-start"
              className="p-2 text-lg text-gray-900"
            >
              <SidebarNavItem name="Home" icon={<HiHome />} link="/" />
              <SidebarNavItem
                name="About"
                link="/about"
                icon={<HiUserGroup />}
              />
              <SidebarNavItem
                name="Contact"
                icon={<HiChatBubbleBottomCenterText />}
              />
            </VStack>
            <Divider className="my-4" />
            <h3 className="text-md font-semibold text-gray-900">
              Help & Support
            </h3>
            <VStack
              as="nav"
              align="flex-start"
              className="p-2 text-lg text-gray-900"
            >
              <SidebarNavItem name="Help" icon={<HiLifebuoy />} />
              <SidebarNavItem name="FAQ's" icon={<HiChatBubbleLeftRight />} />
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <UserCard />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
