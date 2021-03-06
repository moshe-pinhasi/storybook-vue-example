import { configure } from '@storybook/vue';

import Vue from 'vue';

import "../src/assets/app.scss";

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);