/* eslint-disable */
<template>
  <div class="app">
    <personalAccount></personalAccount>
  </div>
</template>

<script>
import personalAccount from './views/exPersonalAccount';

export default {
  name: 'app',
  components: {
    personalAccount,
  },
};
</script>

<style>
html,
body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*,
*::after,
*::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

ul[class] {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  text-decoration: none;
}

html,
body {
  height: 100%;
}

.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
}

main {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}

footer {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

h1 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  color: #405d91;

  margin: 0;
}

h2 {
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  color: #405d91;
}

p {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3a373d;
}

a {
  text-decoration: none;
  color: #405d91;
}

button {
  width: 209px;
  height: 43px;
  background: #405d91;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
  cursor: pointer;
}

input {
  background: #dee2ea;
  border: none;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  padding-left: 10px;

  color: rgba(97, 90, 90, 0.7);
}

input:focus,
:active {
  outline: 5;
  outline-color: #405d91;
}
</style>
