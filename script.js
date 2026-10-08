/* =====================================
   DESAFIOS
===================================== */

const desafios = [

  {
    linhas: 2,
    objetosLinha: 3
  },

  {
    linhas: 3,
    objetosLinha: 4
  },

  {
    linhas: 4,
    objetosLinha: 2
  },

  {
    linhas: 3,
    objetosLinha: 5
  },

  {
    linhas: 4,
    objetosLinha: 3
  },

  {
    linhas: 5,
    objetosLinha: 4
  },

  {
    linhas: 2,
    objetosLinha: 6
  },

  {
    linhas: 4,
    objetosLinha: 5
  }

];


/* =====================================
   VARIÁVEIS
===================================== */

let desafioAtual = 0;

let pontos = 0;

let objetoSelecionado = "🍎";


/* =====================================
   ELEMENTOS
===================================== */

const arranjo =
  document.getElementById("arranjo");

const fase =
  document.getElementById("fase");

const pontosElemento =
  document.getElementById("pontos");

const feedback =
  document.getElementById("feedback");

const explicacao =
  document.getElementById("explicacao");

const proximo =
  document.getElementById("proximo");


/* =====================================
   CAMPOS
===================================== */

const linhas =
  document.getElementById("linhas");

const objetosLinha =
  document.getElementById("objetosLinha");

const somaCampos =
  document.getElementById("somaCampos");

const fator1 =
  document.getElementById("fator1");

const fator2 =
  document.getElementById("fator2");

const resultado =
  document.getElementById("resultado");


/* =====================================
   ESCOLHER OBJETO
===================================== */

document
  .querySelectorAll(".escolha-objeto")
  .forEach(botao => {

    botao.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".escolha-objeto")
          .forEach(b => {

            b.classList.remove(
              "selecionado"
            );

          });


        botao.classList.add(
          "selecionado"
        );


        objetoSelecionado =
          botao.dataset.objeto;


        mostrarDesafio();

      }

    );

  });


/* =====================================
   CRIAR OS CAMPOS DA SOMA
===================================== */

function criarSoma() {

  const desafio =
    desafios[desafioAtual];


  /*
    Limpa a soma anterior.
  */

  somaCampos.innerHTML = "";


  /*
    Cria uma caixa para cada linha.

    Exemplo:

    3 linhas

    [4] + [4] + [4]
  */

  for (
    let i = 0;
    i < desafio.linhas;
    i++
  ) {

    const campo =
      document.createElement("input");


    campo.type =
      "number";


    campo.className =
      "campo-soma";


    campo.min =
      "1";


    campo.max =
      "20";


    campo.setAttribute(
      "aria-label",
      `Parcela ${i + 1}`
    );


    somaCampos.appendChild(
      campo
    );


    /*
      Coloca o sinal de +
      entre as parcelas.
    */

    if (
      i <
      desafio.linhas - 1
    ) {

      const mais =
        document.createElement("span");


      mais.textContent =
        "+";


      somaCampos.appendChild(
        mais
      );

    }

  }


  /*
    Coloca o sinal de =
  */

  const igual =
    document.createElement("span");


  igual.textContent =
    "=";


  somaCampos.appendChild(
    igual
  );


  /*
    Campo do resultado
  */

  const campoResultado =
    document.createElement("input");


  campoResultado.type =
    "number";


  campoResultado.id =
    "somaResultado";


  campoResultado.min =
    "1";


  campoResultado.max =
    "400";


  campoResultado.setAttribute(
    "aria-label",
    "Resultado da soma"
  );


  somaCampos.appendChild(
    campoResultado
  );

}


/* =====================================
   MOSTRAR DESAFIO
===================================== */

function mostrarDesafio() {

  const desafio =
    desafios[desafioAtual];


  fase.textContent =
    desafioAtual + 1;


  /*
    Cria a organização
    dos objetos.
  */

  arranjo.innerHTML = "";


  arranjo.style.gridTemplateColumns =

    `repeat(
      ${desafio.objetosLinha},
      55px
    )`;


  const total =

    desafio.linhas *
    desafio.objetosLinha;


  for (
    let i = 0;
    i < total;
    i++
  ) {

    const objeto =
      document.createElement("div");


    objeto.className =
      "objeto";


    objeto.textContent =
      objetoSelecionado;


    arranjo.appendChild(
      objeto
    );

  }


  /*
    Cria a quantidade correta
    de parcelas.
  */

  criarSoma();


  limparCampos();


  feedback.textContent = "";

  explicacao.hidden = true;

  proximo.hidden = true;

}


/* =====================================
   LIMPAR
===================================== */

function limparCampos() {

  linhas.value = "";

  objetosLinha.value = "";

  fator1.value = "";

  fator2.value = "";

  resultado.value = "";

  /*
    Limpa todos os campos
    da soma.
  */

  document
    .querySelectorAll(".campo-soma")
    .forEach(campo => {

      campo.value = "";

    });


  const somaResultado =
    document.getElementById(
      "somaResultado"
    );


  if (somaResultado) {

    somaResultado.value = "";

  }

}


/* =====================================
   CONFERIR
===================================== */

function conferir() {

  const desafio =
    desafios[desafioAtual];


  const valorLinhas =
    Number(linhas.value);


  const valorObjetos =
    Number(
      objetosLinha.value
    );


  const valorFator1 =
    Number(fator1.value);


  const valorFator2 =
    Number(fator2.value);


  const valorResultado =
    Number(resultado.value);


  const total =

    desafio.linhas *
    desafio.objetosLinha;


  /* =====================================
     VERIFICAR LINHAS
  ===================================== */

  const organizacaoCorreta =

    valorLinhas ===
      desafio.linhas &&

    valorObjetos ===
      desafio.objetosLinha;


  /* =====================================
     VERIFICAR SOMA
  ===================================== */

  const parcelas =
    Array.from(
      document.querySelectorAll(
        ".campo-soma"
      )
    );


  /*
    Todas as parcelas devem
    ser iguais à quantidade
    de objetos por linha.
  */

  const somaCorreta =

    parcelas.length ===
      desafio.linhas &&

    parcelas.every(
      campo =>
        Number(campo.value) ===
        desafio.objetosLinha
    );


  const campoSomaResultado =
    document.getElementById(
      "somaResultado"
    );


  const resultadoSomaCorreto =

    campoSomaResultado &&

    Number(
      campoSomaResultado.value
    ) === total;


  /* =====================================
     VERIFICAR MULTIPLICAÇÃO
  ===================================== */

  /*
    Agora NÃO permitimos inverter
    os fatores.

    Queremos ensinar:

    linhas × objetos em cada linha
  */

  const multiplicacaoCorreta =

    valorFator1 ===
      desafio.linhas &&

    valorFator2 ===
      desafio.objetosLinha;


  const resultadoCorreto =

    valorResultado ===
    total;


  /* =====================================
     RESULTADO
  ===================================== */

  if (

    organizacaoCorreta &&

    somaCorreta &&

    resultadoSomaCorreto &&

    multiplicacaoCorreta &&

    resultadoCorreto

  ) {

    pontos += 10;


    pontosElemento.textContent =
      pontos;


    feedback.textContent =
      "🎉 Muito bem! Você descobriu a multiplicação!";


    explicacao.innerHTML = `

      <strong>
        🌟 Muito bem!
      </strong>

      <br><br>

      Você observou que existem

      <strong>
        ${desafio.linhas} linhas
      </strong>

      e que em cada linha existem

      <strong>
        ${desafio.objetosLinha} objetos.
      </strong>

      <br><br>

      ➕ Por isso podemos fazer:

      <br>

      <strong>
        ${Array(desafio.linhas)
          .fill(desafio.objetosLinha)
          .join(" + ")}
        =
        ${total}
      </strong>

      <br><br>

      ✖️ E podemos representar
      essa mesma ideia com:

      <br>

      <strong>
        ${desafio.linhas}
        ×
        ${desafio.objetosLinha}
        =
        ${total}
      </strong>

      <br><br>

      🎯 A multiplicação é uma maneira
      de representar uma adição de
      parcelas iguais.

    `;


    explicacao.hidden =
      false;


    proximo.hidden =
      false;


  } else {

    feedback.textContent =

      "💡 Observe novamente as linhas e os objetos e confira cada parte.";

  }

}


/* =====================================
   BOTÃO CONFERIR
===================================== */

document
  .getElementById("conferir")
  .addEventListener(
    "click",
    conferir
  );


/* =====================================
   BOTÃO LIMPAR
===================================== */

document
  .getElementById("limpar")
  .addEventListener(

    "click",

    () => {

      limparCampos();

      feedback.textContent = "";

      explicacao.hidden =
        true;

    }

  );


/* =====================================
   PRÓXIMO DESAFIO
===================================== */

proximo.addEventListener(

  "click",

  () => {

    desafioAtual++;


    if (
      desafioAtual >=
      desafios.length
    ) {

      desafioAtual = 0;

    }


    mostrarDesafio();

  }

);


/* =====================================
   INICIAR
===================================== */

mostrarDesafio();
