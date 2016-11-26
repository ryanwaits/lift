var NewLift = React.createClass({
  addLift() {
    var date = this.refs.date.value;
    var name = this.refs.name.value;
    var weight = this.refs.weight.value;
    var sets = this.refs.sets.value;
    var reps = this.refs.reps.value;
    $.ajax({
      url: '/api/v1/lifts',
      type: 'POST',
      data: { lift: { date: date, name: name, weight_lifted: weight, sets: sets, reps: reps } },
      success: (lift) => {
        console.log("Added!", lift)
      }
    })
  },

  render () {
    return (
      <div>
        <input ref='date' placeholder='Date of workout' />
        <input ref='name' placeholder='Enter workout' />
        <input ref='weight' placeholder='Weight lifted' />
        <input ref='sets' placeholder='Sets' />
        <input ref='reps' placeholder='Reps' />
        <button onClick={this.addLift}>Submit</button>
      </div>
    )
  } 
})