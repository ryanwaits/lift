var AllLifts = React.createClass({
  getInitialState () {
    return { lifts: [] }
  },

  componentDidMount () {
    $.getJSON('/api/v1/lifts.json', (resp) => { this.setState({ lifts: resp }) })
  },

  render () {
    var lifts = this.state.lifts.map((lift) => {
      return (
        <div key={lift.id}>
            <h3>{lift.date}</h3>
            <p>{lift.name}</p>
        </div>
      )
    })
    return (
      <div>
        {lifts}
      </div>
    )
  }
})