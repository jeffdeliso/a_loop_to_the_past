# A Loop to the Past

[Live Site](http://www.jeffdeliso.com/a_loop_to_the_past/)

![alt text](https://s3.amazonaws.com/discors-dev/loop.jpg# Features and Implementation)

## Overview

A Loop to the Past is 2-D combat game inspired by The Legend of Zelda: A Link to the Past.  The player fights of waves of enemies until they run out of life.

## Instructions and Controls

**Instructions**

The goal of the game is to kill as many enemies as possible before you run out of life. Kill Enemies killed have a chance to drop extra health.

**Controls**
* W/A/S/D or Arrow Keys to move around the screen
* Press Spacebar to swing the sword
* Hold Spacebar to charge spin attack
* Release Spacebar to perform spin attack once charged

## Technologies employed

* Vanilla JavaScript for game logic.
* HTML5 Canvas for rendering.
* Webpack to bundle various scripts into a single source.

## Features and Implementation

#### Enemy Pathing

Enemies with move around obsticales to get to the player. This is achieved by creating a line at the angle between the enemy and the player.  If this line intersects with any obstacles the enemies angle is incremented both clockwise and counter clockwise until an angle is found that does not intersect with any obstacles.  Once an angle is found, a vector is created from that angle for the enemy to move.

```javascipt
findMoveAngle() {
  const angleToLink = this.angleToPos(this.link.pos);
  let angleToLink1 = angleToLink;
  let angleToLink2 = angleToLink;
  let dist = this.distanceToObject(this.link);

  if (dist > 150) {
    dist = 150;
  }

  let timeOut;
  while (true) {
    if (!this.checkObstacles(angleToLink1, dist)) {
      this.angle2 = false;
      timeOut = setTimeout(() => this.angle2 = true, 5000);
      return angleToLink1;
    }
    
    if (!this.checkObstacles(angleToLink2, dist)) {
      this.angle1 = false;
      timeOut = setTimeout(() => this.angle1 = true, 5000);
      return angleToLink2;
    }
    if (angleToLink1 > Math.PI + angleToLink) {
      return angleToLink;
    }

    angleToLink1 += 0.1;
    angleToLink2 -= 0.1;
  }
}

checkObstacles(angle, dist) {
  const obstacles = this.game.obstacles;
  for (let i = 0; i < obstacles.length; i++) {
    const obj = obstacles[i];
    if (this.objectBetweenSelfAndLink(obj, angle, dist)) {
      return true;
    }
  }
  return false;
}

objectBetweenSelfAndLink(obj, angle, dist) {
  const borders = [
    [obj.x(), obj.y(), obj.x() + obj.width(), obj.y()],
    [obj.x(), obj.y(), obj.x(), obj.y() + obj.height()],
    [obj.x() + obj.width(), obj.y() + obj.height(), obj.x() + obj.width(), obj.y()],
    [obj.x() + obj.width(), obj.y() + obj.height(), obj.x(), obj.y() + obj.height()]
  ];

  const corners = [
    [this.x(), this.y()],
    [this.x(), this.y() + this.height()],
    [this.x() + this.width(), this.y()],
    [this.x() + this.width(), this.y() + this.height()]
  ];

  for (let i = 0; i < borders.length; i++) {
    for (let j = 0; j < corners.length; j++) {
      const corner = corners[j];

      const pos = borders[i];

      const newPos = this.findNewPoint(corner[0], corner[1], angle, dist);
      if (this.intersects(corner[0], corner[1], newPos.x, newPos.y, ...pos)) {
        return true;
      }
    }
  }
}

intersects(a, b, c, d, p, q, r, s) {
  let det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);

  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;

    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
}

findNewPoint(x, y, angle, distance) {
  let result = {};
  result.x = Math.round(Math.cos(angle) * distance + x);
  result.y = Math.round(Math.sin(angle) * distance + y);

  return result;
}
```
