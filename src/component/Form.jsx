import React from 'react'

export default class Form extends React.Component {
    state = {
        title: "Name",
        textarea: "This is a text area",
        select: "React"
    }
    handleChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        if (e.target.type === "text") {

            this.setState({
                title: e.target.value
            });
        } else if (e.target.type === "textarea") {

            this.setState({
                textarea: e.target.value
            })
        } else if (e.target.type === "select-one") {

            this.setState({
                select: e.target.value
            })
        } else {
            console.log(e.target.type)
        }
    }
    render() {
        const { title, textarea, select } = this.state
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="enter"
                        value={title}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <br />
                    <textarea
                        name="textarea"
                        onChange={this.handleChange}
                        value={textarea}>

                    </textarea>
                    <br />
                    <br />
                    <br />
                    <select value={select} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </form>
            </div>
        )
    }
}