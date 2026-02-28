function salva() {
  const nik = document.getElementById('nik').value.trim();
  const sogno = document.getElementById('sogno').value.trim();
  const descrizione = document.getElementById('descrizione').value.trim();
  const img = document.getElementById('img').value.trim();

  if (!nik || !sogno) {
    alert('Compila nik e sogno');
    return;
  }

  const data = JSON.parse(localStorage.getItem('sogni') || '[]');
  data.push({ nik, sogno, descrizione, img, fatto: false });
  localStorage.setItem('sogni', JSON.stringify(data));

  document.getElementById('sogno').value = '';
  document.getElementById('descrizione').value = '';
  document.getElementById('img').value = '';

  render();
}

function render() {
  const data = JSON.parse(localStorage.getItem('sogni') || '[]');
  const lista = document.getElementById('lista');
  const realizzati = document.getElementById('realizzati');

  lista.innerHTML = '';
  realizzati.innerHTML = '';

  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
      <strong>${item.nik}</strong><br>
      <em>${item.sogno}</em><br>
      <p>${item.descrizione || ''}</p>
    `;

    if (item.img) {
      const img = document.createElement('img');
      img.src = item.img;
      div.appendChild(img);
    }

    const btn = document.createElement('button');
    btn.textContent = item.fatto ? 'Torna da completare' : 'Segna come realizzato';
    btn.onclick = () => {
      data[index].fatto = !data[index].fatto;
      localStorage.setItem('sogni', JSON.stringify(data));
      render();
    };

    div.appendChild(btn);

    if (item.fatto) realizzati.appendChild(div);
    else lista.appendChild(div);
  });
}

render();
