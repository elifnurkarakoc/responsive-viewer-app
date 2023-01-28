import React, { useRef } from "react";
import { setUserAgent } from "utils/helper";

const Iframe = ({ screen, url }) => {
  const ref = useRef(null);
  const id = `${screen?.deviceName}+${screen?.width}`;
  //   console.log(document);
  //   if (id) {
  //     setUserAgent(
  //       document?.getElementById(id)?.contentWindow?.document,
  //       screen?.userAgent
  //     );
  //   }

  return (
    <iframe
      ref={ref}
      width={screen?.width}
      height={screen?.height}
      src={url}
      title={screen?.deviceName}
      id={id}
    />
  );
};

export default Iframe;
