import PropTypes from "prop-types";
import React from "react";
import { Heading } from "theme-ui";
import HeadingsList from "./HeadingsList";
import Expandable from "@components/UI/Expandable";
import useWindowSize from "@hooks/useWindowSize";
import breakpoints from "@theme/breakpoints";
import ExpandButton from "@components/UI/Expandable/ExpandButton";
import useObserveActiveSection from "@hooks/useObserveActiveSection";
import TOCContainer from "./TOCContainer";

function TableOfContents({ headings, heading }) {
  const { width } = useWindowSize();
  const [id, setId] = React.useState();
  useObserveActiveSection({ headings, highlightedId: id });
  return (
    <Expandable
      open={width >= breakpoints[0]}
      id="gtgc-toc"
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
        top: 3,
        position: "sticky",
        mt: [3, 0],
      }}
    >
      <TOCContainer>
        <Heading mt={0} mb={3} variant="subHeading" as={"h4"}>
          {heading}
        </Heading>
        <HeadingsList items={headings} level={2} setId={setId} />
      </TOCContainer>
    </Expandable>
  );
}

TableOfContents.defaultProps = {
  heading: "On this page",
};

TableOfContents.propTypes = {
  headings: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
};

export default TableOfContents;
