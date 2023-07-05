import schiffe from "../data/schiffe.json";
import waffen from "../data/waffen.json";

export const PageWelcome = () => {
  return /*html*/ `
<div class="page pageWelcome">
	<form action="">
		<label for="ship1">Schiff 1</label>
			<select id="ship1" name="ships">
				${schiffe.map((ship) => {
          		return `<option value="${ship.name}">${ship.name}</option>`;})}    			
  			</select>
  		<label for="ship2">Schiff 2</label>
		    <select id="ship2" name="ships">
    				${schiffe.map((ship) => {
              		return `<option value="${ship.name}">${ship.name}</option>`;})}
  			</select>
		<label for="ship3">Schiff 3</label>
		    <select id="ship3" name="ships">
    				${schiffe.map((ship) => {
              		return `<option value="${ship.name}">${ship.name}</option>`; })}
  			</select>
		<button class="btnProcess">Auswerten</button>
		<output></output>
	</form>
</div>
`;
};

export const attachPageWelcomeEvents = () => {
	const btn = document.querySelector('.btnProcess');
	btn?.addEventListener('click', (e: Event) => {
    e.preventDefault();

    const schiff1 = document.querySelector<HTMLInputElement>('#ship1');
    console.log(schiff1.value);
    const schiff2 = document.querySelector<HTMLInputElement>('#ship2');
    console.log(schiff2.value);
    const schiff3 = document.querySelector<HTMLInputElement>('#ship3');
    console.log(schiff3.value);

    console.log("button pressed");
  });
}
