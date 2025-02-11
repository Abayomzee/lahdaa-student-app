/** @format */

import React from "react";
import { Container, Wrapper } from "./style";
import { Center } from "styles/layouts/Center";
import { Logo } from "components/atom/SvgIcon";
import { Flex } from "styles/layouts/Flex";
import { Link } from "react-router";
import Typography from "components/atom/Typography";
import { appRoutes } from "utils/constants";

// Type defination
interface Props {}

// Component
const AuthTopNav: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Center>
        <Container>
          <Logo />

          <Flex $gap="2rem" $flexRowAiCenter>
            <Typography as="p" className="p3" text="Don’t have an account?" />
            <Link to={appRoutes.REGISTER} className="l l2">
              Sign up
            </Link>
          </Flex>
        </Container>
      </Center>
    </Wrapper>
  );
};

export default AuthTopNav;
