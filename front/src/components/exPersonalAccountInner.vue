<template>
  <div class="exPersonalAccount__inner">
    <div class="profile">
      <div class="profile__inner">
        <div class="profile__inner-content">
          <div class="profile__inner-img">
            <img src="../assets/img/icon-profile.svg" alt="Аватар" />
          </div>
          <div class="profile__inner-text">
            <h1>Орехов Михаил Дмитриевич</h1>
            <p>Преподаватель</p>
          </div>
        </div>
        <div class="profile__inner-exit">
          <a href="student-authorization.html">Выйти</a>
        </div>
      </div>
    </div>
    <div class="archive">
      <div class="archive__inner">
        <h1>Архив билетов</h1>
        <div class="archive__inner-options">
          <a href="#">Последние созданные билеты</a>
          <a href="#">Избранные билеты</a>
        </div>
      </div>
    </div>

    <div class="detailded-information">
      <div class="detailed-information__inner">
        <h1>Подробная информация о пользователе</h1>
        <div class="detailed-information__inner-content">
          <div class="adress">
            <div class="adress__inner">
              <p>Адрес электронной почты</p>
              <h2>*************@yandex.ru</h2>
            </div>
            <div class="adress__add">
              <p>
                Добавить дополнительный адрес<span><img src="../assets/img/icon-arrow.png" alt="стрелочка" /></span>
              </p>
            </div>
          </div>
          <div class="password">
            <div class="password__inner">
              <div class="password__inner-content">
                <div class="password__inner-show">
                  <p>Пароль</p>
                  <a href="#"><img src="../assets/img/icon-closed-eye.svg" alt="Закрытый глаз" /></a>
                </div>
                <h2>***************</h2>
              </div>

              <div class="password__change">
                <p>
                  Сменить пароль <span><img src="../assets/img/icon-arrow.png" alt="стрелочка" /></span>
                </p>
              </div>
            </div>
          </div>
          <div class="qualification">
            <div class="qualification__inner">
              <p>Квалификация</p>
              <h2>Указать...</h2>
            </div>
          </div>
          <div class="faculty">
            <div class="faculty__inner">
              <p>Факультет</p>
              <h2>Указать...</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="news__inner">
        <h1>Новости</h1>
        <div class="news__inner-paragraps">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus lacinia nisi et scelerisque.Ut a
            libero vel est sollicitudin placerat sit amet ut massa. Vestibulum vitae velit eget neque viverra sagittis
            vel sed nibh.
          </p>
          <p>Vestibulum vitae velit eget neque viverra sagittis vel sed nibh.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
/*personal account-----------*/

.exPersonalAccount__inner {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px 50px;
  align-content: space-evenly;
  margin: 5vh 0;
}

.exPersonalAccount__inner p {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  color: #3a373d;
}

.exPersonalAccount__inner h1 {
  text-align: center;
  padding-bottom: 30px;
}

.exPersonalAccount__inner h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #405d91;
}

/* Портфолио  *******************/
.profile {
  grid-area: 'profile';
}

.profile__inner {
  display: flex;
  flex-direction: column;

  width: auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 30px;
}

.profile__inner-img {
  margin-right: 35px;
}

.profile__inner-content {
  display: flex;
  justify-content: center;
}

/* .profile__inner-content p {
} */

.profile__inner-text {
  text-align: center;
}

.profile__inner-exit {
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
}

.profile__inner-exit a {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: rgba(58, 55, 61, 0.7);
}

/* Детальная информация  *******************/

.detailded-information {
  grid-area: 'info';
}

.detailed-information__inner {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: auto;

  padding: 30px;
}

.detailed-information__inner-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px 25px;
}

.detailed-information__inner-content p {
  padding-bottom: 10px;
  font-size: 22px;
}

.adress__inner {
  margin-bottom: 20px;
}

.adress__add img {
  display: inline;

  height: 30px;
  vertical-align: text-bottom;
  cursor: pointer;

  padding-left: 10px;
}

.password__inner-show img {
  display: inline;

  height: 30px;
  vertical-align: text-bottom;
  cursor: pointer;

  padding-left: 25px;
}

.password__inner-show {
  display: flex;
}

.password__inner-content {
  display: block;
  margin-bottom: 20px;
}

.password__change img {
  display: inline;

  height: 30px;
  vertical-align: text-bottom;
  cursor: pointer;

  padding-left: 10px;
}

/* Новости  *******************/
.news {
  grid-area: 'news';
}

.news__inner {
  width: auto;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 30px;
}

.news__inner-paragraps p:not(:last-child) {
  padding-bottom: 25px;
}

/* Архив************ */
.archive {
  grid-area: 'archive';
}

.archive__inner {
  width: auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
}

.archive__inner-options {
  display: flex;
  flex-wrap: wrap;
}

.archive__inner-options a {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-decoration-line: underline;

  color: #3a373d;
}

.archive__inner-options a:not(:last-child) {
  padding-bottom: 25px;
}
</style>
