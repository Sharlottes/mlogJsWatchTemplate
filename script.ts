const messageBuild = getBuilding("message1");

while (true) {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
      print(">");
    }
    wait(0.25);
    printFlush(messageBuild);
  }
}
