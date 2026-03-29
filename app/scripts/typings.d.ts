declare module '*.scss';
declare module 'wowjs';
declare module 'jquery.easing';
declare module 'jquery-mousewheel';

interface Window {
  jQuery: JQueryStatic;
  $: JQueryStatic;
  WOW: new () => { init(): void };
}
