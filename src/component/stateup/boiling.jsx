export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p>Water boils</p>
    } else
        return <p>not boil</p>
}