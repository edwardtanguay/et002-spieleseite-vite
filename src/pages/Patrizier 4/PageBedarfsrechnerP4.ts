import waren from "../../data/Patrizier 4/waren.json";

export const PageBedarfsrechnerP4 = () => {
  return /*html*/ `
    <div class="BedarfsrechnerP4">
        <h2 class="ueberschrift">Bedarfsrechner</h2>
        <div>
            <form action="">
                Bedarf für
                <input type="text" name="" placeholder="Anzahl" id="bewohneranzahl">
                <label for="bewohner">Bewohner</label>
                für
                <input type="text" name="" placeholder="volle Tage" id="tage">
                Tage
                <button class="btnberechnenP4">berechnen</button>
                <input type="reset">
            </form>
            <section class="bedarfsrechner">
                <table>
                    <thead>
                        <tr>
                            <td>Ware</td>
                            <td>Anzahl</td>
                            <td>Gewinn</td>
                            <td>Ware</td>
                            <td>Anzahl</td>
                            <td>Gewinn</td>
                            <td>Gesamt</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://i.imgur.com/jXFmwgM.png" alt=""> Holz</td>  
                            <td class="bedarfholz">0</td>
                            <td class="gewinnholz">0</td>
                            <td><img src="https://i.imgur.com/YOFwz1B.png" alt=""> Tuch</td>
                            <td class="bedarftuch">0</td>
                            <td class="gewinntuch">0</td>
                            <td>Konvoigröße</td>
                            <td class="konvoi">0</td>
                        </tr>
                        <tr>
                            <td><img src="https://i.imgur.com/O9Q8VNI.png" alt=""> Ziegel</td>
                            <td class="bedarfziegel">0</td>
                            <td class="gewinnziegel">0</td>
                            <td><img src="https://i.imgur.com/xDjwe3P.png" alt=""> Bier</td>
                            <td class="bedarfbier">0</td>
                            <td class="gewinnbier">0</td>
                            <td>Profit</td>
                            <td class="allprofit">0</td>
                        </tr>
                        <tr>
                            <td><img src="https://i.imgur.com/w5xA9Dw.png" alt=""> Getreide</td>
                            <td class="bedarfgetreide">0</td>
                            <td class="gewinngetreide">0</td>
                            <td><img src="https://i.imgur.com/a83mjFN.png" alt=""> Stockfisch</td>
                            <td class="bedarfstockfisch">0</td>
                            <td class="gewinnstockfisch">0</td>
                        </tr>
                        <tr>
                            <td><img src="https://i.imgur.com/kfeKCaL.png" alt=""> Hanf</td>
                            <td class="bedarfhanf">0</td>
                            <td class="gewinnhanf">0</td>
                            <td><img src="https://i.imgur.com/D4gunqQ.png" alt=""> Kleidung</td>
                            <td class="bedarfkleidung">0</td>
                            <td class="gewinnkleidung">0</td>
                        </tr>
                        <tr>
                            <td><img src="https://i.imgur.com/OSnri1k.png" alt=""> Wolle</td>
                            <td class="bedarfwolle">0</td>
                            <td class="gewinnwolle">0</td>
                            <td><img src="https://i.imgur.com/ruH3Re4.png" alt=""> Käse</td>
                            <td class="bedarfkäse">0</td>
                            <td class="gewinnkäse">0</td>
                        </tr>
                        <tr>
                            <td><img src="https://i.imgur.com/20TLd5n.png" alt=""> Rohmetalle</td>
                            <td class="bedarfrohmetalle">0</td>
                            <td class="gewinnrohmetalle">0</td>
                            <td><img src="https://i.imgur.com/XqSs53G.png" alt=""> Pech</td>
                            <td class="bedarfpech">0</td>
                            <td class="gewinnpech">0</td>
                        </tr>
                        <tr>
                            <td><img src="https://i.imgur.com/phOM4r3.png" alt=""> Honig</td>
                            <td class="bedarfhonig">0</td>
                            <td class="gewinnhonig">0</td>
                            <td><img src="https://i.imgur.com/tbwTJQ6.png" alt=""> Felle</td>
                            <td class="bedarffelle">0</td>
                            <td class="gewinnfelle">0</td>
                        </tr>
                        <tr>
                            <td><img src="https://i.imgur.com/bQjjiTO.png" alt=""> Salz</td>
                            <td class="bedarfsalz">0</td>
                            <td class="gewinnsalz">0</td>
                            <td><img src="https://i.imgur.com/H8pBKP5.png" alt=""> Fleisch</td>
                            <td class="bedarffleisch">0</td>
                            <td class="gewinnfleisch">0</td>
                        </tr>
                        <tr>
                            <td><img src="https://i.imgur.com/pxN89Au.png" alt=""> Metallwaren</td>
                            <td class="bedarfmetallwaren">0</td>
                            <td class="gewinnmetallwaren">0</td>
                            <td><img src="https://i.imgur.com/DuPxToK.png" alt=""> Wein</td>
                            <td class="bedarfwein">0</td>
                            <td class="gewinnwein">0</td>
                        </tr>
                        <tr>
                            <td><img src="https://i.imgur.com/F62Lf2D.png" alt=""> Met</td>
                            <td class="bedarfmet">0</td>
                            <td class="gewinnmet">0</td>
                            <td><img src="https://i.imgur.com/thkER6g.png" alt=""> Gewürze</td>
                            <td class="bedarfgewürze">0</td>
                            <td class="gewinngewürze">0</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

    </div>
    
 `;
};

export const attachPageBedarfsrechnerP4Events = () => {
  const btn = document.querySelector(".btnberechnenP4");
  btn?.addEventListener("click", (e: Event) => {
    e.preventDefault();

    const _bewohneranzahlElem =
      document.querySelector<HTMLInputElement>("#bewohneranzahl");

    const _tageElem = document.querySelector<HTMLInputElement>("#tage");

    const _konvoiElem = document.querySelector<HTMLInputElement>(".konvoi");

    const _allprofitElem =
      document.querySelector<HTMLInputElement>(".allprofit");

    // Holz
    const _bedarfholzElem =
      document.querySelector<HTMLInputElement>(".bedarfholz");
    const _bedarfholz = waren.find((m) => m.ware === "Holz")?.bedarf;
    const _gewinnholzElem =
      document.querySelector<HTMLInputElement>(".gewinnholz");
    const _gewinnholz = waren.find((m) => m.ware === "Holz")?.verkauf;

    if (
      _bewohneranzahlElem &&
      _tageElem &&
      _konvoiElem &&
      _allprofitElem &&
      _bedarfholzElem &&
      _bedarfholz &&
      _gewinnholzElem &&
      _gewinnholz
    ) {
      const bewohneranzahlElem = _bewohneranzahlElem;
      const tageElem = _tageElem;

      // Holz
      const bedarfholzElem = _bedarfholzElem;
      const bedarfholz = _bedarfholz;
      bedarfholzElem.innerHTML = String(
        Math.round(
          Number(bewohneranzahlElem.value) * bedarfholz * Number(tageElem.value)
        )
      );
      const gewinnholzElem = _gewinnholzElem;
      const gewinnholz = _gewinnholz;
      gewinnholzElem.innerHTML = String(
        Math.round(Number(bedarfholzElem.innerHTML) * gewinnholz)
      );
    }
  });
};
