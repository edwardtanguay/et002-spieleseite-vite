import { Preisliste } from "../components/Preisliste";
import waren from "../data/waren.json"

export const PageHandel = () => {
  return /*html*/ `
<div class="PageHandel">
	<h2 class="überschrift">Handel</h2>
		<div>
			
		<h3>Bedarfsrechner</h3>
		<form action="">
		Bedarf für
			<input type="text" name="" placeholder="Anzahl" id="bewohneranzahl">
			<label for="bewohner">Bewohner</label>
		für
			<input type="text" name="" placeholder="volle Tage" id="tage">
		Tage
			<button class="btnProcess">berechnen</button>
			<input type="reset">
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
						<td>Gesamt Konvoigröße</td>
						<td id="bdrkonvoi">0</td>
					</tr>
				</tbody>
			</table>
		</section>
	</div>
	${Preisliste()}
</div>
`;
};

export const attachPageHandelEvents = () => {
  const btn = document.querySelector(".btnProcess");
  btn?.addEventListener("click", (e: Event) => {
    e.preventDefault();

	const _bewohneranzahlElem = document.querySelector<HTMLInputElement>(
      "#bewohneranzahl");
	
	const _tageElem =
    document.querySelector<HTMLInputElement>("#tage");

	const _bdrkonvoiElem = document.querySelector<HTMLInputElement>("#bdrkonvoi");

	const _bdrholzElem =
    document.querySelector<HTMLInputElement>(".bdrholz");
	const _bdholz = waren.find((m) => m.name === "Holz")?.bd;

	const _bdrziegelElem = document.querySelector<HTMLInputElement>(".bdrziegel");
  	const _bdziegel = waren.find((m) => m.name === "Ziegel")?.bd;

	const _bdrweizenElem = document.querySelector<HTMLInputElement>(".bdrweizen");
  	const _bdweizen = waren.find((m) => m.name === "Weizen")?.bd;

	const _bdrobstElem = document.querySelector<HTMLInputElement>(".bdrobst");
  	const _bdobst = waren.find((m) => m.name === "Obst")?.bd;

	const _bdrmaisElem = document.querySelector<HTMLInputElement>(".bdrmais");
    const _bdmais = waren.find((m) => m.name === "Mais")?.bd;

	const _bdrzuckerElem = document.querySelector<HTMLInputElement>(".bdrzucker");
  	const _bdzucker = waren.find((m) => m.name === "Zucker")?.bd;

	const _bdrhanfElem = document.querySelector<HTMLInputElement>(".bdrhanf");
  	const _bdhanf = waren.find((m) => m.name === "Hanf")?.bd;

	const _bdrtuchElem = document.querySelector<HTMLInputElement>(".bdrtuch");
  	const _bdtuch = waren.find((m) => m.name === "Tuch")?.bd;

	const _bdrmetallElem = document.querySelector<HTMLInputElement>(".bdrmetall");
  	const _bdmetall = waren.find((m) => m.name === "Metall")?.bd;

	const _bdrbaumwolleElem =
    document.querySelector<HTMLInputElement>(".bdrbaumwolle");
	const _bdbaumwolle = waren.find((m) => m.name === "Baumwolle")?.bd;

	const _bdrwerkzeugElem =
    document.querySelector<HTMLInputElement>(".bdrwerkzeug");
  	const _bdwerkzeug = waren.find((m) => m.name === "Werkzeug")?.bd;

	const _bdrfärbemittelElem =
    document.querySelector<HTMLInputElement>(".bdrfärbemittel");
  	const _bdfärbemittel = waren.find((m) => m.name === "Färbemittel")?.bd;

	const _bdrkaffeeElem =
    document.querySelector<HTMLInputElement>(".bdrkaffee");
  	const _bdkaffee = waren.find((m) => m.name === "Kaffee")?.bd;

	const _bdrkakaoElem = document.querySelector<HTMLInputElement>(".bdrkakao");
  	const _bdkakao = waren.find((m) => m.name === "Kakao")?.bd;

	const _bdrtabakElem = document.querySelector<HTMLInputElement>(".bdrtabak");
  	const _bdtabak = waren.find((m) => m.name === "Tabak")?.bd;

	const _bdrfleischElem =
    document.querySelector<HTMLInputElement>(".bdrfleisch");
  	const _bdfleisch = waren.find((m) => m.name === "Fleisch")?.bd;

	const _bdrkleidungElem =
    document.querySelector<HTMLInputElement>(".bdrkleidung");
  	const _bdkleidung = waren.find((m) => m.name === "Kleidung")?.bd;

	const _bdrseilElem = document.querySelector<HTMLInputElement>(".bdrseil");
  	const _bdseil = waren.find((m) => m.name === "Seil")?.bd;

	const _bdrrumElem = document.querySelector<HTMLInputElement>(".bdrrum");
  	const _bdrum = waren.find((m) => m.name === "Rum")?.bd;

	const _bdrbackwarenElem =
    document.querySelector<HTMLInputElement>(".bdrbackwaren");
  	const _bdbackwaren = waren.find((m) => m.name === "Backwaren")?.bd;


	if (
    _bewohneranzahlElem &&
	_tageElem &&
    _bdrholzElem &&
    _bdholz &&
    _bdrziegelElem &&
    _bdziegel &&
    _bdrweizenElem &&
    _bdweizen &&
    _bdrobstElem &&
    _bdobst &&
    _bdrmaisElem &&
    _bdmais &&
    _bdrzuckerElem &&
    _bdzucker &&
    _bdrhanfElem &&
    _bdhanf &&
    _bdrtuchElem &&
    _bdtuch &&
    _bdrmetallElem &&
    _bdmetall &&
    _bdrbaumwolleElem &&
    _bdbaumwolle &&
    _bdrwerkzeugElem &&
    _bdwerkzeug &&
    _bdrfärbemittelElem &&
    _bdfärbemittel &&
    _bdrkaffeeElem &&
    _bdkaffee &&
    _bdrkakaoElem &&
    _bdkakao &&
    _bdrtabakElem &&
    _bdtabak &&
	_bdrfleischElem &&
	_bdfleisch &&
	_bdrkleidungElem &&
	_bdkleidung &&
	_bdrseilElem &&
	_bdseil &&
	_bdrrumElem &&
	_bdrum &&
	_bdrbackwarenElem &&
	_bdbackwaren &&
	_bdrkonvoiElem
  ) {
    const bewohneranzahlElem = _bewohneranzahlElem;
	const tageElem = _tageElem

    const bdrholzElem = _bdrholzElem;
    const bdholz = _bdholz;
    bdrholzElem.innerHTML = String(
      Math.round(Number(bewohneranzahlElem.value) * bdholz * Number(tageElem.value))
    );

    const bdrziegelElem = _bdrziegelElem;
    const bdziegel = _bdziegel;
    bdrziegelElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdziegel * Number(tageElem.value)
      )
    );

    const bdrweizenElem = _bdrweizenElem;
    const bdweizen = _bdweizen;
    bdrweizenElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdweizen * Number(tageElem.value)
      )
    );

    const bdrobstElem = _bdrobstElem;
    const bdobst = _bdobst;
    bdrobstElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdobst * Number(tageElem.value)
      )
    );

    const bdrmaisElem = _bdrmaisElem;
    const bdmais = _bdmais;
    bdrmaisElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdmais * Number(tageElem.value)
      )
    );

    const bdrzuckerElem = _bdrzuckerElem;
    const bdzucker = _bdzucker;
    bdrzuckerElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdzucker * Number(tageElem.value)
      )
    );

    const bdrhanfElem = _bdrhanfElem;
    const bdhanf = _bdhanf;
    bdrhanfElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdhanf * Number(tageElem.value)
      )
    );

    const bdrtuchElem = _bdrtuchElem;
    const bdtuch = _bdtuch;
    bdrtuchElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdtuch * Number(tageElem.value)
      )
    );

    const bdrmetallElem = _bdrmetallElem;
    const bdmetall = _bdmetall;
    bdrmetallElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdmetall * Number(tageElem.value)
      )
    );

    const bdrbaumwolleElem = _bdrbaumwolleElem;
    const bdbaumwolle = _bdbaumwolle;
    bdrbaumwolleElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdbaumwolle * Number(tageElem.value)
      )
    );

    const bdrwerkzeugElem = _bdrwerkzeugElem;
    const bdwerkzeug = _bdwerkzeug;
    bdrwerkzeugElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdwerkzeug * Number(tageElem.value)
      )
    );

    const bdrfärbemittelElem = _bdrfärbemittelElem;
    const bdfärbemittel = _bdfärbemittel;
    bdrfärbemittelElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) *
          bdfärbemittel *
          Number(tageElem.value)
      )
    );

    const bdrkaffeeElem = _bdrkaffeeElem;
    const bdkaffee = _bdkaffee;
    bdrkaffeeElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdkaffee * Number(tageElem.value)
      )
    );

    const bdrkakaoElem = _bdrkakaoElem;
    const bdkakao = _bdkakao;
    bdrkakaoElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdkakao * Number(tageElem.value)
      )
    );

	const bdrtabakElem = _bdrtabakElem;
  	const bdtabak = _bdtabak;
  	bdrtabakElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdtabak * Number(tageElem.value)
      )
    );

	const bdrfleischElem = _bdrfleischElem;
  	const bdfleisch = _bdfleisch;
  	bdrfleischElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdfleisch * Number(tageElem.value)
      )
    );

	const bdrkleidungElem = _bdrkleidungElem;
  	const bdkleidung = _bdkleidung;
  	bdrkleidungElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdkleidung * Number(tageElem.value)
      )
    );

	const bdrseilElem = _bdrseilElem;
  	const bdseil = _bdseil;
 	bdrseilElem.innerHTML = String(
    Math.round(
      Number(bewohneranzahlElem.value) * bdseil * Number(tageElem.value)
    )
  );

	const bdrrumElem = _bdrrumElem;
  	const bdrum = _bdrum;
  	bdrrumElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdrum * Number(tageElem.value)
      )
    );

	const bdrbackwarenElem = _bdrbackwarenElem;
  	const bdbackwaren = _bdbackwaren;
  	bdrbackwarenElem.innerHTML = String(
      Math.round(
        Number(bewohneranzahlElem.value) * bdbackwaren * Number(tageElem.value)
      )
    );
	const bdrkonvoiElem = _bdrkonvoiElem;
	bdrkonvoiElem.innerHTML = String(
    Number(bdrholzElem.innerHTML) +
      Number(bdrziegelElem.innerHTML) +
      Number(bdrweizenElem.innerHTML) +
      Number(bdrobstElem.innerHTML) +
      Number(bdrmaisElem.innerHTML) +
      Number(bdrzuckerElem.innerHTML) +
      Number(bdrhanfElem.innerHTML) +
      Number(bdrtuchElem.innerHTML) +
      Number(bdrmetallElem.innerHTML) + 
	  Number(bdrbaumwolleElem.innerHTML) + 
	  Number(bdrwerkzeugElem.innerHTML) + 
	  Number(bdrfärbemittelElem.innerHTML) + 
	  Number(bdrkaffeeElem.innerHTML) + 
	  Number(bdrkakaoElem.innerHTML) + 
	  Number(bdrtabakElem.innerHTML) + 
	  Number(bdrfleischElem.innerHTML) + 
	  Number(bdrkleidungElem.innerHTML) + 
	  Number(bdrseilElem.innerHTML) +
	  Number(bdrrumElem.innerHTML) + 
	  Number(bdrbackwarenElem.innerHTML)
  ); 

  } else {
    const _errorMessageElem =
      document.querySelector<HTMLInputElement>(".errorMessage");

    if (_errorMessageElem) {
      const errorMessageElem = _errorMessageElem;
      errorMessageElem.innerHTML = "There was an error on the site.";
    }
  }
  })
}


