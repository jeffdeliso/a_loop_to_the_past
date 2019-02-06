# A Loop to the Past

## Overview

A Loop to the Past is a recreation of the gameplay in A Link to the Past.  The extent of the gameplay is pressing W, A, S, and D to move your character and pressing space to swing your sword. Enemies will spawn at the edges of the screen.  You can kill enemies with your sword. If enemies collide with your character or hit you with a projectile you will loses health.  If you lose all your health you will die. 

### Functionality

* Users can press W/A/S/D to move up/left/down/right.
* Enemoies will be generated at the edge of the screen and move towards the player.
* The game ends if a player loses all their health.
* Players can swing their sword to kill enemies.
* The player will be damaged if hit by an enemy.

### Wireframes

The app will consist of a single page with a play button, a display of the controls, links to the Github repository and developer LinkedIn.

The player can move before starting the game. Upon pressing play the game starts and enemies being to spawn.

##### Technologies employed

* Vanilla JavaScript for game logic.
* HTML5 Canvas for rendering.
* Webpack to bundle various scripts into a single source.

##### Main files
* `loop.js` main structure of the canvas and center of game logic.
* `board.js` responsible for rendering the board.
* `player.js` receives input and outputs reaction and position.
* `enemy.js` handles individual enemies throughout their life-span.=

### MVPs
- [x] Basic visuals and an interactive interface.
- [x] Player can move character around the board.
- [x] Obstacles enemies and move.
- [x] Player can kill enemies with sword.
- [x] Enemies damage player.
- [x] Lossing all health causes gameover.

### Development timeline

##### Day 1:
- [x] Briefly review games using canvas from the instructional curriculum.
- [x] Complete basic page skeleton and functionality.
- [x] Complete board design and rendering.

##### Day 2:
- [x] Complete player avatar rendering and functionality.
- [x] Start enemy rendering and functionality.
- [x] Ideally finish enemy rendering and functionality.

##### Day 3:
- [x] Implement enemy/player damage.
- [x] Finish game over condition.

### Bonus features
* Bosses
* Multiply levels
* Multiplayer
