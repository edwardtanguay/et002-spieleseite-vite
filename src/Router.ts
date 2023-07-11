import * as tools from "./tools";
import { PageKampf, attachPageKampfEvents } from "./pages/PageKampf";
import { PageHandel, attachPageHandelEvents } from "./pages/PageHandel";
import { PageAbout } from "./pages/PageAbout";
import { Page404 } from "./pages/Page404";

const PR3pageNames = ["Kampf", "Handel", "About"];
const P4pageNames:string[] = [];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
  switch (currentPageIdCode) {
    case "kampf":
      return PageKampf();
    case "handel":
      return PageHandel();
    case "about":
      return PageAbout();
    default:
      return Page404();
  }
};

const getPageIdCode = (pageName: string) => {
  pageName = tools.cleanCharactersToAscii(pageName);
  return pageName.toLowerCase();
};

export const getMenu = () => {
  const getMenuClass = (pageName: string) => {
    const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
    if (pageIdCode === currentPageIdCode) {
      return ` class="active"`;
    } else {
      return "";
    }
  };

  return /*html*/ `
	<nav class="menu">
      <ul>
        <li class="dropdown">
          <a href="#" class="dropbtn">Port Royale 3</a>
          <div class="dropdown-content">
            ${PR3pageNames
              .map(
                (pageName) =>
                  `<a href="${getPageIdCode(pageName)}"${getMenuClass(
                    pageName
                  )}>${pageName}</a>`
              )
              .join("")}
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn">Patrizier 4</a>
          <div class="dropdown-content">
            ${P4pageNames
              .map(
                (pageName) =>
                  `<a href="${getPageIdCode(pageName)}"${getMenuClass(
                    pageName
                  )}>${pageName}</a>`
              )
              .join("")}
          </div>
        </li>
      </ul>
    </nav>
`;
};

function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  currentPageIdCode =
    currentPageIdCode === ""
      ? tools.cleanCharactersToAscii(PR3pageNames[0].toLowerCase())
      : currentPageIdCode;
  return currentPageIdCode;
}

export const attachEvents = () => {
  attachPageKampfEvents();
  attachPageHandelEvents();
};
