function fetchAndCreatePlotlyChart(jsonFileName, divId) {
  fetch(`data/${jsonFileName}`)
    .then((response) => response.json())
    .then((pyJson) => {
      const myData = pyJson.data;
      const myLayout = pyJson.layout;
      const plot = Plotly.newPlot(divId, myData, myLayout, { responsive: true });

      // Adicionar listener para redimensionamento da janela
      window.addEventListener('resize', () => {
        // Chamar relayout para ajustar o gráfico ao novo tamanho da janela
        Plotly.relayout(divId, { width: window.innerWidth, height: window.innerHeight });
      });

      // Adicionar media query para dispositivos móveis
      const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
      mobileMediaQuery.addListener(() => {
        // Se a largura da tela for menor ou igual a 768 pixels, ajuste o layout
        if (mobileMediaQuery.matches) {
          Plotly.relayout(divId, { autosize: true });
        } else {
          // Caso contrário, restaure o layout padrão
          Plotly.relayout(divId, { autosize: false, width: window.innerWidth, height: window.innerHeight });
        }
      });

      // Retornar o objeto plot para referência futura, se necessário
      return plot;
    })
    .catch((e) => {
      console.error("Error: ", e);
      document.getElementById(divId).innerHTML = "";
    });
}

fetchAndCreatePlotlyChart('../graficos/grafico_pizza_mar.json', 'graf1');
fetchAndCreatePlotlyChart('../graficos/grafico_pizza_terra.json', 'graf2');
fetchAndCreatePlotlyChart('../graficos/grafico_pizza_terra_mar.json', 'graf3');

fetchAndCreatePlotlyChart('../graficos/grafico_barra_mar.json', 'graf4');
fetchAndCreatePlotlyChart('../graficos/grafico_barra_terra.json', 'graf5');
fetchAndCreatePlotlyChart('../graficos/grafico_barra_terra_mar.json', 'graf6');

fetchAndCreatePlotlyChart('../graficos/grafico_linha_producao_x_preco.json', 'graf7');
