const content = document.getElementById('content');

function updateCounter(party, count, percentage, votes) {
    const countElement = document.getElementById(`${party}-count`);
    if (countElement) {
        countElement.textContent = count;
        document.getElementById(`${party}-percentage`).textContent = `${percentage}%`;
        document.getElementById(`${party}-votes`).textContent = `Votes: ${votes}`;
        countElement.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            countElement.style.animation = '';
        }, 500);
    }
}

function renderCounters(democratsCount, republicansCount, demPercentage, repPercentage, demVotes, repVotes) {
    content.innerHTML = `
        <div class="counter-container">
            <div class="counter">
                <h2 class="democrats">Democrats</h2>
                <div id="democrats-count" class="count democrats">${democratsCount}</div>
                <div id="democrats-percentage" class="vote-info">${demPercentage}%</div>
                <div id="democrats-votes" class="vote-info">Votes: ${demVotes}</div>
            </div>
            <div class="counter">
                <h2 class="republicans">Republicans</h2>
                <div id="republicans-count" class="count republicans">${republicansCount}</div>
                <div id="republicans-percentage" class="vote-info">${repPercentage}%</div>
                <div id="republicans-votes" class="vote-info">Votes: ${repVotes}</div>
            </div>
        </div>
    `;
}

async function fetchElectionData() {
    try {
        const response = await fetch('https://politics.api.cnn.io/results/bop/2024-PG-US.json', {
            headers: {
                'accept': '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
                'x-api-key': TOKEN
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch election data');
        }

        const data = await response.json();

        // Extract the relevant counts, percentages, and vote numbers
        const democratsData = data.meta.candidates.DEM;
        const republicansData = data.meta.candidates.REP;

        const democratsCount = democratsData.count;
        const republicansCount = republicansData.count;
        const democratsPercentage = democratsData.votePercentStr;
        const republicansPercentage = republicansData.votePercentStr;
        const democratsVotes = democratsData.voteStr;
        const republicansVotes = republicansData.voteStr;

        // Render the counters or update them if they already exist
        if (content.querySelector('.counter-container')) {
            updateCounter('democrats', democratsCount, democratsPercentage, democratsVotes);
            updateCounter('republicans', republicansCount, republicansPercentage, republicansVotes);
        } else {
            renderCounters(democratsCount, republicansCount, democratsPercentage, republicansPercentage, democratsVotes, republicansVotes);
        }
    } catch (error) {
        console.error('Error:', error);
        content.innerHTML = '<div class="error">Error fetching election data</div>';
    }
}

function startPolling() {
    fetchElectionData(); // Initial fetch on load
    setInterval(fetchElectionData, 10000); // Poll every 10 seconds
}

startPolling();
