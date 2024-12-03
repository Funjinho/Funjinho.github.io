const family = ['Sara', 'Nuno', 'Susana', 'Bertina', 'Deolinda', 'Tozé'];

function getSecretFriend(friendList) {
  const availableFriends = [...friendList]; // Create a copy

  for (const member of friendList) {
    let secretFriend;
    do {
      const randomIndex = Math.floor(Math.random() * availableFriends.length);
      secretFriend = availableFriends[randomIndex];
    } while (secretFriend === member); // Retry if they're the same

    console.log(`${member}, your secret friend is ${secretFriend}`);
    availableFriends.splice(availableFriends.indexOf(secretFriend), 1);
  }
}

getSecretFriend(family);