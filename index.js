class Driver {
  constructor(name, day) {
    this.name = name
    this.startDate = new Date(Date.parse(day))
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }

}

class Route{
  constructor(begin, end){
    this.beginningLocation = begin
    this.endingLocation = end
  }

  blocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    let horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    return vertical + horizontal
  }

  estimatedTime(peakTrueFalse) {
    if (peakTrueFalse){
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3
    }
  }
}
