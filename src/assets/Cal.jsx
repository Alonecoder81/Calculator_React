import { useState } from "react"
function Calculator() {
    const [numbers, setNumbers] = useState("")
    function Saven(ev) {
        var seven = ev.target.value
        setNumbers(numbers + seven)
    }
    function Eight(ev) {
        var eight = ev.target.value
        setNumbers(numbers + eight)
    }
    function Nine(ev) {
        var nine = ev.target.value
        setNumbers(numbers + nine)
    }
    function Four(ev) {
        var four = ev.target.value
        setNumbers(numbers + four)
    }
    function Five(ev) {
        var five = ev.target.value
        setNumbers(numbers + five)
    }
    function Six(ev) {
        var six = ev.target.value
        setNumbers(numbers + six)
    }
    function One(ev) {
        var one = ev.target.value
        setNumbers(numbers + one)
    }
    function Two(ev) {
        var two = ev.target.value
        setNumbers(numbers + two)
    }
    function Three(ev) {
        var three = ev.target.value
        setNumbers(numbers + three)
    }
    function Divide(ev) {
        var divide = ev.target.value
        setNumbers(numbers + divide)
    }
    function Multiply(ev) {
        var multiply = ev.target.value
        setNumbers(numbers + multiply)
    }
    function Subtract(ev) {
        var subtract = ev.target.value
        setNumbers(numbers + subtract)
    }
    function Addition(ev) {
        var add = ev.target.value
        setNumbers(numbers + add)
    }
    function Equal(ev) {
        setNumbers(eval(numbers))
    }
    function Double(ev){
        setNumbers(numbers+ev.target.value)
    }
    function Zero(ev){
        setNumbers(numbers+ev.target.value)
    }
    function Ace() {
        setNumbers(" ")
    }
    function Delete(ev){
        setNumbers(numbers.slice(0,-1))
    }
    function Dot(ev){
        setNumbers(numbers+ev.target.value)
    }
    return (
        <>
            <div className="container">
                <div className="calculative">
                    <form action="">
                        <div>
                            <input type="text" className="display" value={numbers} />
                        </div>
                        <div>
                            <input type="button" value="AC" onClick={Ace} />
                            <input type="button" value="DE" onClick={Delete}/>
                            <input type="button" value="." onClick={Dot}/>
                            <input type="button" value="/" onClick={Divide}/>
                        </div>
                        <div>
                            <input type="button" value="7" onClick={Saven} />
                            <input type="button" value="8" onClick={Eight} />
                            <input type="button" value="9" onClick={Nine} />
                            <input type="button" value="*" onClick={Multiply} />
                        </div>
                        <div>
                            <input type="button" value="4" onClick={Four} />
                            <input type="button" value="5" onClick={Five} />
                            <input type="button" value="6" onClick={Six} />
                            <input type="button" value="-" onClick={Subtract} />
                        </div>
                        <div>
                            <input type="button" value="1" onClick={One} />
                            <input type="button" value="2" onClick={Two} />
                            <input type="button" value="3" onClick={Three} />
                            <input type="button" value="+" onClick={Addition} />
                        </div>
                        <div>
                            <input type="button" value="00" onClick={Double} />
                            <input type="button" value="0" onClick={Zero} />
                            <input type="button" className="equal" value="=" onClick={Equal} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Calculator