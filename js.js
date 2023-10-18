class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = targetDate.getTime();
        this.timer = null;
        this.updateTimer = this.updateTimer.bind(this);
        this.startTimer();
    }

    updateTimer() {
        const now = new Date().getTime();
        const timeDifference = this.targetDate - now;

        if (timeDifference <= 0) {
            this.stopTimer();
            document.getElementById('timer').textContent = 'Chegou o dia!';
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const formattedTime = this.formatTime(days) + ':' + this.formatTime(hours) + ':' + this.formatTime(minutes) + ':' + this.formatTime(seconds);
        document.getElementById('timer').textContent = formattedTime;
    }

    formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    startTimer() {
        this.updateTimer();
        this.timer = setInterval(this.updateTimer, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }
}

const targetDate = new Date('2023-12-30T00:00:00');
const countdown = new CountdownTimer(targetDate);
