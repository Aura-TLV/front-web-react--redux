const ConfirmationCode = () => {
    return (

        <form>
            <div className="col-md-12">
                <input id="code" maxLength={6} />
                <button type="submit">Enter code</button>
            </div>
        </form>

    )
}

export default ConfirmationCode