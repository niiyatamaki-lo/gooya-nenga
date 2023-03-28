/**
 * アドレスバーを含まない純粋な表示領域を取得、cssプロパティに設定
 */
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

/**
 * 初期発火関数をまとめる
 */
const init = () => {
  setFillHeight();
}

init();