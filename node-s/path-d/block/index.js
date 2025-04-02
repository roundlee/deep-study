
        window.onload = function () {
            setInterval(newTime, 1000)
            function newTime() {
                const date = new Date()
                const str = dayjs(date).format('HH:Dd:ss')
                document.getElementsByClassName('box')[0].innerText = str
            }
        }

        console.log(document.getElementsByClassName('box'));

    