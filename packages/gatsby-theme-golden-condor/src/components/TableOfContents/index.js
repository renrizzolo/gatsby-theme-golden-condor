import PropTypes from "prop-types";
import React from "react";
import { Box } from "theme-ui";
import HeadingsList from "./HeadingsList";
import Expandable from "@components/UI/Expandable";
import useWindowSize from "@hooks/useWindowSize";
import breakpoints from "@theme/breakpoints";
import ExpandButton from "@components/UI/Expandable/ExpandButton";
import useObserveActiveSection from "@hooks/useObserveActiveSection";

function TableOfContents({ headings, label }) {
  const { width } = useWindowSize();
  const [id, setId] = React.useState();
  useObserveActiveSection({ headings, highlightedId: id });
  return (
    <Expandable
      open={width >= breakpoints[0]}
      id="gtgt-toc"
      expandable
      toggle={(onClick, ariaProps, isOpen) => (
        <ExpandButton
          sx={{ display: ["flex", "none"] }}
          {...ariaProps}
          onClick={onClick}
          isOpen={isOpen}
          expandable
        >
          {isOpen ? "Hide" : "Show"} Contents
        </ExpandButton>
      )}
      as="aside"
      sx={{
        top: 4,
        position: "sticky",
      }}
    >
      <Box
        px={3}
        py={3}
        sx={{
          listStyleType: "none",
          borderColor: "muted",
          borderWidth: 2,
          borderStyle: "solid",
          transition: 1,
          borderRadius: 1,
          bg: "muted",
          "&:hover": {
            borderColor: "secondary.4",
          },
        }}
      >
        <HeadingsList items={headings} level={2} setId={setId} />
      </Box>
    </Expandable>
  );
}

TableOfContents.defaultProps = {
  label: "Table Of Contents",
};

TableOfContents.propTypes = {
  headings: PropTypes.array.isRequired,
  label: PropTypes.string,
};

export default TableOfContents;
