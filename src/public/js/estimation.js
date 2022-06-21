let arr = [];
let price = [];
let count = 0;
let flag = 0;

function start() {
  getImage();
  let minute = 1;
  let second = 60;

  let counter = setInterval(timer, 1000);

  function timer() {
    second--;
    second = String(second).padStart(2, '0');
    if (minute <= 0 && second <= 0) {
      document.getElementById('count').innerText = '0:00';
      clearInterval(counter);
      // alert('탈락!');
      return;
    }

    if (second === '00') {
      minute = 0;
      second = 60;
    }

    document.getElementById('count').innerText = `${minute} : ${second}`;
  }
}

function getImage() {
  axios
    .post('/estimation')

    .then((res) => {
      arr = res.data.arr;
      const data = res.data.data;

      document.getElementById(
        'name',
      ).innerText = `< ${data.area} : ${data.title} - ${data.name} >`;
      price.push(data.price);
      document.getElementById('img').setAttribute('src', data.url);
      document.getElementById('input').style.display = 'initial';
      document.getElementById('start').style.display = 'none';
      document.getElementById('submit').style.display = 'initial';
    });
}

function check() {
  const getValue = document.getElementById('input').value;
  console.log(arr);
  if (getValue <= price[flag] + 500 && getValue >= price[flag] - 500) {
    count++;
  }
  flag++;

  axios
    .post('/getData', {
      id: arr[flag],
    })

    .then((res) => {
      const data = res.data;
      document.getElementById(
        'name',
      ).innerText = `< ${data.area} : ${data.title} - ${data.name} >`;
      price.push(data.price);
      document.getElementById('img').setAttribute('src', data.url);
    });
}
