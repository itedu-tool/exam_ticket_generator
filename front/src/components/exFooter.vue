/* eslint-disable */
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__info">
          <div class="footer__info-section">
            <h2>О нас</h2>
            <p><a href="#">О проекте</a></p>
            <p><a href="#">GitHub</a></p>
          </div>
          <div class="footer__info-section">
            <h2>Язык</h2>
            <p><a href="#">Русский</a></p>
            <p><a href="#">Английский</a></p>
          </div>
        </div>
        <div class="footer__autors">
          <p>
            Сервис создан сообществом на GitHub <br />
            <a href="#">“Exam Ticket Generator”</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'exFooter',
};
</script>

<style>
.footer {
  background: #dee2ea;
  border: 3px solid #cfcfcf;
}

.footer__inner {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}

.footer__info {
  display: flex;
}

.footer__info a {
  color: #3a373d;
}

.footer__info-section:not(:last-child) {
  margin-right: 100px;
}

.footer__autors {
  display: flex;
  align-self: flex-end;
}

.footer__autors a {
  text-decoration: underline;
  color: #3a373d;
}
</style>
