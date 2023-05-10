import ArriveItem from "../arrive-item/arrive-item"

const Help = () => {
    return (
        <>
        <p>The information you can see bellow is an example</p>
        <ArriveItem arrive={{line: 'Sample Line', estimateArrive: 180, destination: 'Sample destiny'}}/>
        </>
    )
}

export default Help