import React from "react";

const useObserveActiveSection = ({ headings, highlightedId }) => {
  const flattenedHeadings = React.useMemo(() => {
    return headings.reduce((acc, curr) => {
      acc.push(curr);
      if (curr.items) {
        acc = [
          ...acc,
          ...(curr.items.some(({ url }) => url) ? curr.items : []),
        ];
      }
      return acc;
    }, []);
  }, [headings]);

  const [highlighted, setHighlighted] = React.useState();

  React.useEffect(() => {
    return highlightedId && setHighlighted(highlightedId);
  }, [highlightedId]);

  React.useEffect(() => {
    if (highlighted) {
      const navElement = document.querySelector(`a[href="#${highlighted}"]`);
      // remove all other active elements when highlighting a new one
      // the observed elements are just h2s,
      // so we have no context of the length of the section's content
      // in other words we know when they enter the top of the viewport but when they leave,
      // the section should remain active until the next section activates i.e at the end of the section's content
      flattenedHeadings.forEach(
        ({ url }) =>
          url !== `#${highlighted}` &&
          document
            .querySelector(`a[href="${url}"]`)
            ?.classList.contains("active") &&
          document.querySelector(`a[href="${url}"]`)?.classList.remove("active")
      );
      navElement &&
        !navElement.classList.contains("active") &&
        navElement.classList.add("active");
    }
  }, [highlighted, flattenedHeadings]);

  React.useEffect(() => {
    let observer;
    let previousY = 0;

    if (flattenedHeadings) {
      const options = {
        threshold: 0.2,
        rootMargin: "5% 0% -95% 0%",
      };
      observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          const currentY = window.scrollY;

          if (entry.isIntersecting) {
            setHighlighted(entry.target.id);
          } else {
            const thisIndex = flattenedHeadings.findIndex(
              ({ url }) => url === `#${entry.target.id}`
            );
            // highlight previous section when scrolling up
            if (currentY < previousY) {
              if (thisIndex > 0 && thisIndex < flattenedHeadings.length) {
                const url = flattenedHeadings[thisIndex - 1]?.url;
                setHighlighted(url.substring(1));
              }
            }
          }

          previousY = currentY;
        });
      }, options);

      flattenedHeadings.map(
        (heading) =>
          document.getElementById(heading.url.substring(1)) &&
          observer.observe(document.getElementById(heading.url.substring(1)))
      );
    }
    return () => observer.disconnect();
  }, [flattenedHeadings]);
};

export default useObserveActiveSection;
