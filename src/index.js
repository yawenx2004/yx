import $ from 'jquery';
import './style.scss';

let seconds = 0;

const counter = () => {
  $('#main').text(`you've been on this page for ${seconds} seconds.`);
  seconds += 1;
};

setInterval(counter, 1000);