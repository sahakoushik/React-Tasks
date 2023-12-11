function HookButton({ handelChange, children }) {
    return (
        <div>
            <button type="button" onClick={handelChange}>
                {children}
            </button>
        </div>

    )
}

export default HookButton