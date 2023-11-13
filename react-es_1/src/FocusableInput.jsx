import { useEffect, useRef } from "react"

export function FocusableInput() {

    const inputRef = useRef(null)
    const renderingRef = useRef(false)

    useEffect(() => {
        if (!renderingRef.current) {
            renderingRef.current = true
            console.log("Montato una volta")
        } else {
            console.log("Montato due volte")
        }
        inputRef.current?.focus()
    }, [])

    return (
        <input ref={inputRef} type="text" />
    )
}