const wrap = document.querySelector('.wrap');

for(let i = 2 ; i < 10 ; i++){
  const mclBox = document.createElement('div');
  mclBox.setAttribute('class','box mcl-box');
  mclBox.setAttribute('id',`mclBox-${i}`);
  wrap.appendChild(mclBox);
  const mclTitle = document.createElement('div');
  mclTitle.setAttribute('class','mcl-title');
  mclTitle.textContent = i;
  const getMclBox = document.querySelector(`#mclBox-${i}`);
  getMclBox.appendChild(mclTitle);
  for(let k = 1 ; k < 10 ; k++ ){
    const answer = i*k;
    const mclItem = document.createElement('div');
    mclItem.setAttribute('class','mcl-item');
    mclItem.textContent = `${i} x ${k} = ${answer}`;
    getMclBox.appendChild(mclItem);
  }
}
