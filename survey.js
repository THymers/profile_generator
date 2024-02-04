const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);

  rl.question("What's an activity you like doing?", (activity) => {
    console.log(`Your favorite activity: ${activity}`);

    rl.question("What do you listen to while doing that?", (music) => {
      console.log(`Your Favorite song: ${music}`);

      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        (meal) => {
          console.log(`Your favorite meal: ${meal}`);

          rl.question(
            "What's your favourite thing to eat for that meal?",
            (food) => {
              console.log(`Your favorite food: ${food}`);

              rl.question(
                "Which sport is your absolute favourite?",
                (sport) => {
                  console.log(`Your favorite sport: ${sport}`);

                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    (superpower) => {
                      console.log(`Your amazing superpower: ${superpower}`);

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
