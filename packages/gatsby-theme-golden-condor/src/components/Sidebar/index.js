import React from "react";
import { Box, Heading, Text } from "@theme-ui/components";
import { getPath } from "@util";
import Expandable from "@components/UI/Expandable";
import useWindowSize from "@hooks/useWindowSize";
import breakpoints from "@theme/breakpoints";
import ExpandButton from "@components/UI/Expandable/ExpandButton";
import SubItem from "./SubItem";
import SubItemWrapper from "./SubItemWrapper";
import Item from "./Item";

function Sidebar({ options, entries = [], currentPath, ...props }) {
  const { heading = "", width = 280 } = options;
  const { width: windowWidth } = useWindowSize();
  return (
    <Box
      sx={{
        gridColumn: ["span 13", "span 13", "unset"],
        minWidth: "unset",
        a: { textDecoration: "none" },
      }}
      {...props}
    >
      <Expandable
        open={windowWidth >= breakpoints[1]}
        sx={{
          width: windowWidth >= breakpoints[1] ? width : "100%",
          position: "sticky",
          top: 3,
        }}
        id="gtgt-sidebar-nav"
        expandable
        toggle={(onClick, ariaProps, isOpen) => (
          <ExpandButton
            sx={{ display: ["flex", "flex", "none"] }}
            {...ariaProps}
            expandable
            onClick={onClick}
            isOpen={isOpen}
          >
            {isOpen ? "Hide" : "Show"} Navigation
          </ExpandButton>
        )}
      >
        <Heading mt={0} mb={3} variant="subHeading" as={"h4"}>
          {heading}
        </Heading>
        <Text as="ul" sx={{ listStyleType: "none", p: 0 }}>
          {entries.map((entry) => {
            if (!entry.childMdx?.slug) return null;
            const {
              childMdx: {
                frontmatter: { title, parent },
                childEntries,
              },
            } = entry;

            if (parent) return null;

            const path = getPath(entry);
            return (
              <Expandable
                id={`gtgc-sidebar-${path}`}
                open
                key={path}
                expandable={!!childEntries?.length}
                toggle={(onClick, ariaProps, isOpen) => (
                  <Item
                    ariaProps={ariaProps}
                    isOpen={isOpen}
                    onClick={onClick}
                    expandable={!!childEntries?.length}
                    hasLink={Boolean(entry.childMdx?.path)}
                    to={path}
                    isActive={currentPath === path}
                  >
                    {title}
                  </Item>
                )}
              >
                {childEntries && childEntries.length > 0 && (
                  <SubItemWrapper>
                    {childEntries.map((entry) => {
                      const childPath = getPath(entry);

                      const extraChildren = entries.find(
                        ({
                          childMdx: {
                            frontmatter: { id },
                          },
                        }) => id === entry.frontmatter.id
                      )?.childMdx?.childEntries;

                      return (
                        <React.Fragment key={childPath}>
                          <SubItem
                            hasLink={Boolean(entry.path)}
                            key={childPath}
                            to={childPath}
                            isActive={currentPath === childPath}
                            level={1}
                          >
                            {entry.frontmatter.title}
                          </SubItem>

                          {extraChildren &&
                            extraChildren.map((entry) => {
                              const childPath = getPath(entry);
                              return (
                                <SubItem
                                  key={childPath}
                                  to={childPath}
                                  isActive={currentPath === childPath}
                                  textSx={{ ml: 3 }}
                                  level={2}
                                >
                                  {entry.frontmatter.title}
                                </SubItem>
                              );
                            })}
                        </React.Fragment>
                      );
                    })}
                  </SubItemWrapper>
                )}
              </Expandable>
            );
          })}
        </Text>
      </Expandable>
    </Box>
  );
}

export default Sidebar;
