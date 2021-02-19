class Quiz {
    constructor() {

    }

    getState() {
        database.ref('gameState').on("value", (data) => {
            gameState = data.val()
        })
    }

    update(state) {
        database.ref('/').update({
            "gameState": state
        })

    }

    async Start() {
        if (gameState === 0) {
            contestant = new Contestant();
            var constentantCountRef = await database.ref('contestantCount').once('value')
            if (constentantCountRef.exists()) {
                contestantCount = constentantCountRef.val();
                contestant.getCount()
            }
            question = new Question()
            question.display()
        }
    }
}