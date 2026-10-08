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


const soma1 =
  document.getElementById("soma1");

const soma2 =
  document.getElementById("soma2");

const somaResultado =
  document.getElementById("somaResultado");


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

        /*
          Retira a seleção
          dos outros objetos.
        */

        document
          .querySelectorAll(".escolha-objeto")
          .forEach(b => {

            b.classList.remove(
              "selecionado"
            );

          });


        /*
          Seleciona o objeto
          escolhido.
        */

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
   MOSTRAR DESAFIO
===================================== */

function mostrarDesafio() {

  const desafio =
    desafios[desafioAtual];


  fase.textContent =
    desafioAtual + 1;


  /*
    Cria a grade.
  */

  arranjo.innerHTML = "";


  arranjo.style.gridTemplateColumns =

    `repeat(
      ${desafio.objetosLinha},
      55px
    )`;


  /*
    Calcula a quantidade
    total de objetos.
  */

  const total =

    desafio.linhas *
    desafio.objetosLinha;


  /*
    Cria os objetos.
  */

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

  soma1.value = "";

  soma2.value = "";

  somaResultado.value = "";

  fator1.value = "";

  fator2.value = "";

  resultado.value = "";

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


  const valorSoma1 =
    Number(soma1.value);


  const valorSoma2 =
    Number(soma2.value);


  const valorSomaResultado =
    Number(
      somaResultado.value
    );


  const valorFator1 =
    Number(fator1.value);


  const valorFator2 =
    Number(fator2.value);


  const valorResultado =
    Number(resultado.value);


  /*
    Resultado correto.
  */

  const total =

    desafio.linhas *
    desafio.objetosLinha;


  /*
    Soma de parcelas iguais.

    Exemplo:

    2 linhas com 3 objetos:

    3 + 3 = 6
  */

  const somaCorreta =

    valorSoma1 ===
      desafio.objetosLinha &&

    valorSoma2 ===
      desafio.objetosLinha &&

    valorSomaResultado ===
      total;


  /*
    Linhas e colunas.
  */

  const organizacaoCorreta =

    valorLinhas ===
      desafio.linhas &&

    valorObjetos ===
      desafio.objetosLinha;


  /*
    Multiplicação.

    Aceitamos:

    2 × 3

    ou

    3 × 2
  */

  const multiplicacaoCorreta =

    (

      valorFator1 ===
        desafio.linhas &&

      valorFator2 ===
        desafio.objetosLinha

    )

    ||

    (

      valorFator1 ===
        desafio.objetosLinha &&

      valorFator2 ===
        desafio.linhas

    );


  const resultadoCorreto =

    valorResultado ===
    total;


  /*
    Verifica tudo.
  */

  if (

    organizacaoCorreta &&

    somaCorreta &&

    multiplicacaoCorreta &&

    resultadoCorreto

  ) {

    /*
      Acertou!
    */

    pontos += 10;


    pontosElemento.textContent =
      pontos;


    feedback.textContent =
      "🎉 Muito bem! Você descobriu a multiplicação!";


    explicacao.innerHTML = `

      <strong>
        🌟 Você percebeu a relação!
      </strong>

      <br><br>

      Temos
      <strong>
        ${desafio.linhas} linhas
      </strong>

      com

      <strong>
        ${desafio.objetosLinha}
        objetos em cada linha.
      </strong>

      <br><br>

      ➕ Soma de parcelas iguais:

      <strong>
        ${desafio.objetosLinha}
        +
        ${desafio.objetosLinha}
        =
        ${desafio.objetosLinha * 2}
      </strong>

      ${
        desafio.linhas > 2
        ? ` e outras ${desafio.linhas - 2} parcelas iguais.`
        : ""
      }

      <br><br>

      ✖️ Multiplicação:

      <strong>
        ${desafio.linhas}
        ×
        ${desafio.objetosLinha}
        =
        ${total}
      </strong>

      <br><br>

      🎯 Portanto, temos
      <strong>
        ${total} objetos ao todo!
      </strong>

    `;


    explicacao.hidden =
      false;


    proximo.hidden =
      false;


  } else {

    /*
      Ainda não acertou.
    */

    feedback.textContent =

      "💡 Observe novamente as linhas e os objetos. Confira cada parte da atividade.";

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


    /*
      Quando terminar todos
      os desafios, volta ao primeiro.
    */

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
