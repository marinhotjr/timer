function eWatch() {
  const bigben = document.querySelector('.bigben')
  const start = document.querySelector('.iniciar')
  const pause = document.querySelector('.pausar')
  const zero = document.querySelector('.zerar')

  let sec = 0
  let timer

  function initTimer(seconds = 0) {
    // converte segundos em milisegundos
    const data = new Date(seconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
  }

  function startTimer() {
    timer = setInterval(function() {
      sec++
      bigben.innerHTML = initTimer(sec)
    }, 1000)
  }

  document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('iniciar')) {
      bigben.classList.remove('paused')
      bigben.classList.add('start')
      clearInterval(timer)
      startTimer()
    }
    if (el.classList.contains('pausar')) {
      bigben.classList.remove('start')
      bigben.classList.add('paused')
      clearInterval(timer)
    }
    if (el.classList.contains('zerar')) {
      bigben.classList.remove('start')
      bigben.classList.remove('paused')
      clearInterval(timer)
      sec = 0
      bigben.innerHTML = '00:00:00'
    }
  })
}

eWatch()
