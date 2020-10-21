// DOM Elements
const grids = document.querySelectorAll('.grid');
const headings = document.querySelectorAll('.heading .wrapper .text');

// Entering the screen
function enterScreen(index) {
    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = grid.querySelectorAll('.column');

    grid.classList.add('active');

    gridColumns.forEach(column => {
        column.classList.remove('animate-before', 'animate-after');
    })

    heading.classList.remove('animate-before', 'animate-after');
}

// Leaving the screen
function leaveScreen(index, leaveDelay) { 
    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = grid.querySelectorAll('.column');

    gridColumns.forEach(column => {
        column.classList.add('animate-after');
    })

    heading.classList.add('animate-after');

    setTimeout(() => {
        grid.classList.remove('active');
    }, leaveDelay)

 }

//  Cycle animation
function setupAnimationCycle({ timePerScreen, leaveDelay }) {
    const cycleTime = timePerScreen + leaveDelay;
    let nextIndex = 0;

    function nextCycle() {
        const currentIndex = nextIndex;

        enterScreen(currentIndex);

        setTimeout(() => leaveScreen(currentIndex, leaveDelay), timePerScreen)

        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
    }

    nextCycle();
    
    setInterval(nextCycle, cycleTime)
}

// Exec animation
setupAnimationCycle({
    timePerScreen: 2000, //ms
    leaveDelay: 200 * 7 //ms
})