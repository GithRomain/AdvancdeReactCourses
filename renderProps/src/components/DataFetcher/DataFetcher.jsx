/* It fetches data from a URL and passes the loading state and data to its children */
import React, {Component} from "react"

class DataFetcher extends Component {
    /* Setting the initial state of the component. */
    state = {
        loading: false,
        data: null
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({loading: false, data}))
    }
    
    render() {
        return (
            this.props.children(this.state.loading, this.state.data)
        )
    }
}

export default DataFetcher