const addItem = async (item) => {
    await randomDelay(); // Waits for a random delay
    let div = document.createElement("div"); // Creates a new <div> element
    div.innerHTML = item; // Sets the HTML content of the div to the 'item' passed as an argument
    document.body.append(div); // Appends the created <div> to the end of the document body
};

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        // Creates a new Promise
        timeout = 1 + 6 * Math.random(); // Generates a random timeout value between 1 and 6 seconds
        setTimeout(() => {
            resolve(); // Resolves the Promise after the random timeout
        }, timeout * 1000); // Converts the timeout from seconds to milliseconds and sets it
    });
};

async function main() {
    let t = setInterval(() => {
        // Sets up an interval function that executes every 100 milliseconds
        let last = document.body.getElementsByTagName("div"); // Gets all <div> elements in the document body
        last = last[last.length - 1]; // Selects the last <div> element
        if (last.innerHTML.endsWith("...")) {
            // Checks if the innerHTML of the last <div> ends with "..."
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3); // Removes the last three characters from the innerHTML
        } else {
            last.innerHTML = last.innerHTML + "."; // Adds a dot to the end of the innerHTML
        }
    }, 100); // Sets the interval to 100 milliseconds

    let text = ["Initialized Hacking now reading your data", // Array of strings
                "Reading your Files",
                "Password files Detected",
                "Sending all passwords and personal files to server",
                "Cleaning up"];

    for (const item of text) {
        await addItem(item); // Calls the addItem function for each item in the 'text' array
    }
    await randomDelay(); // Waits for a random delay
    clearInterval(t); // Stops the interval function 't'
}

main(); // Calls the main function
