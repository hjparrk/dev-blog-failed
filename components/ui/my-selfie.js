import React from "react";
import Image from "next/image";

const MySelfie = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a className="flex" href={href} onClick={onClick} ref={ref}>
      <Image src="/selfie.jpg" width={30} height={30} />
    </a>
  );
});

export default MySelfie;
