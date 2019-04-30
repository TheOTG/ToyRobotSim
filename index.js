const fs = require('fs')

let table = []
let direction = 'NORTH'
let position = [0, 4]

for(let i = 0; i < 5; i ++) {
  let temp = [0, 0, 0, 0, 0]
  table.push(temp)
}

const readCommands = fs.readFileSync('./input.txt', 'utf-8')
const commands = readCommands.split('\n')

// console.log(commands)

for(let i = 0; i < commands.length; i++) {
  const splitCommand = commands[i].split(' ')
  switch(splitCommand[0]) {
    case 'PLACE':
      const initialPos = splitCommand[1].split(',')
      position[0] = initialPos[0]
      position[1] = 4 - initialPos[1]
      direction = initialPos[2]
      break
    case 'LEFT':
      direction = direction === 'NORTH' ? 'WEST' : 
                  direction === 'WEST' ? 'SOUTH' : 
                  direction === 'SOUTH' ? 'EAST' : 'NORTH'
      break
    case 'RIGHT':
      direction = direction === 'NORTH' ? 'WEST' : 
                  direction === 'WEST' ? 'SOUTH' : 
                  direction === 'SOUTH' ? 'EAST' : 'NORTH'
      break
    case 'MOVE':
      switch(direction) {
        case 'NORTH':
          position[1]--
          break
        case 'EAST':
          position[0]++
          break
        case 'SOUTH':
          position[1]++
          break
        case 'WEST':
          position[0]--
          break
      }
      break
    case 'REPORT':
      let yPos = 4 - position[1]
      console.log(`${position[0]},${yPos},${direction}`)
      break
  }
}