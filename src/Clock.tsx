

export default function Clock({ secs }: { secs: number }) {

    let seconds = secs
    const minutes = Math.floor(seconds / 60)
    seconds = seconds % 60;
    return (
        <p>
            {padZero(minutes)}:{padZero(seconds)}
        </p>
    )
}

function padZero(num: number) {
    return num.toString().padStart(2, '0');
}