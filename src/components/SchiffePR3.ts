import schiffe from "../data/Port Royale 3/schiffe.json"

export const SchiffePR3 = () => {
    let tableHtml="";

    for(const schiffeItem of schiffe){
        tableHtml += `<tr>
                        <td>${schiffeItem.name}</td>
                        <td><img src="${schiffeItem.bild}" alt=""></td>
                        <td>${schiffeItem.laderaum}</td>
                        <td>${schiffeItem.knoten}</td>
                        <td>${schiffeItem.kaufpreis}</td>
                        <td>${schiffeItem.täglichekosten}</td>
                    </tr>
                        `;
    }

    return /*html*/ `
    <div>
        <h2>Schiffe</h2>
        <section>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Bild</td>
                        <td>Laderaum</td>
                        <td>Knoten</td>
                        <td>Kaufpreis</td>
                        <td>Tägliche Kosten</td>
                    </tr>
                    
                </thead>
                <tbody>
                    ${tableHtml}
                </tbody>
            </table>
        </section>
    </div>
    `;
}