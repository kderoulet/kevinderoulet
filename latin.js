const showAnswerButton = document.querySelector('#show-answer')
let showAnswer = false
const vocabButtonSuccess = document.querySelector('#vocab-button-success')
const vocabButtonFail = document.querySelector('#vocab-button-fail')
const vocabWord = document.querySelector('#vocab-word')
const vocabDefinition = document.querySelector('#vocab-definition')

// āēīōū
let words = {
    "mē": {
        word: "mē",
        definition: "me, myself"
    },
    "quid": {
        word: "quid",
        definition: "what (quid pro quo, quiditty)"
    },
    "nihil": {
        word: "nihil",
        definition: "nothing (nil, nihilism, annihilate)"
    },
    "nōn": {
        word: "nōn",
        definition: "not"
    },
    "saepe": {
        word: "saepe",
        definition: "often"
    },
    "sī": {
        word: "sī",
        definition: "if"
    },
    "amō": {
        word: "amō, amāre, amāvī, amātum",
        definition: "to love, to like (amorous, amatory, Amanda)"
    },
    "amābō tē": {
        word: "amābō tē",
        definition: "please (lit., I will love you)"
    },
    "cōgitō": {
        word: "cōgitō, cōgitāre, cōgitāvī, cōgitātum",
        definition: "to think, ponder, consider, plan (cogitate, cogitation, cogitative)"
    },
    "dēbeō": {
        word: "dēbeō, dēbēre, dēbuī, dēbitum",
        definition: "to owe; ought, must, should (debt, debit, due, duty)"
    },
    "dō": {
        word: "dō, dare, dedī, datum",
        definition: "to give, offer (date, data, dative)"
    },
    "errō": {
        word: "errō, errāre, errāvī, errātum",
        definition: "to wander; err, go astray, make a mistake, be mistaken (erratic, errant, erroneous, error, aberration)"
    },
    "laudō": {
        word: "laudō, laudāre, laudāvī, laudātum",
        definition: "to praise (laud, laudable, laudatory)"
    },
    "moneō": {
        word: "moneō, monere, monuī, monitum",
        definition: "to remind, advice, warn (admonish, admonition, monitor, monument, monster, premonition)"
    },
    "salveō": {
        word: "salveō, salvēre",
        definition: "to be well, be in good health"
    },
    "salvē": {
        word: "salvē, salvēte",
        definition: "hello, greetings! (salvation, salver, salvage)"
    },
    "servō": {
        word: "servō, servāre, servāvī, servātum",
        definition: "to preserve, save, keep, guard (observe, preserve, reserve, reservoir)"
    },
    "cōnservō": {
        word: "cōnservō, cōnservāre, cōnservāvī, cōnservātum (conservō)",
        definition: "a stronger form of servo, to preserve, conserve, maintain (conservative, conservation, conservator)"
    },
    "terreō": {
        word: "terreō, terrēre, terruī, territum",
        definition: "to frighten, terrify (terrible, terrific, terrify, terror, terrorist, deter)"
    },
    "valeō": {
        word: "valeō, valēre, valuī, valitūrum",
        definition: "to be strong, have power; be well"
    },
    "valē": {
        word: "valē (valēte)",
        definition: "good-bye, farewell! (valedictorian, valid, invalidate, prevail, prevelant)"
    },
    "videō": {
        word: "videō, vidēre, vīdī, vīsum",
        definition: "to see; observe, understand (video, provide, evident, view, review, revise, revision, television)"
    },
    "vocō": {
        word: "vocō, vocāre, vocāvī, vocātum",
        definition: "to call, summon (vocation, advocate, vocabulary, convoke, evoke, invoke, provoke, revoke"
    },
    
}

function toggleDisplay() {
    if (!showAnswer) {
        showAnswer = true
        showAnswerButton.classList.remove('visible')
        vocabButtonSuccess.classList.add('visible')
        vocabButtonFail.classList.add('visible')
        vocabDefinition.classList.add('visible')
    } else {
        showAnswer = false
        showAnswerButton.classList.add('visible')
        vocabButtonSuccess.classList.remove('visible')
        vocabButtonFail.classList.remove('visible')
        vocabDefinition.classList.remove('visible')
    }
}

function shuffle(wordList) {
    for (let i = wordList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = wordList[i];
        wordList[i] = wordList[j];
        wordList[j] = temp;
    }
    return wordList;
}

function setWord(word) {
    vocabWord.textContent = words[word]["word"]
    vocabDefinition.textContent = words[word]["definition"]
}

showAnswerButton.addEventListener('click', toggleDisplay)

function initialize() {
    let wordArray = Object.keys(words)
    wordArray = shuffle(wordArray)
    
    let i = 0
    setWord(wordArray[i])

    vocabButtonSuccess.addEventListener('click', () => nextWord("success"))
    vocabButtonFail.addEventListener('click', () => nextWord("fail"))

    function nextWord(message) {
        console.log('called')
        if (message !== "success") {
            wordArray.push(wordArray[i])
        }
        i++
        if (i === wordArray.length) {
            vocabButtonSuccess.classList.remove('visible')
            vocabButtonFail.classList.remove('visible')
            vocabDefinition.classList.remove('visible')
            vocabWord.textContent = "Success!"
            
        } else {
            setWord(wordArray[i])            
            toggleDisplay()
        }
    }
}

initialize()