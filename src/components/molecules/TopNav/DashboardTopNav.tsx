/** @format */

import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Container, UserCtaContainer, UserDropdown, Wrapper } from "./style";
import { Center } from "styles/layouts/Center";
import {
  AvatarIconIcon,
  Logo,
  MenuBurgerIcon,
  RightCaretIcon,
  UserCircleIcon,
  UserLearningIcon,
  UserLogoutIcon,
} from "components/atom/SvgIcon";
import { Flex } from "styles/layouts/Flex";
import IconButton from "components/atom/button/IconButton";
import Typography from "components/atom/Typography";
import { useOnClickOutside } from "utils/hooks";
import { AnimatePresence } from "framer-motion";
import { animate_slideUp } from "styles/Base/Animation";
import { Button } from "components/atom/button/style";
import { useAuthStore } from "store";
import { appRoutes } from "utils/constants";

// Type defination
interface Props {}

// Component
const DashboardTopNav: React.FC<Props> = () => {
  // State
  const [showDropdown, setShowDropdown] = useState(false);

  // Store
  const { userLogOut } = useAuthStore();

  // Refs
  const dropdownRef = useRef<any>();

  // Hooks
  const navigate = useNavigate();
  useOnClickOutside(dropdownRef, () => setShowDropdown(false));

  // Methods
  const handleLogout = () => {
    userLogOut();
    navigate(appRoutes.LOGIN);
  };

  // Data to display
  return (
    <Wrapper $bgWhite>
      <Center>
        <Container>
          <Logo />

          <Flex $gap="3.3rem" $flexRowAiCenter>
            <Link
              to="https://web-app-blue-tau.vercel.app/workshops"
              className="l l1"
              target="_blank"
            >
              Workshops
            </Link>
            <Link
              to="https://web-app-blue-tau.vercel.app/one-on-one"
              className="l l1"
              target="_blank"
            >
              1-on-1 Session
            </Link>
            <Link
              to="https://web-app-blue-tau.vercel.app/on-demand-courses"
              className="l l1"
              target="_blank"
            >
              On-Demand Courses
            </Link>

            <UserCtaContainer ref={dropdownRef}>
              <IconButton
                className="user-nav-cta"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <MenuBurgerIcon />
                <AvatarIconIcon />
              </IconButton>

              <AnimatePresence>
                {showDropdown && (
                  <UserDropdown
                    ref={dropdownRef}
                    variants={animate_slideUp.variants}
                    exit={animate_slideUp.variants.hidden}
                    transition={animate_slideUp.transition}
                    initial="hidden"
                    animate={showDropdown ? "visible" : "hidden"}
                  >
                    <Typography as="h5" className="h21" text="Account" />
                    <div className="links">
                      <Link to="#" className="link-item ">
                        <Flex $gap="7rem" $flexRowJcBetweenAiCenter>
                          <Flex $gap="1rem" $flexRowAiCenter>
                            <UserCircleIcon width={19} height={19} /> Profile
                          </Flex>
                          <RightCaretIcon />
                        </Flex>
                      </Link>
                      <Link to={appRoutes.LEARNING} className="link-item ">
                        <Flex $gap="7rem" $flexRowJcBetweenAiCenter>
                          <Flex $gap="1rem" $flexRowAiCenter>
                            <UserLearningIcon width={19} height={19} /> My
                            learning
                          </Flex>
                          <RightCaretIcon />
                        </Flex>
                      </Link>
                      <Link to="#" className="link-item ">
                        <Flex $gap="7rem" $flexRowJcBetweenAiCenter>
                          <Flex $gap="1rem" $flexRowAiCenter>
                            <UserCircleIcon width={19} height={19} /> Setting
                          </Flex>
                          <RightCaretIcon />
                        </Flex>
                      </Link>
                      <Button className="link-item" onClick={handleLogout}>
                        <Flex $gap="7rem" $flexRowJcBetweenAiCenter>
                          <Flex $gap="1rem" $flexRowAiCenter>
                            <UserLogoutIcon width={19} height={19} /> Log Out
                          </Flex>
                          <RightCaretIcon />
                        </Flex>
                      </Button>
                    </div>
                  </UserDropdown>
                )}
              </AnimatePresence>
            </UserCtaContainer>
          </Flex>
        </Container>
      </Center>
    </Wrapper>
  );
};

export default DashboardTopNav;
