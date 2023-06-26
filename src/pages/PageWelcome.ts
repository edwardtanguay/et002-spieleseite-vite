import schiffe from "../data/schiffe.json";
import waffen from "../data/waffen.json";

export const PageWelcome = () => {
  return /*html*/ `
<div class="page pageWelcome">
	<form action="">
		<label for="ship1">Schiff 1</label>
			<select id="ships" name="ships">
				${schiffe.map((ship) => {
          		return `<option value="${ship.name}">${ship.name}</option>`;})}    			
  			</select>
  		<label for="ship2">Schiff 2</label>
		    <select id="ships" name="ships">
    				${schiffe.map((ship) => {
              		return `<option value="${ship.name}">${ship.name}</option>`;})}
  			</select>
		<label for="ship3">Schiff 3</label>
		    <select id="ships" name="ships">
    				${schiffe.map((ship) => {
              		return `<option value="${ship.name}">${ship.name}</option>`; })}
  			</select>
		<button>Auswerten</button>	
	</form>
</div>
`;
};
