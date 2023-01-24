const general = {
  data: [
    [
      '1',
      '349,609,325.64',
      '3,496,093.25',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '353,105,418.89',
      'Lunas',
      'Induk',
    ],
    [
      '1',
      '349,609,325.64',
      '3,496,093.25',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '353,105,418.89',
      'Lunas',
      'Induk',
    ],
    [
      '2',
      '0.00',
      '0.00',
      '0.00',
      '4,552,556.40',
      '0.00',
      '0.00',
      '0.00',
      '4,552,556.40',
      'Lunas',
      'Denda Restruktur Covid',
    ],
    [
      '3',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '21,448,039.12',
      '0.00',
      '21,448,039.12',
      'Lunas',
      'Restruktur Covid',
    ],
    [
      '4',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '21,448,039.12',
      '0.00',
      '21,448,039.12',
      'Lunas',
      'Restruktur Covid',
    ],
    [
      'Total',
      '349,609,325.64',
      '3,496,093.25',
      '0.00',
      '4,552,556.40',
      '0.00',
      '21,448,039.12',
      '0.00',
      '379,106,014.41',
      '-',
      '-',
    ],
  ],
};

const sisa = {
  data: [
    [
      '1',
      '10,000.00',
      '79.98',
      '5,000.00',
      '100.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '15,000.00',
      'Sisa Kewajiban',
    ],
    [
      '2',
      '20,000.00',
      '79.98',
      '4,000.00',
      '100.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '24,000.00',
      'Sisa Kewajiban',
    ],
    [
      '3',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '50,000.00',
      '100.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '50,000.00',
      'Sisa Kewajiban',
    ],
    [
      '4',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '8,000.00',
      '100.00',
      '0.00',
      '0.00',
      '8,000.00',
      'Sisa Kewajiban',
    ],
    [
      '5',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '0.00',
      '12,000.00',
      '100.00',
      '0.00',
      '0.00',
      '12,000.00',
      'Sisa Kewajiban',
    ],
    [
      'Total',
      '30,000.00',
      '79.98',
      '9,0000.00',
      '100.00',
      '0.00',
      '0.00',
      '50,000.00',
      '100.00',
      '0.00',
      '0.00',
      '20,000.00',
      '100.00',
      '0.00',
      '0.00',
      '109,000.00',
      '-',
    ],
  ],
};

let newDataGeneral = sisa.data.map((innerArr) =>
  innerArr.filter((elem, index) => index == 0 || index % 2 == 1)
);

for (let i = 0; i < newDataGeneral.length; i++) {
  newDataGeneral[i].push(general.data[i][9]);
  newDataGeneral[i].push(general.data[i][10]);
}

$('#general').DataTable({
  data: newDataGeneral,
});

const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

const hitungPokok = (nominal, target, total, pembagi) => {
  let newArr = [];
  let persen = [];
  let cutloss = [];
  let persenCutloss = [];
  let sisa = nominal - total;
  let grandPersen = '0.00';
  let grandPersenCutloss = '0.00';
  if (pembagi > 1) {
    for (let i = 0; i < target.length; i++) {
      let nilai = parseInt(target[i]);
      if (nominal > 0) {
        if (nilai > 0) {
          if (sisa <= 0) {
            newArr.push(((nilai / total) * nominal).toFixed(2));
            persen.push(((nominal / total) * 100).toFixed(2));
            grandPersen = ((nominal / total) * 100).toFixed(2);
            cutloss.push(nilai - ((nilai / total) * nominal).toFixed(2));
            persenCutloss.push(100 - ((nominal / total) * 100).toFixed(2));
            grandPersenCutloss = 100 - ((nominal / total) * 100).toFixed(2);
          } else {
            newArr.push((nilai / total) * total);
            persen.push('100.00');
            grandPersen = '100.00';
            cutloss.push('0.00');
            if (nilai > 0) {
              persenCutloss.push('0.00');
            } else {
              persenCutloss.push('100.00');
            }
            grandPersenCutloss = '100.00';
          }
        } else {
          newArr.push('0.00');
          persen.push('0.00');
          cutloss.push('0.00');
          persenCutloss.push('0.00');
        }
      } else {
        newArr.push('0.00');
        persen.push('0.00');
        cutloss.push(nilai);
        if (nilai > 0) {
          persenCutloss.push('100.00');
          grandPersenCutloss = '100.00';
        } else {
          persenCutloss.push('0.00');
        }
      }
    }
  } else {
    for (let i = 0; i < target.length; i++) {
      let nilai = parseInt(target[i]);
      if (nominal > 0) {
        if (nilai > 0) {
          if (sisa <= 0) {
            newArr.push(nominal);
            persen.push(((nominal / nilai) * 100).toFixed(2));
            grandPersen = ((nominal / nilai) * 100).toFixed(2);
            cutloss.push(nilai - nominal);
            persenCutloss.push(100 - ((nominal / nilai) * 100).toFixed(2));
            grandPersenCutloss = 100 - ((nominal / nilai) * 100).toFixed(2);
          } else {
            newArr.push((nilai / total) * total);
            persen.push('100.00');
            grandPersen = '100.00';
            cutloss.push('0.00');
            persenCutloss.push('0.00');
            grandPersenCutloss = '0.00';
          }
        } else {
          newArr.push('0.00');
          persen.push('0.00');
          cutloss.push('0.00');
          if (nilai > 0) {
            persenCutloss.push('100.00');
            grandPersenCutloss = '100.00';
          } else {
            persenCutloss.push('0.00');
          }
        }
      } else {
        newArr.push('0.00');
        persen.push('0.00');
        cutloss.push(nilai);
        if (nilai > 0) {
          persenCutloss.push('100.00');
          grandPersenCutloss = '100.00';
        } else {
          persenCutloss.push('0.00');
        }
      }
    }
  }
  // push grand Total
  if (nominal <= 0) {
    newArr.push('0.00');
    cutloss.push(`${total}`);
  } else if (nominal <= total) {
    newArr.push(nominal);
    cutloss.push(total - nominal);
  } else {
    newArr.push(total);
    cutloss.push('0.00');
    grandPersenCutloss = '0.00';
  }
  persen.push(grandPersen);
  persenCutloss.push(grandPersenCutloss);

  return { target: newArr, persen: persen, cutloss, persenCutloss, sisa: sisa };
};
const hitung = (nominal) => {
  let sisa = 0;
  const pembayaran = [];
  const cutloss = [];
  const pokok = [];
  let nilaiPokok = 0;
  let pembagiPokok = 0;
  const fasBunga = [];
  let nilaiFasBunga = 0;
  let pembagiFasBunga = 0;
  const fasDenda = [];
  let nilaiFasDenda = 0;
  let pembagiFasDenda = 0;
  const tgkBunga = [];
  let nilaiTgkBunga = 0;
  let pembagiTgkBunga = 0;
  const tgkDenda = [];
  let nilaiTgkDenda = 0;
  let pembagiTgkDenda = 0;
  const tgkPinalti = [];
  let nilaiTgkPinalti = 0;
  let pembagiTgkPinalti = 0;
  const tgkLain = [];
  let nilaiTgkLain = 0;
  let pembagiTgkLain = 0;
  for (let a = 0; a < newDataGeneral.length - 1; a++) {
    for (let i = 0; i < newDataGeneral[a].length; i++) {
      let nilai = newDataGeneral[a][i].replaceAll(',', '');
      //pisahin pokok, fas bunga dan fas denda
      if (i == 1) {
        pokok.push(parseInt(nilai));
        if (parseInt(nilai) > 0) {
          nilaiPokok = nilaiPokok + parseInt(nilai);
          pembagiPokok = pembagiPokok + 1;
        }
      } else if (i == 6) {
        fasBunga.push(nilai);
        if (parseInt(nilai) > 0) {
          nilaiFasBunga = nilaiFasBunga + parseInt(nilai);
          pembagiFasBunga = pembagiFasBunga + 1;
        }
      } else if (i == 4) {
        fasDenda.push(nilai);
        // pake if
        if (parseInt(nilai) > 0) {
          nilaiFasDenda = nilaiFasDenda + parseInt(nilai);
          pembagiFasDenda = pembagiFasDenda + 1;
        }
      } else if (i == 2) {
        tgkBunga.push(nilai);
        if (parseInt(nilai) > 0) {
          nilaiTgkBunga = nilaiTgkBunga + parseInt(nilai);
          pembagiTgkBunga = pembagiTgkBunga + 1;
        }
      } else if (i == 3) {
        tgkDenda.push(nilai);
        nilaiTgkDenda = nilaiTgkDenda + parseInt(nilai);
        pembagiTgkDenda = pembagiTgkDenda + 1;
      } else if (i == 5) {
        tgkPinalti.push(nilai);
      } else if (i == 7) {
        tgkLain.push(nilai);
      }

      if (i == 0) {
        pembayaran.push(nilai);
        cutloss.push(nilai);
        //pengecekan kolom yang akan dihitung
      }
    }
    pembayaran.push(0);
    cutloss.push(0);
  }
  //kolom pokok
  // ==========================================
  const hasilPokok = hitungPokok(nominal, pokok, nilaiPokok, pembagiPokok);
  sisa = hasilPokok.sisa;
  // kolom tunggakan fasilitas bunga
  // ==========================================
  const hasilFasBunga = hitungPokok(
    sisa,
    fasBunga,
    nilaiFasBunga,
    pembagiFasBunga
  );
  sisa = hasilFasBunga.sisa;
  // kolom tunggakan bunga
  // ==========================================
  const hasilTgkBunga = hitungPokok(
    sisa,
    tgkBunga,
    nilaiTgkBunga,
    pembagiTgkBunga
  );
  sisa = hasilTgkBunga.sisa;
  // kolom tunggakan denda
  // ==========================================
  const hasilTgkDenda = hitungPokok(
    sisa,
    tgkDenda,
    nilaiTgkDenda,
    pembagiTgkDenda
  );
  sisa = hasilTgkDenda.sisa;
  // kolom tunggakan Fasilitas Denda
  // ==========================================
  const hasilFasDenda = hitungPokok(
    sisa,
    fasDenda,
    nilaiFasDenda,
    pembagiFasDenda
  );
  sisa = hasilFasDenda.sisa;
  // kolom tunggakan pinalti
  // ==========================================
  const hasilTgkPinalti = hitungPokok(
    sisa,
    tgkPinalti,
    nilaiTgkPinalti,
    pembagiTgkPinalti
  );
  sisa = hasilTgkPinalti.sisa;
  // kolom tunggakan lain
  // ==========================================
  const hasilTgkLain = hitungPokok(sisa, tgkLain, nilaiTgkLain, pembagiTgkLain);
  sisa = hasilTgkLain.sisa;
  console.log({
    hasilPokok,
    hasilTgkBunga,
    hasilFasBunga,
    hasilTgkDenda,
    hasilFasDenda,
    sisa,
  });
  let newDataa = [];
  let newDataaCutloss = [];
  for (let i = 0; i < hasilPokok.target.length; i++) {
    let innerArr = [];
    let innerArrCutloss = [];
    innerArr.push(
      hasilPokok.target[i],
      hasilPokok.persen[i],
      hasilTgkBunga.target[i],
      hasilTgkBunga.persen[i],
      hasilTgkDenda.target[i],
      hasilTgkDenda.persen[i],
      hasilFasDenda.target[i],
      hasilFasDenda.persen[i],
      hasilTgkPinalti.target[i],
      hasilTgkPinalti.persen[i],
      hasilFasBunga.target[i],
      hasilFasBunga.persen[i],
      hasilTgkLain.target[i],
      hasilTgkLain.persen[i]
    );
    innerArrCutloss.push(
      hasilPokok.cutloss[i],
      hasilPokok.persenCutloss[i],
      hasilTgkBunga.cutloss[i],
      hasilTgkBunga.persenCutloss[i],
      hasilTgkDenda.cutloss[i],
      hasilTgkDenda.persenCutloss[i],
      hasilFasDenda.cutloss[i],
      hasilFasDenda.persenCutloss[i],
      hasilTgkPinalti.cutloss[i],
      hasilTgkPinalti.persenCutloss[i],
      hasilFasBunga.cutloss[i],
      hasilFasBunga.persenCutloss[i],
      hasilTgkLain.cutloss[i],
      hasilTgkLain.persenCutloss[i]
    );
    newDataa.push(innerArr);
    newDataaCutloss.push(innerArrCutloss);
  }
  for (let i = 0; i < newDataa.length; i++) {
    if (i == newDataa.length - 1) {
      newDataa[i].splice(0, 0, 'Total');
      newDataaCutloss[i].splice(0, 0, 'Total');
    } else {
      newDataa[i].splice(0, 0, i + 1);
      newDataaCutloss[i].splice(0, 0, i + 1);
    }
  }

  for (let i = 0; i < newDataa.length; i++) {
    let total = 0;
    let totalCutloss = 0;
    for (let a = 0; a < newDataa[i].length; a++) {
      if (a % 2 == 1) {
        total = total + parseInt(newDataa[i][a]);
        totalCutloss = totalCutloss + parseInt(newDataaCutloss[i][a]);
      }
    }
    newDataa[i].push(rupiah(total));
    newDataaCutloss[i].push(rupiah(totalCutloss));
  }

  let dataCutloss = [];
  for (let i = 0; i < cutloss.length; i += 16) {
    dataCutloss.push(cutloss.slice(i, i + 16));
  }
  for (let i = 0; i < dataCutloss.length; i++) {
    let total = 0;
    for (let a = 0; a < dataCutloss[i].length; a++) {
      if (a % 2 == 1) {
        total = total + parseInt(dataCutloss[i][a]);
      }
    }
    dataCutloss[i][dataCutloss[i].length - 1] = total;
  }

  let nominalQ = ['Total'];
  for (let i = 1; i < dataCutloss[0].length; i++) {
    let subTotal = 0;
    for (let sub = 0; sub < dataCutloss.length; sub++) {
      subTotal = subTotal + parseInt(dataCutloss[sub][i]);
    }
    nominalQ.push(subTotal);
  }
  dataCutloss.push(nominalQ);

  //refresh table
  $('#repayment')
    .DataTable
    // {
    // paging: false,
    // ordering: false,
    // searching: false,
    // }
    ()
    .clear()
    .rows.add(newDataa)
    .draw();
  $('#cutloss')
    .DataTable
    // {
    // paging: false,
    // ordering: false,
    // searching: false,
    // }
    ()
    .clear()
    .rows.add(newDataaCutloss)
    .draw();
  document.querySelector('#hidden_cutloss').value = newDataaCutloss;
  console.log(newDataaCutloss);
};

document.querySelector('#nominal').addEventListener('change', function () {
  let bayar = this.value;
  hitung(bayar);
});
