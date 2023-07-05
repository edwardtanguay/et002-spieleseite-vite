import schiffe from "../data/schiffe.json";
import waffen from "../data/waffen.json";

export const PageWelcome = () => {
  return /*html*/ `
<div class="page pageWelcome">
	<form action="">
		<label for="ship1">Schiff 1</label>
			<select id="ship1" name="ships">
				${schiffe.map((ship) => {
          return `<option value="${ship.name}">${ship.name}</option>`;
        })}    			
  			</select>
  		<label for="ship2">Schiff 2</label>
		    <select id="ship2" name="ships">
    				${schiffe.map((ship) => {
              return `<option value="${ship.name}">${ship.name}</option>`;
            })}
  			</select>
		<label for="ship3">Schiff 3</label>
		    <select id="ship3" name="ships">
    				${schiffe.map((ship) => {
              return `<option value="${ship.name}">${ship.name}</option>`;
            })}
  			</select>
		<button class="btnProcess">Auswerten</button>		
	</form>
	<section>
		<div class="card">
			<h2>0</h2>
			<div class="title">Matrosen</div>
		</div>
		<div class="card">
			<h2>0</h2>
			<div class="title">Säbel</div>
		</div>
		<div class="card">
			<h2>0</h2>
			<div class="title">Musketen</div>
		</div>
	</section>
</div>
`;
};

export const attachPageWelcomeEvents = () => {
	const btn = document.querySelector('.btnProcess');
	btn?.addEventListener('click', (e: Event) => {
    e.preventDefault();

    const schiff1Elem = document.querySelector<HTMLInputElement>('#ship1');
    const schiff2Elem = document.querySelector<HTMLInputElement>("#ship2");
    const schiff3Elem = document.querySelector<HTMLInputElement>("#ship3");
	const men1 = schiffe.find((m) => m.name === schiff1Elem?.value)?.amount;
	const men2 = schiffe.find((m) => m.name === schiff2Elem?.value)?.amount;
	const men3 = schiffe.find((m) => m.name === schiff3Elem?.value)?.amount;
	console.log(men1,men2,men3);
  });
}
