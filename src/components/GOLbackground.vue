<template>
  <canvas id="gameOfLife"></canvas>
</template>

<script setup>
        import {ref, onMounted, onBeforeMount, onUnmounted} from 'vue';
        const running = ref(true);

        onMounted(()=>{
            const canvas = document.getElementById("gameOfLife");
            const ctx = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // We find here the size of the grid to cover the whole screen
            const cellSize = 20;
            let rows = Math.floor(window.innerHeight/cellSize)+1;
            let cols = Math.floor(window.innerWidth/cellSize)+1;

            let grid;
            let fadeEffectGrid;

            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                rows = Math.floor(window.innerHeight/cellSize)+1;
                cols = Math.floor(window.innerWidth/cellSize)+1;
                
                grid = []
                for(let i=0; i<rows; i++){
                    let list = [];
                    for(let j=0; j<cols; j++) list.push(Math.random() > 0.85 ? 1 : 0);
                    grid.push(list);
                }
                fadeEffectGrid = grid.map(arr => [...arr]); // Full duplication
            }
            window.addEventListener("resize", resizeCanvas);
            resizeCanvas(); // Generate for the first time the full 2d array

            function nextGeneration() {
                let newGrid = grid.map(arr => [...arr]); // Full duplication
                for (let y = 0; y < rows; y++) { // For each row
                    for (let x = 0; x < cols; x++) { // For each col
                        let neighbors = 0; // We will count the number of living cells nearby
                        for (let dy = -1; dy <= 1; dy++) { // We loop through the grid, starting by the cell at the upper left corner of the one we are working on
                            for (let dx = -1; dx <= 1; dx++) { // And stopping at the lower right corner
                                if (dx == 0 && dy == 0) continue; //We don't count the considered cell 
                                let ny = (y + dy + rows)%rows; // We find here the real coords in the grid
                                let nx = (x + dx + cols)%cols;
                                neighbors += grid[ny][nx]; // We count the adjacent cell. We are in a tore, so other side is checked as well
                            }
                        }
                        if (grid[y][x] == 1) { // Our cell is alive
                            if (neighbors < 2 || neighbors > 3 || Math.random() > 0.999) newGrid[y][x] = 0; // Dies, and a small chance to die in any case
                        } else { // Our cell is dead
                            if (neighbors == 3) newGrid[y][x] = 1; // Alive
                            if (Math.random() > 0.999){
                                // Very small chance for a new group to spawn

                                for (let dy = -2; dy <= 2; dy++) {
                                    for (let dx = -2; dx <= 2; dx++) {
                                        let ny = (y + dy + rows)%rows; // We find here the real coords in the grid
                                        let nx = (x + dx + cols)%cols;
                                        if(Math.random()<0.7) grid[ny][nx] = 1; // 70% of chance to be alive
                                    }
                                }

                            } // End of chance based respawn
                        }
                    }
                }
                grid = newGrid;
            }

            function drawGrid() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let y = 0; y < rows; y++) {
                    for (let x = 0; x < cols; x++) {
                        if (grid[y][x]) {
                            fadeEffectGrid[y][x] = 1; // This cell is alive, opacity is full
                        } else {
                            fadeEffectGrid[y][x] = Math.max(0, fadeEffectGrid[y][x] - 0.4); // Cell died, it will fade out
                        }

                        if (fadeEffectGrid[y][x] > 0) {
                            ctx.fillStyle = `rgba(34, 35, 35, ${fadeEffectGrid[y][x]})`;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                    }
                }
            }

            function update() {
                nextGeneration();
                drawGrid();
                if(running.value) setTimeout(update, 200); // We don't want it to be too quick
            }
            update();
        });

        onUnmounted(()=>{
            window.removeEventListener("resize", resizeCanvas);
            running.value = false;
        })
</script>

<style scoped>
    canvas{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1; /* Derrière le contenu */
        border: 2px red;
    }
</style>