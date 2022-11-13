<template>
  <footer class="footer">
    <div class="lists">
      <ul class="about">
        <h1 class="lists__title">О нас</h1>
        <a href="https://github.com/itedu-tool/exam_ticket_generator" target="_blank" class="lists__link" rel="noopener"
          >GitHub</a
        >
        <a href="https://github.com/itedu-tool/exam_ticket_generator" target="_blank" class="lists__link" rel="noopener"
          >О проекте</a
        >
      </ul>
      <ul class="language">
        <h1 class="lists__title">Язык</h1>
        <a class="lists__link">Русский</a>
        <a class="lists__link">Английский</a>
      </ul>
    </div>

    <h1 class="authors__link">
      Сервис создан сообществом на GitHub<br />"<a
        href="https://github.com/itedu-tool/exam_ticket_generator"
        target="_blank"
        rel="noopener"
        >Exam Ticket Generator</a
      >"
    </h1>
  </footer>
</template>
<script></script>
<style>
* {
  font-family: 'Inter', sans-serif;
}

.footer {
  display: flex;
  background-color: rgba(222, 226, 234, 1);
}

.lists {
  display: flex;
  margin-left: calc(1vw * 6);
}

.lists__title {
  font-size: calc(calc(1vw + 1vh) * 1.15);
  color: rgba(64, 93, 145, 1);
  margin: 0;
  margin-bottom: calc(calc(1vw + 1vh) * 0.5);
}

.lists__link {
  text-decoration: none;
  color: rgba(58, 55, 61, 1);
}

.about {
  margin-right: calc(calc(1vw + 1vh) * 4);
}

.about,
.language {
  display: flex;
  flex-direction: column;
  font-size: calc(calc(1vw + 1vh) * 0.8);
  padding: 0;
  text-align: center;
  list-style: none;
  width: calc(calc(1vw + 1vh) * 4.25);
  margin-top: 10px;
}

.authors__link {
  width: 100%;
  height: max-content;
  font-family: 'Montserrat', sans-serif;
  font-size: calc(calc(1vw + 1vh) * 0.8);
  text-align: right;
  margin-right: calc(1vw * 8);
  align-self: flex-end;
  color: rgba(58, 55, 61, 1);
  font-weight: 400;
}

h1 + .lists__link {
  margin-bottom: calc(calc(1vw + 1vh) * 0.5);
}

h1.authors__link > a {
  color: rgba(58, 55, 61, 1);
}
</style>
