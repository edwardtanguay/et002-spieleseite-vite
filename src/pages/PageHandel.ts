import waren from "../data/waren.json"

export const PageHandel = () => {
  return /*html*/ `
<div class="PageHandel">
	<h2 class="überschrift">Handel</h2>
	<h3>Preisliste normal</h3>
	<section class="preisliste">
		<table>
			<thead>
				<tr>
					<td>Ware</td>
					<td>Ankauf</td>
					<td>Verkauf</td>
					<td>Herstellungsstädte</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Holz</td>
					<td>39</td>
					<td>60</td>
				</tr>
				<tr>
					<td>Ziegel</td>
					<td>39</td>
					<td>60</td>
				</tr>
				<tr>
					<td>Weizen</td>
					<td>39</td>
					<td>60</td>
				</tr>
				<tr>
					<td>Obst</td>
					<td>60</td>
					<td>90</td>
				</tr>
				<tr>
					<td>Mais</td>
					<td>60</td>
					<td>90</td>
				</tr>
				<tr>
					<td>Zucker</td>
					<td>60</td>
					<td>90</td>
				</tr>
				<tr>
					<td>Hanf</td>
					<td>60</td>
					<td>90</td>
				</tr>
				<tr>
					<td>Tuch</td>
					<td>180</td>
					<td>270</td>
				</tr>
				<tr>
					<td>Metall</td>
					<td>99</td>
					<td>150</td>
				</tr>
				<tr>
					<td>Baumwolle</td>
					<td>60</td>
					<td>90</td>
				</tr>
			</tbody>
		</table>
	</section>
	<section class="preisliste">	
		<table>
			<thead>
				<tr>
					<td>Ware</td>
					<td>Ankauf</td>
					<td>Verkauf</td>
					<td>Herstellungsstädte</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Werkzeug</td>
					<td>240</td>
					<td>360</td>
				</tr>
				<tr>
					<td>Färbemittel</td>
					<td>120</td>
					<td>180</td>
				</tr>
				<tr>
					<td>Kaffee</td>
					<td>168</td>
					<td>252</td>
				</tr>
				<tr>
					<td>Kakao</td>
					<td>168</td>
					<td>252</td>
				</tr>
				<tr>
					<td>Tabak</td>
					<td>120</td>
					<td>180</td>
				</tr>
				<tr>
					<td>Fleisch</td>
					<td>360</td>
					<td>540</td>
				</tr>
				<tr>
					<td>Kleidung</td>
					<td>540</td>
					<td>810</td>
				</tr>
				<tr>
					<td>Seil</td>
					<td>180</td>
					<td>270</td>
				</tr>
				<tr>
					<td>Rum</td>
					<td>320</td>
					<td>480</td>
				</tr>
				<tr>
					<td>Backwaren</td>
					<td>170</td>
					<td>255</td>
				</tr>
			</tbody>
		</table>
	</section>
	<h3>Bedarfsrechner</h3>
	<form action="">
		<label for="bewohner">Bewohner</label>
		<input type="text" name="" id="bewohneranzahl">
		<button class="btnProcess">berechnen</button>
	</form>
	<section class="bedarfsrechner">
		<table>
			<thead>
				<tr>
					<td>Ware</td>
					<td>Anzahl</td>
					<td>Ware</td>
					<td>Anzahl</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Holz</td>
					<td class="bdrholz">0</td>
					<td>Werkzeug</td>
					<td class="bdrwerkzeug">0</td>
				</tr>
				<tr>
					<td>Ziegel</td>
					<td class="bdrziegel">0</td>
					<td>Färbemittel</td>
					<td class="bdrfärbemittel">0</td>
				</tr>
				<tr>
					<td>Weizen</td>
					<td class="bdrweizen">0</td>
					<td>Kaffee</td>
					<td class="bdrkaffee">0</td>
				</tr>
				<tr>
					<td>Obst</td>
					<td class="bdrobst">0</td>
					<td>Kakao</td>
					<td class="bdrkakao">0</td>
				</tr>
				<tr>
					<td>Mais</td>
					<td class="bdrmais">0</td>
					<td>Tabak</td>
					<td class="bdrtabak">0</td>
				</tr>
				<tr>
					<td>Zucker</td>
					<td class="bdrzucker">0</td>
					<td>Fleisch</td>
					<td class="bdrfleisch">0</td>
				</tr>
				<tr>
					<td>Hanf</td>
					<td class="bdrhanf">0</td>
					<td>Kleidung</td>
					<td class="bdrkleidung">0</td>
				</tr>
				<tr>
					<td>Tuch</td>
					<td class="bdrtuch">0</td>
					<td>Seil</td>
					<td class="bdrseil">0</td>
				</tr>
				<tr>
					<td>Metall</td>
					<td class="bdrmetall">0</td>
					<td>Rum</td>
					<td class="bdrrum">0</td>
				</tr>
				<tr>
					<td>Baumwolle</td>
					<td class="bdrbaumwolle">0</td>
					<td>Backwaren</td>
					<td class="bdrbackwaren">0</td>
				</tr>
			</tbody>
		</table>
	</section>
</div>
`;
};

export const attachPageHandelEvents = () => {
  const btn = document.querySelector(".btnProcess");
  btn?.addEventListener("click", (e: Event) => {
    e.preventDefault();

	const _bewohneranzahlElem = document.querySelector<HTMLInputElement>(
      "#bewohneranzahl"
    );
	const _bdrholzElem =
    document.querySelector<HTMLInputElement>(".bdrholz");



	if (
      _bewohneranzahlElem &&
	  _bdrholzElem

    ) {  
		const bewohneranzahlElem = _bewohneranzahlElem;
		const bdrholzElem = _bdrholzElem;

		bdrholzElem.innerHTML = bewohneranzahlElem.value;
	}else {
      const _errorMessageElem =
        document.querySelector<HTMLInputElement>(".errorMessage");
     
      

      if (_errorMessageElem) {
        const errorMessageElem = _errorMessageElem;
        errorMessageElem.innerHTML = "There was an error on the site.";
      }
    }
  })
}
