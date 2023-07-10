import waren from "../data/waren.json";

export const Preisliste = () => {
    let tableHtml="";

    for(const warenItem of waren){
            tableHtml += `<tr>
						<td>${warenItem.name}</td>
						<td>${warenItem.ankauf}</td>
						<td>${warenItem.verkauf}</td>
                        <td>${warenItem.herstadt.join(", ")}</td>
					</tr>`;
    }


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
