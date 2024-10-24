import { useState, useEffect, useRef } from "react";
import Navbar from "../sectionElements/Navbar";
import ListGroupSocial from "../sectionElements/ListGroupSocial";
import { Link as ScrollLink } from "react-scroll";
import SidebarSocial from "../sectionElements/SidebarSocial";
import content from "../../content/content";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function NavbarSocial({ LightMode }) {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [navbarBgWhite, setNavbarBgWhite] = useState(false); // Novo estado

  const sidebarRef = useRef(null);

  const handleScroll = () => {
    const isScrolling = window.scrollY > 0;
    setScrolling(isScrolling);
    setNavbarBgWhite(isScrolling); // Atualiza navbarBgWhite com base no scroll
  };

  const toggleSidebar = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowMenuIcon((prev) => !prev);
      setShowSidebarContent((prev) => !prev);
      if (showSidebar) {
        setTimeout(() => {
          setShowSidebar(false);
          setIsAnimating(false);
        }, 950);
      } else {
        setShowSidebar(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 0);
      }
    }
  };

  const handleResize = () => {
    setShowListGroup(window.innerWidth >= 768);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleCloseSidebar();
    }
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setShowSidebarContent(false);
    setIsAnimating(false);
    setShowMenuIcon(true);
  };

  const handleSidebarItemClick = () => {
    handleCloseSidebar();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className={`fixed z-20 w-full transition-colors duration-1000 ${
          LightMode
            ? scrolling
              ? "bg-white shadow-md"
              : "bg-transparent"
            : scrolling
            ? "bg-gradient-to-b from-black to-bgSectionDark bg-opacity-100 shadow-lg transition-all duration-1000 border-b-[1px] border-black"
            : "transition-colors duration-1000 border-b-[1px] border-transparent border-black"
        }`}
      >
        <Navbar>
          <ScrollLink
            to="home"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            href="#"
          >
            <img
              src={content.texts.navbar.logo.img}
              alt={content.texts.navbar.logo.alt}
              className={`${
                LightMode
                  ? scrolling
                    ? "bg-transparent w-[50%] tablet1:w-[50%] tablet2:w-[40%] desktop1:w-[60%] desktop2:w-[60%] transition-all duration-1000"
                    : "bg-white w-[64%] my-[20px] tablet1:w-[55%] tablet2:w-[47%] desktop1:w-[70%] desktop2:w-[100%] px-3 py-3 transition-all duration-1000"
                  : scrolling
                  ? "bg-transparent w-[50%] tablet1:w-[50%] tablet2:w-[40%] desktop1:w-[60%] desktop2:w-[60%] transition-all duration-1000"
                  : "bg-transparent w-[64%] my-[20px] tablet1:w-[55%] tablet2:w-[47%] desktop1:w-[70%] desktop2:w-[100%] transition-all duration-1000"
              } tablet3:mb-0`}
            />
          </ScrollLink>
          <div className="flex items-center justify-between gap-[16px]">
            <div
              className={`hidden tablet1:flex desktop1:hidden ${
                scrolling ? "" : ""
              }`}
            >
              <Button
                aria-label={content.texts.hero.ctaButtonAriaLabel}
                label={content.texts.navbar.ctaButtonTextResponsive}
                buttonLink={whatsappContactLink}
                className={`${scrolling ? "" : ""}`}
                size="small"
                icon={<FaWhatsapp size={18} />}
              />
            </div>
            <div
              className={`flex items-center desktop1:hidden ${
                scrolling ? "" : ""
              }`}
            >
              <SidebarSocial LightMode={LightMode} />
            </div>
          </div>
          {showListGroup && <ListGroupSocial LightMode={LightMode} />}{" "}
        </Navbar>
      </div>
    </div>
  );
}
