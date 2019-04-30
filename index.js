const fs = require('fs')

let table = []

let robot = {
  direction: 'NORTH',
  position: [0, 4]
}

let isPlace = false

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
      isPlace = true
      const initialPos = splitCommand[1].split(',')
      robot.position[0] = initialPos[0]
      robot.position[1] = 4 - initialPos[1]
      robot.direction = initialPos[2]
      break
    case 'LEFT':
      if(!isPlace) break
      robot.direction = robot.direction === 'NORTH' ? 'WEST' : 
                        robot.direction === 'WEST' ? 'SOUTH' : 
                        robot.direction === 'SOUTH' ? 'EAST' : 'NORTH'
      break
    case 'RIGHT':
      if(!isPlace) break
      robot.direction = robot.direction === 'NORTH' ? 'WEST' : 
                        robot.direction === 'WEST' ? 'SOUTH' : 
                        robot.direction === 'SOUTH' ? 'EAST' : 'NORTH'
      break
    case 'MOVE':
      if(!isPlace) break
      switch(robot.direction) {
        case 'NORTH':
          if(robot.position[1] !== 0) robot.position[1]--
          break
        case 'EAST':
          if(robot.position[0] !== 4) robot.position[0]++
          break
        case 'SOUTH':
          if(robot.position[1] !== 4) robot.position[1]++
          break
        case 'WEST':
          if(robot.position[0] !== 0) robot.position[0]--
          break
      }
      break
    case 'REPORT':
      if(!isPlace) break
      let yPos = 4 - robot.position[1]
      console.log(`${robot.position[0]},${yPos},${robot.direction}`)
      break
  }
}