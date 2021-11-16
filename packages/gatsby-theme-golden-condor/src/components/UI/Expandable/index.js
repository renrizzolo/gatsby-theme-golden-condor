import PropTypes from "prop-types";
import React from "react";
import { Box } from "theme-ui";

const Expandable = ({
  id,
  expandable = true,
  open,
  toggle,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleOpen = React.useCallback(
    (event) => {
      event.preventDefault();
      expandable && setIsOpen(!isOpen);
    },
    [isOpen, expandable]
  );
  const ariaProps = React.useMemo(
    () => ({
      "aria-controls": id,
      "aria-expanded": isOpen ? "true" : "false",
    }),
    [isOpen, id]
  );
  return (
    <>
      {toggle && toggle(handleOpen, ariaProps, isOpen)}
      <Box id={id} {...props}>
        {isOpen && children}
      </Box>
    </>
  );
};

Expandable.propTypes = {
  id: PropTypes.string,
  expandable: PropTypes.bool,
  open: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Expandable;
