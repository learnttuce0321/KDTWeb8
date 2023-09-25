import './SassComponent.scss'
export default function SassComponent() {
    return(
        <>
            <div className ="SassComponent">
            <div className="box red"></div>
            <div className="box orange"></div>
            <div className="box yellow"></div>
            {/* <div className="box green"></div>
            <div className="box skyblue"></div>
            <div className="box navy"></div>
            <div className="box purple"></div> */}
        </div>

        <div className="parent">
        <div className="eye"></div>
            <div className="e2"></div>
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
        </div>
        </>
    )
}