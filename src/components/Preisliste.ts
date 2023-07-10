import waren from "../data/waren.json";

export const Preisliste = () => {
    let tableHtml="";

    tableHtml += `<tr>
						<td>Holz</td>
						<td>39</td>
						<td>60</td>
                        <td>Stadt</td>
					</tr>`;
  return /*html*/ `
  <div>
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
					${tableHtml}
					
				</tbody>
			</table>
		</section>
	</div>
  `;
};
