import LogoHeader from "@components/Logo/LogoHeader";
import React from "react";
import { Box, Heading, Container } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Flex } from "@components/UI";
import ToggleColorMode from "../ToggleColorMode";
import NavLink from "./NavLink";
import MobileMenuHeader from "./MobileMenuHeader";
import NavWrapper from "./NavWrapper";
import NavLinksWrapper from "./NavLinksWrapper";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query SiteNav {
      allNavigationYaml(filter: { locations: { in: "top" } }) {
        nodes {
          label
          path
        }
      }
    }
  `);

  const { allNavigationYaml: links } = data;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <MobileMenuHeader onToggleMenu={() => setIsOpen(!isOpen)} />
      <NavWrapper isOpen={isOpen}>
        <Container>
          <Flex
            flexDirection={["column", "row"]}
            align={["start", "center"]}
            justify="center"
          >
            <Heading mb={[2, 0]} sx={{ display: ["none", "block"] }}>
              <LogoHeader />
            </Heading>
            <NavLinksWrapper>
              {links.nodes.map(({ path, label }) => (
                <NavLink to={path} label={label} key={path} />
              ))}
            </NavLinksWrapper>

            <Box ml="auto" mb={[2, 0]}>
              <ToggleColorMode />
            </Box>
          </Flex>
        </Container>
      </NavWrapper>
    </>
  );
};

export default Nav;
