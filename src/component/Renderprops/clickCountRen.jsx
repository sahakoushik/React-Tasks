
export default function ClickCountRen({ counter, incrementCount }) {

    return (
        <>

            <div>
                Hello
            </div>
            <button onClick={incrementCount}>Clicked {counter} times</button>
        </>
    )
}