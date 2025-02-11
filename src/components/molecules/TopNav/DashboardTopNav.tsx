import React from "react";
import { Container, Wrapper } from "./style";
import { Center } from "styles/layouts/Center";
import { AvatarIconIcon, Logo, MenuBurgerIcon } from "components/atom/SvgIcon";
import { Flex } from "styles/layouts/Flex";
import { Link } from "react-router";
import IconButton from "components/atom/button/IconButton";

// Type defination
interface Props {}

// Component
const DashboardTopNav: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper $bgWhite>
      <Center>
        <Container>
          <Logo />

          <Flex $gap="3.3rem" $flexRowAiCenter>
            <Link to="#" className="l l1">
              Workshops
            </Link>
            <Link to="#" className="l l1">
              1-on-1 Session
            </Link>
            <Link to="#" className="l l1">
              On-Demand Courses
            </Link>

            <IconButton className="user-nav-cta">
              <MenuBurgerIcon />
              <AvatarIconIcon />
            </IconButton>
          </Flex>
        </Container>
      </Center>
    </Wrapper>
  );
};

export default DashboardTopNav;
