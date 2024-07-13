# Cell Growth Simulation

## Overview
The Cell Growth Simulation is an interactive web application that simulates the growth patterns of bacterial colonies in a petri dish. Built using React and TypeScript, the app visually demonstrates how bacterial cells divide and spread according to specific biological rules.

## Features
- A 20x20 grid representing the petri dish where cells can be occupied or empty.
- Bacterial cells divide every fixed time interval, provided there is an adjacent empty cell.
- User controls to start/pause the simulation and reset the grid.
- Input field to set the cell division interval.
- Ability to manually place or remove cells by clicking on the grid.

## Technologies Used
- React (with TypeScript)
- CSS for styling
- No external libraries

## Assumptions
- The simulation starts with no cells. Users must place at least one cell to begin.
- The grid size is fixed at 20x20 for this version.

## Performance Analysis
- The application efficiently manages state updates using React's state management.
- The simulation uses a timer to control the cell division interval, ensuring that performance remains smooth even with multiple iterations.
- Error handling is in place to alert users if they try to start the simulation without any cells.

## Live Demo ##
https://vaidehipatel2512.github.io/cell-growth-simulation/

## Source Code Repository ##
https://github.com/Vaidehipatel2512/cell-growth-simulation.git