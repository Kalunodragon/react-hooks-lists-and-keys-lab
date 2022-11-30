import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const Links = links.map((link) => {
    const addedLink = "#" + link
    return <a key={link} href={addedLink}>{link}</a>
  })

  return <nav>{Links}</nav>;
}

export default NavBar;
