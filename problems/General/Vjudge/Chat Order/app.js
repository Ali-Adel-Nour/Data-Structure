function chatOrder(messages) {
  const chatList = [];
  const positionMap = new Map();

  messages.forEach((friend) => {
    if (positionMap.has(friend)) {
      // Remove the friend from the current position
      const index = positionMap.get(friend);
      chatList.splice(index, 1);
    }
    // Insert the friend at the beginning of the list
    chatList.unshift(friend);
    // Update the map with the new positions
    chatList.forEach((f, i) => {
      positionMap.set(f, i);
    });
  });

  return chatList;
}

// Example usage:
const messages = ['alex', 'ivan', 'roman', 'ivan'];
const result = chatOrder(messages);
console.log(result.join('\n')); // Output should be: ivan, roman, alex
