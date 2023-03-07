import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <h1>I Is A Header</h1>

      {/* left */}
      <div className="relative w-24">
        <Image src="https://links.papareact.com/ocw" layout="fill" />
      </div>
      {/* middle */}

      {/* right */}
    </div>
  );
};

export default Header;
