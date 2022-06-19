function start() {
  getImage();
  let minute = 1;
  let second = 60;

  let counter = setInterval(timer, 1000);

  function timer() {
    second--;
    second = String(second).padStart(2, '0');
    if (minute <= 0 && second <= 0) {
      clearInterval(counter);

      document.getElementById('count').innerText = '0:00';
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
  axios.post('/estimation').then((reponse) => {
    console.log(reponse.data);
    alert(reponse.data[0].area);
  });
}
