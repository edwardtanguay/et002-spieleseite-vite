import * as tools from "./tools";
import { PageKampf, attachPageKampfEvents } from "./pages/PageKampf";
import { PageHandel } from "./pages/PageHandel";
import { PageAbout } from "./pages/PageAbout";
import { Page404 } from "./pages/Page404";

const pageNames = ["Kampf", "Handel", "About"];

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
			${pageNames
        .map(
          (pageName) =>
            `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(
              pageName
            )}>${pageName}</a></li>`
        )
        .join("")}
		</ul>
	</nav>
`;
};

function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  currentPageIdCode =
    currentPageIdCode === ""
      ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase())
      : currentPageIdCode;
  return currentPageIdCode;
}

export const attachEvents = () => {
  attachPageKampfEvents();
};
