/* =====================================
   DESAFIOS
===================================== */

const desafios = [

  { linhas: 2, objetosLinha: 3 },
  { linhas: 3, objetosLinha: 4 },
  { linhas: 4, objetosLinha: 2 },
  { linhas: 3, objetosLinha: 5 },
  { linhas: 4, objetosLinha: 3 },

  { linhas: 5, objetosLinha: 4 },
  { linhas: 2, objetosLinha: 6 },
  { linhas: 4, objetosLinha: 5 },
  { linhas: 5, objetosLinha: 3 },
  { linhas: 3, objetosLinha: 6 },

  { linhas: 2, objetosLinha: 7 },
  { linhas: 5, objetosLinha: 5 },
  { linhas: 4, objetosLinha: 6 },
  { linhas: 3, objetosLinha: 7 },
  { linhas: 5, objetosLinha: 6 }

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
   CRIAR SOMA
===================================== */

function criarSoma() {

  const desafio =
    desafios[desafioAtual];

  somaCampos.innerHTML = "";


  for (
    let i = 0;
    i < desafio.linhas;
    i++
  ) {

    const campo =
      document.createElement("input");

    campo.type = "number";

    campo.className =
      "campo-soma";

    campo.min = "1";

    campo.max = "20";

    campo.setAttribute(
      "aria-label",
      `Parcela ${i + 1}`
    );

    somaCampos.appendChild(
      campo
    );


    if (
      i <
      desafio.linhas - 1
    ) {

      const mais =
        document.createElement("span");

      mais.textContent = "+";

      somaCampos.appendChild(
        mais
      );

    }

  }


  const igual =
    document.createElement("span");

  igual.textContent = "=";

  somaCampos.appendChild(
    igual
  );


  const campoResultado =
    document.createElement("input");

  campoResultado.type =
    "number";

  campoResultado.id =
    "somaResultado";

  campoResultado.min = "1";

  campoResultado.max = "400";

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
     ORGANIZAÇÃO
  ===================================== */

  const organizacaoCorreta =

    valorLinhas ===
      desafio.linhas &&

    valorObjetos ===
      desafio.objetosLinha;


  /* =====================================
     SOMA
  ===================================== */

  const parcelas =
    Array.from(
      document.querySelectorAll(
        ".campo-soma"
      )
    );


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
     MULTIPLICAÇÃO
  ===================================== */

  const multiplicacaoCorreta =

    valorFator1 ===
      desafio.linhas &&

    valorFator2 ===
      desafio.objetosLinha;


  const resultadoCorreto =

    valorResultado ===
    total;


  /* =====================================
     VERIFICAR
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
      "🎉 Muito bem! Você acertou!";


    explicacao.innerHTML = `

      <strong>
        🌟 Excelente!
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

      <br>

      <strong>
        ${Array(desafio.linhas)
          .fill(desafio.objetosLinha)
          .join(" + ")}
        =
        ${total}
      </strong>

      <br><br>

      ✖️ Multiplicação:

      <br>

      <strong>
        ${desafio.linhas}
        ×
        ${desafio.objetosLinha}
        =
        ${total}
      </strong>

      <br><br>

      🎯 As duas formas representam
      a mesma quantidade!

    `;


    explicacao.hidden =
      false;


    /*
      Verifica se foi o
      último desafio.
    */

    if (
      desafioAtual ===
      desafios.length - 1
    ) {

      mostrarFinal();

    } else {

      proximo.hidden =
        false;

    }


  } else {

    feedback.textContent =

      "💡 Observe novamente as linhas e os objetos e confira cada parte.";

  }

}


/* =====================================
   TELA FINAL
===================================== */

function mostrarFinal() {

  arranjo.innerHTML = "";


  document
    .querySelector(".atividade")
    .style.display = "none";


  /*
    Esconde todas as atividades.
  */

  document
    .querySelectorAll(".atividade")
    .forEach(secao => {

      secao.style.display = "none";

    });


  feedback.innerHTML = `

    <div class="final-jogo">

      <div class="trofeu">
        🏆
      </div>

      <h2>
        Parabéns!
      </h2>

      <p>
        Você terminou todos os
        <strong>15 desafios!</strong>
      </p>

      <div class="pontuacao-final">

        ⭐ ${pontos} pontos

      </div>

      <p>
        Você descobriu que a
        multiplicação pode representar
        uma adição de parcelas iguais.
      </p>

      <button
        id="jogarNovamente"
        class="jogar-novamente"
      >
        🔄 Jogar novamente
      </button>

    </div>

  `;


  proximo.hidden = true;


  document
    .getElementById(
      "jogarNovamente"
    )
    .addEventListener(
      "click",
      reiniciarJogo
    );

}


/* =====================================
   REINICIAR
===================================== */

function reiniciarJogo() {

  desafioAtual = 0;

  pontos = 0;

  pontosElemento.textContent =
    pontos;


  document
    .querySelectorAll(".atividade")
    .forEach(secao => {

      secao.style.display = "block";

    });


  feedback.innerHTML = "";

  explicacao.hidden = true;

  mostrarDesafio();

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

    mostrarDesafio();

  }

);


/* =====================================
   INICIAR
===================================== */

mostrarDesafio();
