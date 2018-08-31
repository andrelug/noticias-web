(function () {
  stickySidebar();
  initCouponCounter('#couponCounter');
  initCouponCounter('#couponCounter2');
})();

function stickySidebar() {
  new StickySidebar('#sidebar', {
    topSpacing: 20,
    bottomSpacing: 20
  });
}

function initCouponCounter(selector) {
  var element = document.querySelector(selector);
  var initialNumber = parseInt(element.innerText);
  var finalNumber = 7;

  window[selector] = setInterval(function () {
    initialNumber--;

    element.innerText = initialNumber.toString();

    if (initialNumber === finalNumber) {
      clearInterval(window[selector]);
    }
  }, 1000 * 60);

  function dataAtualFormatada() {
    var data = new Date();
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0" + dia;
    var mes = data.getMonth() + 1;
    if (mes.toString().length == 1)
      mes = "0" + mes;
    var ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  var hoje = document.getElementById('hoje');

  hoje.innerText = dataAtualFormatada();

  var atualizacaoHoje = document.getElementById('atualizacaoHoje');

  atualizacaoHoje.innerText = dataAtualFormatada();
}
